import { supabase } from '../config/supabaseClient';
import { VAIBHAV_KNOWLEDGE } from '../data/knowledgeBase';
import { projectsData } from '../data/projects';

export const seedDatabase = async () => {
  try {
    console.log("Starting database seeding process...");
    const chunks = [];

    // 1. Profile Data ko Text String mein convert karke array mein daalo
    chunks.push({
      content: `Identity: ${VAIBHAV_KNOWLEDGE.personal.name}. Role: ${VAIBHAV_KNOWLEDGE.personal.role}. Location: ${VAIBHAV_KNOWLEDGE.personal.location}. Born: 1999-10-01.`,
      metadata: { category: "profile" }
    });

    // 2. Academics Data ko convert karo
    chunks.push({
      content: `Education Timeline: Master of Computer Applications (M.C.A.) with current CGPA ${VAIBHAV_KNOWLEDGE.academics.postGraduation.currentCGPA} from ${VAIBHAV_KNOWLEDGE.academics.postGraduation.institute}. Bachelor of Science (Computer Science) with final CGPA ${VAIBHAV_KNOWLEDGE.academics.graduation.finalCGPA} from ${VAIBHAV_KNOWLEDGE.academics.graduation.college}.`,
      metadata: { category: "education" }
    });

    // 3. Har ek project ki details ke dynamic blocks banao
    for (const project of projectsData) {
      chunks.push({
        content: `Project Title: ${project.title}. Role: ${project.role}. Summary: ${project.summary}. Core Challenge: ${project.challenge}. Technical Stack Used: ${(project.stack || []).join(', ')}.`,
        metadata: { category: "project", slug: project.slug }
      });
    }

    console.log(`Generated ${chunks.length} clean text blocks. Now generating vector embeddings via Gemini...`);

    // 4. Gemini API ka use karke embeddings vectors generate karna aur Supabase mein push karna
    // Kyunki hum frontend par hain, hum direct window.fetch ya Gemini standard endpoints use kar sakte hain
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    for (const chunk of chunks) {
      // Gemini embedding service endpoint call
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: "models/text-embedding-004",
            content: { parts: [{ text: chunk.content }] }
          })
        }
      );

      const result = await response.json();
      const vectorArray = result?.embedding?.values;

      if (!vectorArray) {
        throw new Error(`Failed to generate embedding for: ${chunk.content}`);
      }

      // Supabase table mein live insertion call
      const { error } = await supabase.from('portfolio_embeddings').insert({
        content: chunk.content,
        embedding: vectorArray, // Array format vector ([0.12, -0.04...])
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