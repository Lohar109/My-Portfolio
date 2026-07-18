import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Send,
  Sparkles,
  Sun,
  Moon,
  Trash2,
  X,
} from 'lucide-react';
import Lottie from 'lottie-react';
import { streamMessageToVaibhavAgent } from '../../services/aiService';
import animationData from '../../assets/lottie/AI Assistent.json';
import MarkdownRenderer from './MarkdownRenderer';

const CHAT_STORAGE_KEY = 'vl_assistant_chat_history';
const MAX_STORED_MESSAGES = 50;

const loadStoredMessages = () => {
  try {
    const raw = window.localStorage.getItem(CHAT_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((message) => message && typeof message.text === 'string')
      .map((message) => ({ ...message, typing: false }));
  } catch (error) {
    console.error('Failed to load chat history from localStorage:', error);
    return [];
  }
};

const FloatingAssistant = () => {
  const LottieComponent = Lottie?.default || Lottie;
  const fallbackReply = 'I\'m having a quick issue right now. Please try again and I\'ll respond with the current portfolio context.';
  const greetingText = 'Hey there! I\'m Vaibhav\'s AI assistant. I can help you explore his work, skills, experience, and more.';

  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [messages, setMessages] = useState(loadStoredMessages);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fullText = 'Hello';

  const quickPrompts = [
    'What technologies does Vaibhav work with?',
    'Show me Vaibhav\'s featured projects.',
    'What is his professional background?',
    'Where did Vaibhav study?',
    'How can I get in touch with him?',
  ];

  const typingIntervalRef = useRef(null);
  const thinkingTimeoutRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isHovering || isOpen) {
      setTypedText('');
      return;
    }

    let charIndex = 0;
    const typingTimer = setInterval(() => {
      charIndex += 1;
      setTypedText(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(typingTimer);
      }
    }, 35);

    return () => clearInterval(typingTimer);
  }, [isHovering, isOpen, fullText]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  useEffect(() => {
    try {
      const trimmed = messages
        .slice(-MAX_STORED_MESSAGES)
        .map(({ typing, ...rest }) => rest);
      window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(trimmed));
    } catch (error) {
      console.error('Failed to save chat history to localStorage:', error);
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);
      setIsThinking(false);
      setTypingMessageId(null);
      return;
    }

    if (messages.length === 0) {
      setIsThinking(true);
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);

      thinkingTimeoutRef.current = setTimeout(() => {
        setIsThinking(false);
        typeAssistantResponse(greetingText);
      }, 700);
    }

    return () => {
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const clearAssistantTimers = () => {
    clearTimeout(thinkingTimeoutRef.current);
    clearInterval(typingIntervalRef.current);
  };

  // Reveals `responseText` in small chunks rather than one character at a time.
  // Chunk size adapts to the response length so long replies still finish in ~2-2.5s
  // instead of ballooning past 10s, while short replies don't feel needlessly slow.
  const typeAssistantResponse = (responseText) => {
    clearAssistantTimers();

    const messageId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setTypingMessageId(messageId);
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageId, role: 'assistant', text: '', typing: true },
    ]);

    const TICK_MS = 15;
    const TARGET_TICKS = 150;
    const chunkSize = Math.max(3, Math.ceil(responseText.length / TARGET_TICKS));

    let charIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      charIndex = Math.min(charIndex + chunkSize, responseText.length);

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId
            ? {
                ...message,
                text: responseText.slice(0, charIndex),
                typing: charIndex < responseText.length,
              }
            : message
        )
      );

      if (charIndex >= responseText.length) {
        clearInterval(typingIntervalRef.current);
        setTypingMessageId(null);
      }
    }, TICK_MS);
  };

  // Streams a live agent reply: appends each chunk as it arrives from the model so
  // the message grows in real time instead of being revealed after the fact.
  const streamAssistantResponse = async (userMessage) => {
    clearAssistantTimers();

    const messageId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setTypingMessageId(messageId);
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageId, role: 'assistant', text: '', typing: true },
    ]);

    const appendChunk = (chunkText) => {
      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId
            ? { ...message, text: message.text + chunkText }
            : message
        )
      );
    };

    const { text, streamed } = await streamMessageToVaibhavAgent(userMessage, appendChunk);

    if (streamed) {
      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId ? { ...message, text, typing: false } : message
        )
      );
      setTypingMessageId(null);
      return;
    }

    // No (or only partial) real streaming happened — reveal the final text with the
    // fast chunked typewriter instead of an abrupt swap.
    setMessages((currentMessages) =>
      currentMessages.map((message) =>
        message.id === messageId ? { ...message, text: '', typing: true } : message
      )
    );

    const TICK_MS = 15;
    const TARGET_TICKS = 150;
    const chunkSize = Math.max(3, Math.ceil(text.length / TARGET_TICKS));

    let charIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      charIndex = Math.min(charIndex + chunkSize, text.length);

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId
            ? { ...message, text: text.slice(0, charIndex), typing: charIndex < text.length }
            : message
        )
      );

      if (charIndex >= text.length) {
        clearInterval(typingIntervalRef.current);
        setTypingMessageId(null);
      }
    }, TICK_MS);
  };

  const handleToggleChat = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  const handleClearConversation = () => {
    clearAssistantTimers();
    setTypingMessageId(null);
    setIsThinking(false);
    setMessages([]);

    try {
      window.localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear chat history from localStorage:', error);
    }
  };

  const handleQuickPrompt = async (prompt) => {
    setInputValue(prompt);
    await sendMessageFromText(prompt);
  };

  const sendMessageFromText = async (text) => {
    const trimmedInput = (text ?? inputValue).trim();

    if (!trimmedInput || isThinking || typingMessageId) {
      return;
    }

    const nextMessages = [...messages, { id: `${Date.now()}-user`, role: 'user', text: trimmedInput }];

    setMessages(nextMessages);
    setInputValue('');
    setIsThinking(true);
    clearAssistantTimers();

    const minimumLoadingDelay = new Promise((resolve) => {
      thinkingTimeoutRef.current = setTimeout(resolve, 850);
    });

    try {
      await minimumLoadingDelay;
      await streamAssistantResponse(trimmedInput);
    } catch (error) {
      console.error('Floating assistant send error:', error);
      typeAssistantResponse(fallbackReply);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] overflow-visible sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {isHovering && !isOpen && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-6 -translate-x-1/2 origin-center overflow-visible whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex w-max items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 shadow-lg shadow-black/10 backdrop-blur-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              <p className="text-[12px] font-medium text-slate-900 whitespace-nowrap">{typedText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-y-4 right-4 left-4 sm:inset-y-6 sm:right-6 sm:left-auto sm:w-[min(720px,calc(100vw-3rem))] lg:w-[720px] flex flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border transition-colors duration-300 backdrop-blur-2xl ${
              isDarkMode
                ? 'border-slate-800 bg-slate-950/96 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.55)]'
                : 'border-slate-200/70 bg-white/95 text-slate-800 shadow-[0_30px_100px_rgba(15,23,42,0.18)]'
            }`}
            initial={{ opacity: 0, x: 90, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 90, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className={`flex shrink-0 items-center justify-between gap-4 border-b px-6 py-4 transition-colors duration-300 ${
              isDarkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200/70 bg-white/80'
            }`}>
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                <h2 className={`truncate text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-50' : 'text-slate-950'
                }`}>
                  Vaibhav&apos;s AI Assistant
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <div className={`flex items-center justify-center gap-0.5 rounded-full border p-0.5 shadow-sm transition-colors duration-300 ${
                  isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode(false)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition cursor-pointer ${
                      !isDarkMode
                        ? 'bg-violet-50 text-violet-600 shadow-sm font-semibold'
                        : 'bg-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                    }`}
                    title="Light mode"
                    aria-label="Switch to light mode"
                  >
                    <Sun className="h-3.5 w-3.5 shrink-0" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode(true)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition cursor-pointer ${
                      isDarkMode
                        ? 'bg-violet-950 text-violet-300 shadow-sm border border-violet-800/30'
                        : 'bg-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                    }`}
                    title="Dark mode"
                    aria-label="Switch to dark mode"
                  >
                    <Moon className="h-3.5 w-3.5 shrink-0" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleClearConversation}
                  disabled={messages.length === 0}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                  aria-label="Clear conversation"
                  title="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition cursor-pointer ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 min-h-0 overflow-y-auto px-5 py-7 sm:px-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-950' : 'bg-white'
            }`}>
              {messages.length === 0 && !isThinking && (
                <div className={`mb-5 max-w-[560px] rounded-[1.25rem] border px-5 py-4 text-[15px] leading-7 shadow-sm transition-colors duration-300 ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300'
                    : 'border-slate-200/70 bg-slate-50 text-slate-600'
                }`}>
                  {greetingText}
                </div>
              )}
              <div className="space-y-5">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[min(100%,560px)] rounded-[1.35rem] px-5 py-3.5 shadow-sm transition-all duration-300 ${
                      message.role === 'user'
                        ? isDarkMode
                          ? 'rounded-br-md bg-gradient-to-br from-violet-700 to-indigo-600 text-white'
                          : 'rounded-br-md bg-gradient-to-br from-violet-600 to-indigo-500 text-white'
                        : isDarkMode
                          ? 'rounded-bl-md bg-slate-900/80 text-slate-100'
                          : 'rounded-bl-md bg-slate-100 text-slate-800'
                    }`}>
                      {message.role === 'user' ? (
                        <span className="whitespace-pre-wrap text-[15px] leading-7 font-medium">
                          {message.text}
                        </span>
                      ) : (
                        <div className="w-full select-text">
                          {message.typing ? (
                            <p className={`whitespace-pre-wrap mb-0 leading-7 text-[14px] sm:text-[14.5px] font-medium ${
                              isDarkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                              {message.text}
                              <span
                                className={`typing-cursor inline-block w-[2px] h-[1em] -mb-[2px] ml-0.5 align-text-bottom ${
                                  isDarkMode ? 'bg-violet-400' : 'bg-violet-600'
                                }`}
                              />
                            </p>
                          ) : (
                            <MarkdownRenderer text={message.text} isDarkMode={isDarkMode} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex items-start">
                    <div className={`rounded-[1.35rem] rounded-bl-md px-5 py-3.5 text-[15px] font-medium shadow-sm transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-slate-900/80 text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <span className="inline-flex items-center gap-1">
                        <span className={`h-1.5 w-1.5 animate-bounce rounded-full ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`} style={{ animationDelay: '0ms' }} />
                        <span className={`h-1.5 w-1.5 animate-bounce rounded-full ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`} style={{ animationDelay: '120ms' }} />
                        <span className={`h-1.5 w-1.5 animate-bounce rounded-full ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`} style={{ animationDelay: '240ms' }} />
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Composer */}
            <div className={`shrink-0 border-t px-5 py-5 sm:px-8 transition-colors duration-300 ${
              isDarkMode ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200/80 bg-white/95'
            }`}>
              <div className="mb-4 flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-violet-600">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <p className="text-[13px] font-medium">You can also ask</p>
                </div>
                <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 -mx-1 px-1">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleQuickPrompt(prompt)}
                      className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition whitespace-nowrap cursor-pointer ${
                        isDarkMode
                          ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-violet-800/50 hover:bg-violet-950/40 hover:text-violet-300'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <form
                className={`flex items-center gap-2 rounded-full border pl-4 pr-1.5 py-1.5 shadow-sm transition-colors duration-300 ${
                  isDarkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                }`}
                onSubmit={async (event) => {
                  event.preventDefault();
                  await sendMessageFromText();
                }}
              >
                <div className="min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className={`w-full bg-transparent text-base font-medium outline-none transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-50 placeholder:text-slate-500' : 'text-slate-950 placeholder:text-slate-400'
                    }`}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    disabled={isThinking || Boolean(typingMessageId)}
                  />
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await sendMessageFromText();
                  }}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                  aria-label="Send message"
                  disabled={isThinking || Boolean(typingMessageId) || !inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <div className={`mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <span>AI responses may vary. Please verify important information.</span>
                <span className="hidden items-center gap-1 sm:inline-flex">
                  <ArrowRight className="h-3 w-3" />
                  Press Enter to send
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transparent icon with hover scale only */}
      {!isOpen && (
        <div
          className="cursor-pointer overflow-visible transition-transform duration-500 hover:scale-110 active:scale-95 h-12 w-12 sm:h-[100px] sm:w-[100px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleToggleChat}
        >
          <LottieComponent
            animationData={animationData}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  )
}

export default FloatingAssistant;
