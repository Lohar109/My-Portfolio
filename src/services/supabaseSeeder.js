import { supabase } from '../config/supabaseClient';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase';
import { projectsData } from '../data/projects';

const GEMINI_API_VERSION = 'v1beta';
const GEMINI_EMBEDDING_MODEL = 'gemini-embedding-2';
const GEMINI_EMBEDDING_DIMENSIONS = 1536;

const getGeminiApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY is missing. Check your .env file and restart the Vite dev server.');
  }

  return apiKey;
};

export const seedDatabase = async () => {
  try {
    console.log("Starting database seeding process via Direct REST API...");

    // Clear existing rows first to prevent duplicate entries polluting similarity searches
    console.log("Cleaning up existing database records to prevent duplicate vector pollution...");
    const { error: deleteError } = await supabase
      .from('portfolio_embeddings')
      .delete()
      .neq('content', '');
    
    if (deleteError) {
      console.warn("Warning: Could not clear old portfolio embeddings, proceeding anyway:", deleteError);
    } else {
      console.log("Successfully cleared previous vector records!");
    }

    const chunks = [];

    // 1. Profile Data Text Block
    chunks.push({
      content: `Identity: ${VAIBHAV_KNOWLEDGE.personal.name}. Role: ${VAIBHAV_KNOWLEDGE.personal.role}. Location: ${VAIBHAV_KNOWLEDGE.personal.location}. Born: 1999-10-01.`,
      metadata: { category: "profile" }
    });

    // 2. Academics Data Text Block
    chunks.push({
      content: `Education Timeline: Master of Computer Applications (M.C.A.) with current CGPA ${VAIBHAV_KNOWLEDGE.academics.postGraduation.currentCGPA} from ${VAIBHAV_KNOWLEDGE.academics.postGraduation.institute}. Bachelor of Science (Computer Science) with final CGPA ${VAIBHAV_KNOWLEDGE.academics.graduation.finalCGPA} from ${VAIBHAV_KNOWLEDGE.academics.graduation.college}.`,
      metadata: { category: "education" }
    });

    // 3. Projects Data Text Blocks
    for (const project of projectsData) {
      chunks.push({
        content: `Project Title: ${project.title}. Role: ${project.role}. Summary: ${project.summary}. Core Challenge: ${project.challenge}. Technical Stack Used: ${(project.stack || []).join(', ')}.`,
        metadata: { category: "project", slug: project.slug }
      });
    }

    // 4. Achievements Data Text Block
    const achievementsText = VAIBHAV_KNOWLEDGE.achievements
      .map(a => `Achievement: ${a.title} - ${a.description}`)
      .join(' ');
    chunks.push({
      content: `Professional Milestones & Achievements: ${achievementsText}`,
      metadata: { category: "achievements" }
    });

    // 5. Why Hire / Professional Pitch Text Block
    const pitchText = VAIBHAV_KNOWLEDGE.whyHirePitch.points.join(' ');
    chunks.push({
      content: `Professional Pitch & Why Hire: ${VAIBHAV_KNOWLEDGE.whyHirePitch.headline} ${pitchText}`,
      metadata: { category: "why_hire" }
    });

    console.log(`Generated ${chunks.length} clean text blocks. Dispatching Direct HTTP vectors requests...`);

    const apiKey = getGeminiApiKey();

    for (const chunk of chunks) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/${GEMINI_API_VERSION}/models/${GEMINI_EMBEDDING_MODEL}:embedContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: { parts: [{ text: chunk.content }] },
            outputDimensionality: GEMINI_EMBEDDING_DIMENSIONS
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Google API Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      const vectorArray = result?.embedding?.values;

      if (!vectorArray) {
        throw new Error(`No embedding vector found in response for: ${chunk.content}`);
      }

      const { error } = await supabase.from('portfolio_embeddings').insert({
        content: chunk.content,
        embedding: vectorArray,
        metadata: chunk.metadata
      });

      if (error) throw error;
    }

    console.log("Database successfully seeded with AI vectors! 🎉 Check your Supabase Table Editor.");
    return true;
  } catch (error) {
    console.error("Error during database seeding:", error);
    return false;
  }
};