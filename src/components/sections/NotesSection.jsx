import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Download,
  BookOpen,
  Calendar,
  Clock,
  X,
  Check,
  Copy,
  Sparkles,
  ArrowUpRight,
  Filter,
  FileText,
  Bookmark,
  Layers,
  ChevronRight
} from 'lucide-react';
import { notesData } from '../../data/notes.js';

// Category color definitions matching the portfolio's style
const categoryColors = {
  'Frontend Development': {
    bg: 'bg-blue-50/70 border-blue-100 text-blue-600',
    accent: 'bg-blue-600',
    glow: 'shadow-[0_2px_10px_rgba(37,99,235,0.08)]'
  },
  'Backend Development': {
    bg: 'bg-violet-50/70 border-violet-100 text-violet-600',
    accent: 'bg-violet-600',
    glow: 'shadow-[0_2px_10px_rgba(139,92,246,0.08)]'
  },
  'Database & Storage': {
    bg: 'bg-emerald-50/70 border-emerald-100 text-emerald-600',
    accent: 'bg-emerald-600',
    glow: 'shadow-[0_2px_10px_rgba(16,185,129,0.08)]'
  },
  'DevOps & Deployment': {
    bg: 'bg-indigo-50/70 border-indigo-100 text-indigo-600',
    accent: 'bg-indigo-600',
    glow: 'shadow-[0_2px_10px_rgba(79,70,229,0.08)]'
  },
  'AI / Machine Learning': {
    bg: 'bg-rose-50/70 border-rose-100 text-rose-600',
    accent: 'bg-rose-600',
    glow: 'shadow-[0_2px_10px_rgba(225,29,72,0.08)]'
  }
};

// Default styling for fallback categories
const defaultCategoryColor = {
  bg: 'bg-slate-50 border-slate-100 text-slate-650',
  accent: 'bg-slate-600',
  glow: 'shadow-sm'
};

