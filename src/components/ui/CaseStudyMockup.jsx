import React from 'react'
import {
  TrendingUp,
  AlertTriangle,
  Server,
  Terminal as TerminalIcon,
  Award,
  Database,
  Search,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  Boxes,
} from 'lucide-react'

// Simple helper to get slug-specific badge label
function getSlugVisualText(slug) {
  switch (slug) {
    case 'studioflow': return 'AI'
    case 'portfolio': return 'RAG'
    case 'marketpulse': return '3D'
    case 'campus-connect': return 'DB'
    case 'insight-board': return 'KPI'
    case 'support-flow': return 'NLP'
    case 'media-ops': return 'CDN'
    default: return 'APP'
  }
}

export default function CaseStudyMockup({ tab, slug, themeColor }) {
  const visualText = getSlugVisualText(slug)

  // Map theme colors to CSS values
  const themeClasses = {
    violet: {
      text: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-100',
      gStart: 'from-violet-500',
      gEnd: 'to-indigo-600',
      accent: '#7c3aed',
      accentLight: '#ede9fe',
    },
    rose: {
      text: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      gStart: 'from-rose-500',
      gEnd: 'to-pink-600',
      accent: '#e11d48',
      accentLight: '#ffe4e6',
    },
    amber: {
      text: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      gStart: 'from-amber-500',
      gEnd: 'to-orange-600',
      accent: '#d97706',
      accentLight: '#fef3c7',
    },
    indigo: {
      text: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      gStart: 'from-indigo-500',
      gEnd: 'to-blue-600',
      accent: '#4f46e5',
      accentLight: '#e0e7ff',
    },
    emerald: {
      text: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      gStart: 'from-emerald-500',
      gEnd: 'to-teal-600',
      accent: '#059669',
      accentLight: '#d1fae5',
    },
  }[themeColor] || {
    text: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    gStart: 'from-violet-500',
    gEnd: 'to-indigo-600',
    accent: '#7c3aed',
    accentLight: '#ede9fe',
  }

  // Get dynamic mock code lines for the solution tab
  const getMockCode = (slug) => {
    switch (slug) {
      case 'studioflow':
        return [
          'async function onboardProduct(image, audio) {',
          '  const visionTags = await VisionAPI.tag(image);',
          '  const voiceTranscription = await Audio.transcribe(audio);',
          '  ',
          '  // Extract structured catalog metadata',
          '  const productData = await GenAI.extractStructuredJSON({',
          '    prompt: voiceTranscription,',
          '    attributes: ["name", "category", "price", "variants"],',
          '    tags: visionTags',
          '  });',
          '  ',
          '  return await db.products.insert(productData);',
          '}',
        ]
      case 'portfolio':
        return [
          'async function queryAssistant(userQuery) {',
          '  const queryVector = await Embeddings.create(userQuery);',
          '  ',
          '  // Perform real-time grounded vector search',
          '  const context = await vectorDb.similaritySearch({',
          '    vector: queryVector,',
          '    limit: 5,',
          '    filter: { source: "portfolio_rag" }',
          '  });',
          '  ',
          '  const response = await LangChain.reason({',
          '    prompt: userQuery,',
          '    context: context,',
          '    guardrails: ["concise", "factual"]',
          '  });',
          '  ',
          '  return response;',
          '}',
        ]
      case 'marketpulse':
        return [
          'void ContainerOptimiser::solveBinPacking3D() {',
          '  sortBoxesByFragilityAndVolume();',
          '  ',
          '  for (const auto& box : m_cargoBoxes) {',
          '    Position bestPos = findMinimalWastedSpace(box);',
          '    ',
          '    if (isValidPosition(bestPos, box) && ',
          '        fitsWeightLimits(box.weight)) {',
          '      m_packingLayout.add(box, bestPos);',
          '      updateCenterOfGravity();',
          '    }',
          '  }',
          '  emit layoutOptimisationComplete(m_packingLayout);',
          '}',
        ]
      default:
        return [
          'async function handleSyncRequest(payload) {',
          '  const session = await db.beginTransaction();',
          '  try {',
          '    const validation = await validateSchema(payload);',
          '    if (!validation.isValid) throw new Error("Invalid schema");',
          '    ',
          '    const syncResult = await service.applyUpdates(payload);',
          '    await session.commit();',
          '    return { success: true, syncResult };',
          '  } catch (error) {',
          '    await session.rollback();',
          '    return { success: false, error: error.message };',
          '  }',
          '}',
        ]
    }
  }

  return (
    <div className="w-full aspect-[4/3] min-h-[220px] max-h-[300px] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl flex flex-col relative select-none group/visual border-neutral-800/80">
      {/* 1. Header Toolbar */}
      <div className="h-9 shrink-0 bg-neutral-950 px-4 flex items-center justify-between border-b border-neutral-900">
        {/* Mock window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        {/* Address bar */}
        <div className="bg-neutral-900/60 border border-neutral-800/30 text-[10px] text-neutral-500 font-semibold px-6 py-0.5 rounded-md w-1/2 text-center overflow-hidden text-ellipsis whitespace-nowrap select-none font-mono">
          {slug}.vaibhavlohar.dev/{tab}
        </div>
        {/* Empty placeholder */}
        <div className="w-10" />
      </div>

      {/* 2. Visual Content Area */}
      <div className="flex-1 bg-neutral-950 p-4 relative overflow-hidden flex items-center justify-center">
        {/* Grid backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />

        {/* Dynamic renders based on Active Tab */}
        
        {/* ==================== 1. OVERVIEW VIEW ==================== */}
        {tab === 'case-study' && (
          <div className="w-full h-full flex flex-col gap-3 relative z-10 animate-fadeIn">
            {/* Upper Widgets */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-neutral-900/70 border border-neutral-800 p-2.5 rounded-xl flex items-center gap-2 select-none hover:bg-neutral-900 transition-colors">
                <div className={`p-1.5 rounded-lg ${themeClasses.bg} ${themeClasses.text} shrink-0`}>
                  <TrendingUp size={14} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider leading-none">Traffic</span>
                  <span className="text-xs text-neutral-200 font-extrabold mt-0.5">+48.2%</span>
                </div>
              </div>
              
              <div className="bg-neutral-900/70 border border-neutral-800 p-2.5 rounded-xl flex items-center gap-2 select-none hover:bg-neutral-900 transition-colors">
                <div className="p-1.5 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                  <Boxes size={14} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider leading-none">Status</span>
                  <span className="text-xs text-neutral-200 font-extrabold mt-0.5">Healthy</span>
                </div>
              </div>

              <div className="bg-neutral-900/70 border border-neutral-800 p-2.5 rounded-xl flex items-center gap-2 select-none hover:bg-neutral-900 transition-colors">
                <div className="p-1.5 rounded-lg bg-indigo-950 text-indigo-400 shrink-0">
                  <Cpu size={14} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider leading-none">Engine</span>
                  <span className="text-xs text-neutral-200 font-extrabold mt-0.5">Active</span>
                </div>
              </div>
            </div>

            {/* Lower dashboard line chart box */}
            <div className="flex-1 bg-neutral-900/40 border border-neutral-900 rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Live Analytics</span>
                <span className="text-[9px] font-mono text-emerald-400 select-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                  SYNCING
                </span>
              </div>
              
              <div className="flex-1 w-full flex items-end relative pt-2">
                {/* SVG Graph chart line drawing */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={themeClasses.accent} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={themeClasses.accent} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill area */}
                  <path 
                    d="M0 60 C 25 45, 50 50, 75 35 C 100 20, 125 40, 150 15 C 175 -5, 185 10, 200 2 L 200 60 Z" 
                    fill="url(#chartGradient)"
                    className="opacity-70"
                  />
                  
                  {/* Smooth curved path */}
                  <path 
                    d="M0 60 C 25 45, 50 50, 75 35 C 100 20, 125 40, 150 15 C 175 -5, 185 10, 200 2" 
                    fill="none" 
                    stroke={themeClasses.accent} 
                    strokeWidth="2.5" 
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animation: 'drawLine 2s ease-out forwards' }}
                  />
                  
                  {/* Grid reference lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="40" x2="200" y2="40" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 3" />
                </svg>

                {/* Pulsing indicator dot */}
                <div 
                  className="absolute right-0 top-0 mr-[4%] mt-[2%] z-10 flex items-center justify-center shrink-0 w-3 h-3 cursor-pointer"
                  style={{ transform: 'translate(50%, -50%)' }}
                >
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: themeClasses.accent }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 shadow-[0_0_8px_currentColor]" style={{ backgroundColor: themeClasses.accent, color: themeClasses.accent }} />
                </div>
              </div>
            </div>

            {/* Glowing AI Badge Floating on Top Right corner */}
            <div className="absolute right-2 -top-5 z-20 select-none pointer-events-none animate-floatSlow">
              <span className={`inline-flex items-center justify-center h-12 w-12 rounded-full border shadow-2xl backdrop-blur-md select-none border-neutral-700 bg-neutral-900/90 text-sm font-black tracking-widest text-violet-400 shadow-violet-950/20`}>
                {visualText}
              </span>
            </div>
          </div>
        )}

        {/* ==================== 2. PROBLEM VIEW ==================== */}
        {tab === 'problem' && (
          <div className="w-full h-full flex flex-col gap-3 relative z-10 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                <AlertTriangle size={12} className="shrink-0" />
                System Bottleneck Detected
              </span>
              <span className="text-[9px] font-mono text-neutral-500 select-none">QUEUE: BLOCKED</span>
            </div>

            {/* Bottleneck block connections */}
            <div className="flex-1 grid grid-cols-[1.1fr_0.9fr] gap-3 items-center justify-center py-1">
              
              {/* Left Side bottleneck flowchart card */}
              <div className="border border-rose-950/40 bg-rose-950/10 p-3 rounded-xl flex flex-col gap-2 relative overflow-hidden select-none hover:bg-rose-950/15 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-lg bg-rose-950 border border-rose-900 flex items-center justify-center text-rose-400 shrink-0 select-none">!</span>
                  <span className="text-[11px] font-bold text-neutral-300 tracking-tight leading-none">Manual Ingestion</span>
                </div>
                <p className="text-[10px] text-neutral-400 font-semibold leading-relaxed m-0">
                  Data latency spike detected in merchandise sync pipelines. File queue blocked at variant mapping.
                </p>
                <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden w-full mt-1 relative">
                  <div className="h-full bg-rose-500 rounded-full w-4/5 animate-[progressSweep_1.8s_infinite] relative" />
                </div>
              </div>

              {/* Right Side flowchart queue state */}
              <div className="flex flex-col gap-2 relative h-full justify-center">
                {/* Stepper items showing failure state */}
                <div className="bg-neutral-900 border border-neutral-800 p-2 rounded-xl flex items-center gap-2 opacity-50 relative shrink-0">
                  <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full shrink-0" />
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider leading-none">File Upload</span>
                </div>
                
                {/* Arrow connector line */}
                <div className="flex justify-center shrink-0">
                  <ArrowRight size={12} className="text-rose-500 rotate-90" />
                </div>

                <div className="bg-rose-950/20 border border-rose-900/30 p-2 rounded-xl flex items-center justify-between shrink-0 shadow-lg relative">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping shrink-0" />
                    <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-wider leading-none">Triage Lag</span>
                  </div>
                  <span className="text-[9px] font-mono text-rose-500 font-black">120h+</span>
                  <div className="absolute inset-0 border border-rose-500/20 rounded-xl animate-ping opacity-25 select-none pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== 3. APPROACH VIEW ==================== */}
        {tab === 'approach' && (
          <div className="w-full h-full flex flex-col gap-3 relative z-10 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Server size={12} className="shrink-0" />
                Pipeline Architecture
              </span>
              <span className="text-[9px] font-mono text-emerald-400 select-none flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                READY
              </span>
            </div>

            {/* Core Pipeline columns */}
            <div className="flex-1 flex items-center justify-between gap-2 px-1 py-2 relative">
              
              {/* Connector Pipeline line track */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-800 z-0">
                {/* Glowing moving dot */}
                <div className="absolute h-1.5 w-1.5 bg-amber-400 rounded-full -translate-y-1/2 shadow-[0_0_8px_#f59e0b] animate-[progressSweep_2s_infinite] top-1/2" />
              </div>

              {/* Node 1 */}
              <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl flex flex-col items-center gap-1.5 w-[75px] shrink-0 text-center relative z-10 select-none hover:border-amber-500/30 transition-colors">
                <div className="p-1.5 rounded-lg bg-neutral-950 text-neutral-400">
                  <Database size={14} />
                </div>
                <span className="text-[9px] font-bold text-neutral-300 leading-none">Ingestion</span>
                <span className="text-[8px] text-neutral-500 leading-none mt-0.5">Async</span>
              </div>

              {/* Node 2 */}
              <div className="bg-amber-950/20 border border-amber-900/40 p-2.5 rounded-xl flex flex-col items-center gap-1.5 w-[85px] shrink-0 text-center relative z-10 select-none hover:border-amber-500/30 transition-colors">
                <div className="p-1.5 rounded-lg bg-amber-950 text-amber-400 shrink-0">
                  <Cpu size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <span className="text-[9px] font-black text-amber-400 leading-none">AI Pipeline</span>
                <span className="text-[8px] text-amber-500 font-bold leading-none mt-0.5">Structured</span>
              </div>

              {/* Node 3 */}
              <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl flex flex-col items-center gap-1.5 w-[75px] shrink-0 text-center relative z-10 select-none hover:border-amber-500/30 transition-colors">
                <div className="p-1.5 rounded-lg bg-neutral-950 text-neutral-400">
                  <Layers size={14} />
                </div>
                <span className="text-[9px] font-bold text-neutral-300 leading-none">Database</span>
                <span className="text-[8px] text-neutral-500 leading-none mt-0.5">Relational</span>
              </div>

            </div>
          </div>
        )}

        {/* ==================== 4. SOLUTION VIEW ==================== */}
        {tab === 'solution' && (
          <div className="w-full h-full flex flex-col relative z-10 animate-fadeIn font-mono">
            {/* Terminal Tab bar */}
            <div className="h-6 shrink-0 bg-neutral-950 border-b border-neutral-900 px-3 flex items-center justify-between text-[9px] text-neutral-500 select-none">
              <span className="flex items-center gap-1">
                <TerminalIcon size={10} className="text-indigo-400 shrink-0" />
                terminal - node index.js
              </span>
              <span className="text-[8px]">bash</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 bg-neutral-950 p-2.5 overflow-hidden text-[9.5px] leading-relaxed text-neutral-400 select-text flex flex-col">
              {getMockCode(slug).map((line, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <span className="text-neutral-700 select-none w-3 text-right">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="whitespace-pre overflow-hidden text-ellipsis flex-1 font-medium">
                    {/* Syntax highlight basic parser */}
                    {line.split(' ').map((word, wordIdx) => {
                      if (word.startsWith('function') || word.startsWith('async') || word.startsWith('return') || word.startsWith('const') || word.startsWith('await')) {
                        return <span key={wordIdx} className="text-indigo-400 font-extrabold">{word} </span>
                      }
                      if (word.startsWith('//')) {
                        return <span key={wordIdx} className="text-neutral-600 font-normal italic">{word} </span>
                      }
                      if (word.includes('(') || word.includes(')') || word.includes('{') || word.includes('}')) {
                        return <span key={wordIdx} className="text-amber-500 font-semibold">{word} </span>
                      }
                      return <span key={wordIdx}>{word} </span>
                    })}
                  </span>
                </div>
              ))}
              
              {/* Typewriter active cursor */}
              <div className="flex gap-2.5 mt-1 shrink-0 select-none">
                <span className="text-neutral-700 w-3 text-right">{(getMockCode(slug).length + 1).toString().padStart(2, '0')}</span>
                <span className="text-indigo-400 font-bold flex items-center select-none">
                  $&nbsp;<span className="w-1.5 h-3 bg-indigo-500 animate-pulse" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 5. RESULTS VIEW ==================== */}
        {tab === 'result' && (
          <div className="w-full h-full flex flex-col gap-3 relative z-10 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award size={12} className="shrink-0" />
                Execution Success Report
              </span>
              <span className="text-[9px] font-mono text-emerald-400 select-none flex items-center gap-1">
                <CheckCircle2 size={10} className="shrink-0" />
                PASS
              </span>
            </div>

            {/* Growth statistics row */}
            <div className="flex-1 grid grid-cols-[1.1fr_0.9fr] gap-3 items-center justify-center py-1">
              
              {/* Outcome stats card */}
              <div className="border border-emerald-950/40 bg-emerald-950/10 p-3 rounded-xl flex flex-col gap-2 relative overflow-hidden select-none hover:bg-emerald-950/15 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-[11px] font-bold text-neutral-300 tracking-tight leading-none">Operational Health</span>
                </div>
                <span className="text-2xl font-black text-emerald-400 tracking-tight mt-1">99.8%</span>
                <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider leading-none mt-0.5">
                  100% Automation Confidence
                </span>
              </div>

              {/* Animated Growth SVG path container */}
              <div className="h-full bg-neutral-900/40 border border-neutral-900 p-2.5 rounded-xl flex flex-col gap-2 relative overflow-hidden">
                <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Growth Factor</span>
                <div className="flex-1 w-full flex items-end relative pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="resultsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Fill */}
                    <path 
                      d="M0 50 L 25 42 L 50 30 L 75 18 L 100 2 L 100 50 Z" 
                      fill="url(#resultsGradient)"
                      className="opacity-70"
                    />
                    
                    {/* Line */}
                    <path 
                      d="M0 50 L 25 42 L 50 30 L 75 18 L 100 2" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="2.5" 
                      strokeDasharray="200"
                      strokeDashoffset="200"
                      style={{ animation: 'drawLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
                    />
                    
                    {/* Reference bars */}
                    <line x1="25" y1="50" x2="25" y2="42" stroke="#1f2937" strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="50" y2="30" stroke="#1f2937" strokeWidth="0.5" />
                    <line x1="75" y1="50" x2="75" y2="18" stroke="#1f2937" strokeWidth="0.5" />
                  </svg>
                  
                  {/* Pulsing indicator */}
                  <div className="absolute right-0 top-0 mt-[1%] z-10 flex items-center justify-center shrink-0 w-2.5 h-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping bg-emerald-500" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}
