import React from 'react';

export const MarkdownRenderer = ({ text, isDarkMode }) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  
  let currentListType = null; // 'ul', 'ol', or null
  let currentListItems = [];

  const parseInline = (str) => {
    if (!str) return '';
    
    // Escape HTML tags to prevent XSS
    let html = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 1. Bold: **text** -> <strong>text</strong>
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // 2. Italics: *text* -> <em>text</em>
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // 3. Inline code: `code`
    const codeClass = isDarkMode 
      ? 'bg-slate-800/80 text-violet-300 font-mono text-[13px] px-1.5 py-0.5 rounded border border-slate-700/50'
      : 'bg-violet-50 text-violet-700 font-mono text-[13px] px-1.5 py-0.5 rounded border border-violet-100/70';
    html = html.replace(/`([^`]+)`/g, `<code class="${codeClass}">$1</code>`);

    const linkClass = isDarkMode
      ? 'text-violet-400 font-semibold underline hover:text-violet-300 transition-colors cursor-pointer'
      : 'text-violet-600 font-semibold underline hover:text-violet-700 transition-colors cursor-pointer';

    // 4. Markdown Links: [text](url) -> temporarily replace with placeholders to avoid matching their URLs as bare URLs
    const placeholders = [];
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      const id = `___LINK_PLACEHOLDER_${placeholders.length}___`;
      placeholders.push({
        id,
        html: `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${text}</a>`
      });
      return id;
    });

    // 5. Bare URLs: https://... or http://... or www....
    const urlRegex = /(https?:\/\/[^\s<>]+|www\.[^\s<>]+)/gi;
    html = html.replace(urlRegex, (url) => {
      const href = url.toLowerCase().startsWith('http') ? url : `https://${url}`;
      let cleanUrl = href;
      let displayUrl = url;
      const trailingPunct = /[.,;:?)]+$/;
      const punctMatch = url.match(trailingPunct);
      if (punctMatch) {
        const punctuation = punctMatch[0];
        displayUrl = url.slice(0, -punctuation.length);
        cleanUrl = href.slice(0, -punctuation.length);
        return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${displayUrl}</a>${punctuation}`;
      }
      return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${displayUrl}</a>`;
    });

    // 6. Restore placeholders
    placeholders.forEach(({ id, html: replacement }) => {
      html = html.replace(id, replacement);
    });

    return html;
  };

  const flushList = (key) => {
    if (currentListItems.length === 0) return;

    if (currentListType === 'ul') {
      elements.push(
        <ul key={`ul-${key}`} className="space-y-2.5 mb-4 ml-6 list-outside list-disc">
          {currentListItems.map((item, idx) => (
            <li 
              key={`li-${idx}`} 
              className={`pl-1 text-[14px] sm:text-[14.5px] font-medium leading-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
              dangerouslySetInnerHTML={{ __html: parseInline(item) }}
            />
          ))}
        </ul>
      );
    } else if (currentListType === 'ol') {
      elements.push(
        <ol key={`ol-${key}`} className="space-y-2.5 mb-4 ml-6 list-outside list-decimal">
          {currentListItems.map((item, idx) => (
            <li 
              key={`li-${idx}`} 
              className={`pl-1 text-[14px] sm:text-[14.5px] font-medium leading-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
              dangerouslySetInnerHTML={{ __html: parseInline(item) }}
            />
          ))}
        </ol>
      );
    }

    currentListItems = [];
    currentListType = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Empty line
    if (trimmed === '') {
      flushList(i);
      continue;
    }

    // 2. Horizontal Rule
    if (trimmed === '---') {
      flushList(i);
      elements.push(
        <hr 
          key={`hr-${i}`} 
          className={`my-5 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`} 
        />
      );
      continue;
    }

    // 3. Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushList(i);
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      
      const headingStyle = isDarkMode ? 'text-slate-100 font-bold tracking-tight' : 'text-slate-900 font-bold tracking-tight';
      
      if (level === 1) {
        elements.push(
          <h1 key={`h-${i}`} className={`text-xl sm:text-2xl mt-5 mb-3.5 ${headingStyle}`} dangerouslySetInnerHTML={{ __html: parseInline(headingText) }} />
        );
      } else if (level === 2) {
        elements.push(
          <h2 key={`h-${i}`} className={`text-lg sm:text-xl mt-4.5 mb-3 ${headingStyle}`} dangerouslySetInnerHTML={{ __html: parseInline(headingText) }} />
        );
      } else if (level === 3) {
        elements.push(
          <h3 key={`h-${i}`} className={`text-base sm:text-lg mt-4 mb-2.5 ${headingStyle}`} dangerouslySetInnerHTML={{ __html: parseInline(headingText) }} />
        );
      } else {
        elements.push(
          <h4 key={`h-${i}`} className={`text-sm sm:text-base mt-3 mb-2 ${headingStyle}`} dangerouslySetInnerHTML={{ __html: parseInline(headingText) }} />
        );
      }
      continue;
    }

    // 4. Unordered Lists: lines starting with "- " or "* " or "  - "
    const ulMatch = line.match(/^\s*[-*]\s+(.*)$/);
    if (ulMatch) {
      if (currentListType !== 'ul') {
        flushList(i);
        currentListType = 'ul';
      }
      currentListItems.push(ulMatch[1]);
      continue;
    }

    // 5. Ordered Lists: lines starting with digits like "1. " or "  1. "
    const olMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    if (olMatch) {
      if (currentListType !== 'ol') {
        flushList(i);
        currentListType = 'ol';
      }
      currentListItems.push(olMatch[1]);
      continue;
    }

    // 6. Regular Paragraph Line (rendered individually to respect original line spacing)
    flushList(i);
    elements.push(
      <p 
        key={`p-${i}`} 
        className={`mb-4.5 leading-7 text-[14px] sm:text-[14.5px] font-medium last:mb-0 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
        dangerouslySetInnerHTML={{ __html: parseInline(line) }}
      />
    );
  }

  // Flush any final active list
  flushList(lines.length);

  return (
    <div className={`markdown-body select-text ${isDarkMode ? 'dark-links' : 'light-links'}`}>
      {elements}
    </div>
  );
};

export default MarkdownRenderer;