export default function NotesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [activeNote, setActiveNote] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [copiedNoteState, setCopiedNoteState] = useState(false);
  const [downloadingAll, setDownloadingAll] = useState(false);

  // Extract unique categories from notes data
  const categories = useMemo(() => {
    return ['All', ...new Set(notesData.map(note => note.category))];
  }, []);

  // Filter notes based on search query, category, and difficulty
  const filteredNotes = useMemo(() => {
    return notesData.filter(note => {
      const matchesSearch = 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || note.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  // Statistics summaries
  const stats = useMemo(() => {
    return {
      totalNotes: notesData.length,
      categoriesCount: categories.length - 1,
      advancedNotesCount: notesData.filter(note => note.difficulty === 'Advanced').length,
    };
  }, [categories]);

  // Download individual note helper
  const handleDownloadNote = (note) => {
    const filename = `${note.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    const blob = new Blob([note.content], { type: 'text/markdown;charset=utf-8;' });
    
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Download all notes compiled as a single Markdown file helper
  const handleDownloadAllNotes = () => {
    setDownloadingAll(true);
    setTimeout(() => {
      let compilation = `# Vaibhav Lohar - Complete Skill Notes & Reference Guide\n\n`;
      compilation += `Generated on: ${new Date().toLocaleDateString()}\n`;
      compilation += `Total Topics: ${notesData.length}\n\n`;
      compilation += `This is a compilation of developer notebooks covering frontend optimizations, backend architectures, databases, DevOps, and machine learning pipelines.\n\n---\n\n`;

      notesData.forEach((note, index) => {
        compilation += `## [Note ${index + 1}/${notesData.length}] ${note.title}\n`;
        compilation += `**Category**: ${note.category} | **Difficulty**: ${note.difficulty} | **Read Time**: ${note.readTime}\n`;
        compilation += `**Last Updated**: ${note.lastUpdated}\n\n`;
        compilation += `> ${note.summary}\n\n`;
        compilation += `${note.content}\n\n`;
        compilation += `\n---\n\n`;
      });

      const blob = new Blob([compilation], { type: 'text/markdown;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'Vaibhav_Lohar_Developer_Notebook.md');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setDownloadingAll(false);
    }, 800);
  };

  // Code block copy handler
  const handleCopyCode = (codeText, blockId) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(blockId);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Interactive Markdown Code Block Parser
  const renderNoteContent = (content) => {
    if (!content) return null;
    
    // Split content by code blocks: ```[lang]\n[code]\n```
    const parts = content.split(/(```[a-z]*\n[\s\S]*?\n```)/g);

    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        // Parse code block
        const lines = part.split('\n');
        const firstLine = lines[0]; // e.g. ```javascript
        const language = firstLine.replace('```', '').trim() || 'code';
        const codeText = lines.slice(1, -1).join('\n');
        const blockId = `code-block-${index}`;

        return (
          <div key={blockId} className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0d0e15] shadow-lg">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#090a0f] px-4 py-2.5 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                {language.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => handleCopyCode(codeText, blockId)}
                className="flex items-center gap-1.5 rounded bg-slate-800 px-2.5 py-1 text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
              >
                {copiedCodeId === blockId ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            {/* Code */}
            <pre className="overflow-x-auto p-4 text-[13.5px] leading-6 font-mono text-[#e4f0fc] scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              <code>{codeText}</code>
            </pre>
          </div>
        );
      } else {
        // Standard Text Content - Render simple paragraph styling
        const paragraphs = part.split('\n');
        return paragraphs.map((para, pIdx) => {
          const trimmed = para.trim();
          if (!trimmed) return null;

          // Headings
          if (trimmed.startsWith('# ')) {
            return (
              <h1 key={`h1-${pIdx}`} className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-2">
                {trimmed.replace('# ', '')}
              </h1>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={`h2-${pIdx}`} className="mt-6 mb-3 text-xl font-bold tracking-tight text-slate-900">
                {trimmed.replace('## ', '')}
              </h2>
            );
          }
          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={`h3-${pIdx}`} className="mt-5 mb-2 text-lg font-bold tracking-tight text-slate-900">
                {trimmed.replace('### ', '')}
              </h3>
            );
          }

          // Bullet points
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return (
              <ul key={`ul-${pIdx}`} className="mb-3 ml-6 list-outside list-disc space-y-1">
                <li className="text-[15px] leading-7 text-slate-650 font-medium">
                  {trimmed.substring(2)}
                </li>
              </ul>
            );
          }
          
          if (trimmed.startsWith('1. ') || /^\d+\.\s/.test(trimmed)) {
            return (
              <ol key={`ol-${pIdx}`} className="mb-3 ml-6 list-outside list-decimal space-y-1">
                <li className="text-[15px] leading-7 text-slate-650 font-medium">
                  {trimmed.replace(/^\d+\.\s+/, '')}
                </li>
              </ol>
            );
          }

          // Blockquote
          if (trimmed.startsWith('> ')) {
            return (
              <blockquote key={`bq-${pIdx}`} className="my-4 border-l-4 border-violet-500 bg-violet-50/40 px-4 py-3.5 text-[14.5px] italic leading-6 text-slate-700 rounded-r-lg">
                {trimmed.substring(2)}
              </blockquote>
            );
          }

          // Divider
          if (trimmed === '---') {
            return <hr key={`hr-${pIdx}`} className="my-6 border-t border-slate-200" />;
          }

          // Parse simple inline markdown links & bold tags
          let formattedText = trimmed;
          
          // Replace bold markdown
          formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
          // Replace inline code tags
          formattedText = formattedText.replace(/`([^`]+)`/g, '<code class="bg-violet-50 text-violet-650 px-1.5 py-0.5 rounded font-mono text-[13px] border border-violet-100">$1</code>');

          return (
            <p
              key={`p-${pIdx}`}
              className="mb-4 leading-7 text-[15px] font-medium text-slate-650"
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />
          );
        });
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-16 md:px-24 md:py-24">
      {/* Hero Header */}
      <div className="relative mb-14 overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] backdrop-blur-2xl md:p-12">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-gradient-to-br from-violet-250/20 to-indigo-250/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-gradient-to-tr from-rose-250/25 to-blue-250/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1 text-xs font-semibold text-violet-600">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Skill-Related Notes</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Technical Reference Notebook
            </h1>
            <p className="mt-4 text-base font-medium leading-7 text-slate-500 sm:text-lg">
              Explore deep dives, architectural studies, and cheat sheets detailing Frontend structures, Backend frameworks, databases, RAG systems, and optimized deployment blueprints. Free to read and download.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleDownloadAllNotes}
              disabled={downloadingAll}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-[#090a0f] px-6 py-4.5 text-sm font-semibold text-white shadow-xl shadow-black/10 transition duration-300 hover:scale-[1.02] hover:bg-black/90 disabled:opacity-50 cursor-pointer"
            >
              <Download className={`h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 ${downloadingAll ? 'animate-bounce' : ''}`} />
              <span>{downloadingAll ? 'Compiling Notes...' : 'Download Full Notebook'}</span>
            </button>
          </div>
        </div>

        {/* Info Stats Bar */}
        <div className="relative z-10 mt-10 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3 md:gap-8">
          <div>
            <p className="text-sm font-semibold text-slate-400">Total Notebooks</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">{stats.totalNotes}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400">Skill Domains</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">{stats.categoriesCount}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-slate-400">Advanced Articles</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">{stats.advancedNotesCount}</p>
          </div>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search notes, tags, or concepts..."
            className="w-full rounded-2xl border border-slate-200 bg-white/70 py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-white focus:shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-650"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Selection Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/75 px-3 py-1.5">
            <Filter className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[12px] font-semibold text-slate-500">Difficulty:</span>
            <select
              className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="mb-8 overflow-x-auto scrollbar-none">
        <div className="flex gap-2.5 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl border px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'border-[#090a0f] bg-[#090a0f] text-white shadow-md'
                    : 'border-slate-200 bg-white/70 text-slate-650 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Notes Cards Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredNotes.map((note) => {
              const catStyle = categoryColors[note.category] || defaultCategoryColor;

              return (
                <motion.div
                  key={note.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <div>
                    {/* Top bar */}
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-wide ${catStyle.bg}`}>
                        {note.category}
                      </span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        note.difficulty === 'Advanced' ? 'bg-red-50 text-red-650' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {note.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2.5 text-lg font-bold text-slate-900 group-hover:text-violet-650 transition-colors">
                      {note.title}
                    </h3>

                    {/* Summary */}
                    <p className="mb-5 line-clamp-3 text-sm font-medium leading-6 text-slate-450">
                      {note.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {note.tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-slate-50 border border-slate-100 px-2 py-0.5 text-[10.5px] font-semibold text-slate-500">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4.5">
                      {/* Meta reading stats */}
                      <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {note.readTime}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Download btn */}
                        <button
                          type="button"
                          onClick={() => handleDownloadNote(note)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition duration-300 cursor-pointer"
                          title="Download Markdown"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                        {/* Read btn */}
                        <button
                          type="button"
                          onClick={() => setActiveNote(note)}
                          className="flex items-center gap-1 rounded-xl bg-slate-50 hover:bg-violet-50 text-slate-800 hover:text-violet-650 px-3.5 py-2 text-xs font-bold transition duration-300 border border-slate-200/50 cursor-pointer"
                        >
                          <span>Open</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl border border-dashed border-slate-200 bg-white/40">
          <FileText className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-base font-bold text-slate-800">No notes found</h3>
          <p className="mt-1 text-sm font-medium text-slate-400">Try modifying your search queries or category filters.</p>
        </div>
      )}

      {/* Immersive Note Reader Overlay */}
      <AnimatePresence>
        {activeNote && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end overflow-hidden">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setActiveNote(null)}
            />

            {/* Reading panel drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 flex h-full w-full flex-col border-l border-slate-200 bg-white shadow-2xl md:w-[720px] lg:w-[860px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f9fa] px-6 py-4 md:px-8">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Bookmark className="h-4 w-4 text-violet-500" />
                  <span>Vaibhav Lohar Notebook</span>
                  <span>/</span>
                  <span className="text-slate-800">{activeNote.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download markdown inside reader */}
                  <button
                    type="button"
                    onClick={() => handleDownloadNote(activeNote)}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-650 hover:bg-slate-50 hover:text-slate-800 transition duration-300 cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download MD</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveNote(null)}
                    className="flex h-9.5 w-9.5 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition duration-300 cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Reader scroll body */}
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 scrollbar-thin">
                {/* Meta details */}
                <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {activeNote.readTime}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    Last updated: {activeNote.lastUpdated}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                    activeNote.difficulty === 'Advanced' ? 'bg-red-50 text-red-650' : 'bg-amber-50 text-amber-650'
                  }`}>
                    {activeNote.difficulty}
                  </span>
                </div>

                {/* Subtitle / summary */}
                <div className="mb-8 border-l-4 border-violet-500 bg-violet-50/40 px-5 py-4 rounded-r-xl">
                  <p className="text-[15px] font-semibold italic leading-7 text-slate-700">
                    {activeNote.summary}
                  </p>
                </div>

                {/* Main Note content */}
                <article className="prose prose-slate max-w-none prose-p:leading-7">
                  {renderNoteContent(activeNote.content)}
                </article>
              </div>

              {/* Footer bar */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-[#f8f9fa] px-6 py-4.5 md:px-8">
                <div className="flex gap-1.5">
                  {activeNote.tags.map(tag => (
                    <span key={tag} className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10.5px] font-semibold text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveNote(null)}
                  className="rounded-xl bg-[#090a0f] hover:bg-black/90 px-5 py-2 text-xs font-bold text-white transition duration-300 cursor-pointer"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
