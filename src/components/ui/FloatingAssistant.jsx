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
  const [thinkingWordIndex, setThinkingWordIndex] = useState(0);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fullText = 'Hello';
  const thinkingWords = ['Thinking', 'Considering', 'Crystallizing'];

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
    if (!isThinking) {
      setThinkingWordIndex(0);
      return;
    }

    const rotation = setInterval(() => {
      setThinkingWordIndex((current) => (current + 1) % thinkingWords.length);
    }, 900);

    return () => clearInterval(rotation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isThinking]);

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

  // Reveals `responseText` a few words at a time (not one character at a time) at a
  // natural reading pace. Used for the canned greeting/error text and as a fallback
  // when real API streaming didn't happen — never for genuine streamed replies, which
  // are appended chunk-by-chunk as they actually arrive (see streamAssistantResponse).
  const WORDS_PER_TICK = 3;
  const WORD_TICK_MS = 70;

  const revealTextInWords = (responseText, messageId) => {
    const tokens = responseText.match(/\S+\s*/g) || [responseText];

    let tokenIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      tokenIndex = Math.min(tokenIndex + WORDS_PER_TICK, tokens.length);
      const revealedText = tokens.slice(0, tokenIndex).join('');

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId
            ? { ...message, text: revealedText, typing: tokenIndex < tokens.length }
            : message
        )
      );

      if (tokenIndex >= tokens.length) {
        clearInterval(typingIntervalRef.current);
        setTypingMessageId(null);
      }
    }, WORD_TICK_MS);
  };

  const typeAssistantResponse = (responseText) => {
    clearAssistantTimers();

    const messageId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setTypingMessageId(messageId);
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageId, role: 'assistant', text: '', typing: true },
    ]);

    revealTextInWords(responseText, messageId);
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

    // No (or only partial) real streaming happened — reveal the final text a few
    // words at a time instead of an abrupt swap.
    setMessages((currentMessages) =>
      currentMessages.map((message) =>
        message.id === messageId ? { ...message, text: '', typing: true } : message
      )
    );

    revealTextInWords(text, messageId);
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
            <div className="flex w-max items-center gap-2 rounded-full border border-black/5 bg-[#F0EEE6]/95 px-3 py-1.5 shadow-lg shadow-black/10 backdrop-blur-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DA7756] animate-pulse" aria-hidden="true" />
              <p className="text-[12px] font-medium text-[#3D3929] whitespace-nowrap">{typedText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-y-4 right-4 left-4 sm:inset-y-6 sm:right-6 sm:left-auto sm:w-[min(720px,calc(100vw-3rem))] lg:w-[720px] flex flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border transition-colors duration-300 backdrop-blur-2xl ${
              isDarkMode
                ? 'border-[#F0EEE6]/10 bg-[#262624]/98 text-[#F0EEE6] shadow-[0_30px_100px_rgba(0,0,0,0.55)]'
                : 'border-[#3D3929]/10 bg-[#F0EEE6]/98 text-[#3D3929] shadow-[0_30px_100px_rgba(61,57,41,0.18)]'
            }`}
            initial={{ opacity: 0, x: 90, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 90, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className={`flex shrink-0 items-center justify-between gap-4 border-b px-6 py-4 transition-colors duration-300 ${
              isDarkMode ? 'border-[#F0EEE6]/10 bg-[#262624]/90' : 'border-[#3D3929]/10 bg-[#F0EEE6]/90'
            }`}>
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#DA7756]" aria-hidden="true" />
                <h2 className={`truncate text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                  isDarkMode ? 'text-[#F0EEE6]' : 'text-[#3D3929]'
                }`}>
                  Vaibhav&apos;s AI Assistant
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <div className={`flex items-center justify-center gap-0.5 rounded-full border p-0.5 shadow-sm transition-colors duration-300 ${
                  isDarkMode ? 'border-[#F0EEE6]/10 bg-[#262624]' : 'border-[#3D3929]/10 bg-[#F0EEE6]'
                }`}>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode(false)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition cursor-pointer ${
                      !isDarkMode
                        ? 'bg-[#DA7756]/15 text-[#DA7756] shadow-sm font-semibold'
                        : 'bg-transparent text-[#A8A296] hover:bg-[#F0EEE6]/10 hover:text-[#D9D6C9]'
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
                        ? 'bg-[#DA7756]/20 text-[#DA7756] shadow-sm border border-[#DA7756]/30'
                        : 'bg-transparent text-[#6B6656] hover:bg-[#3D3929]/8 hover:text-[#3D3929]'
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
                      ? 'border-[#F0EEE6]/10 bg-[#2F2F2C] text-[#D9D6C9] hover:bg-[#3A3A36] hover:text-[#F0EEE6]'
                      : 'border-[#3D3929]/10 bg-[#F0EEE6] text-[#5B5647] hover:bg-[#E8E4D9] hover:text-[#3D3929]'
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
                      ? 'border-[#F0EEE6]/10 bg-[#2F2F2C] text-[#D9D6C9] hover:bg-[#3A3A36] hover:text-[#F0EEE6]'
                      : 'border-[#3D3929]/10 bg-[#F0EEE6] text-[#5B5647] hover:bg-[#E8E4D9] hover:text-[#3D3929]'
                  }`}
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 min-h-0 overflow-y-auto px-5 py-7 sm:px-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-[#262624]' : 'bg-[#F0EEE6]'
            }`}>
              {messages.length === 0 && !isThinking && (
                <div className={`mb-5 max-w-[560px] text-[15px] leading-7 transition-colors duration-300 ${
                  isDarkMode ? 'text-[#D9D6C9]' : 'text-[#3D3929]'
                }`}>
                  {greetingText}
                </div>
              )}
              <div className="space-y-5">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'user' ? (
                      <div className={`max-w-[min(100%,560px)] rounded-[1.35rem] rounded-br-md px-5 py-3.5 shadow-sm transition-all duration-300 ${
                        isDarkMode ? 'bg-[#40403D] text-[#F5F4EE]' : 'bg-[#30302E] text-[#F5F4EE]'
                      }`}>
                        <span className="whitespace-pre-wrap text-[15px] leading-7 font-medium">
                          {message.text}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full max-w-[min(100%,560px)] select-text">
                        {message.typing ? (
                          <p className={`whitespace-pre-wrap mb-0 leading-7 text-[14px] sm:text-[14.5px] font-medium ${
                            isDarkMode ? 'text-[#D9D6C9]' : 'text-[#3D3929]'
                          }`}>
                            {message.text}
                            <span
                              className={`typing-cursor inline-block w-[2px] h-[1em] -mb-[2px] ml-0.5 align-text-bottom ${
                                isDarkMode ? 'bg-[#E38A66]' : 'bg-[#DA7756]'
                              }`}
                            />
                          </p>
                        ) : (
                          <MarkdownRenderer text={message.text} isDarkMode={isDarkMode} />
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {isThinking && (
                  <div className="flex items-start">
                    <div className="flex items-center gap-2.5 py-1">
                      <span className="thinking-dot inline-block h-2 w-2 shrink-0 rounded-full bg-[#DA7756]" aria-hidden="true" />
                      <span className={`text-[14.5px] font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-[#D9D6C9]' : 'text-[#5B5647]'
                      }`}>
                        {thinkingWords[thinkingWordIndex]}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Composer */}
            <div className={`shrink-0 border-t px-5 py-5 sm:px-8 transition-colors duration-300 ${
              isDarkMode ? 'border-[#F0EEE6]/10 bg-[#262624]/95' : 'border-[#3D3929]/10 bg-[#F0EEE6]/95'
            }`}>
              <div className="mb-4 flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-[#DA7756]">
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
                          ? 'border-[#F0EEE6]/10 bg-[#2F2F2C] text-[#D9D6C9] hover:border-[#DA7756]/40 hover:bg-[#DA7756]/10 hover:text-[#E38A66]'
                          : 'border-[#3D3929]/10 bg-[#E8E4D9] text-[#5B5647] hover:border-[#DA7756]/40 hover:bg-[#DA7756]/10 hover:text-[#C1633F]'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <form
                className={`flex items-center gap-2 rounded-full border pl-4 pr-1.5 py-1.5 shadow-sm transition-colors duration-300 ${
                  isDarkMode ? 'border-[#F0EEE6]/10 bg-[#2F2F2C]' : 'border-[#3D3929]/10 bg-[#E8E4D9]'
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
                      isDarkMode ? 'text-[#F0EEE6] placeholder:text-[#8A8579]' : 'text-[#3D3929] placeholder:text-[#8A8579]'
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
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DA7756] text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#C1633F] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                  aria-label="Send message"
                  disabled={isThinking || Boolean(typingMessageId) || !inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <div className={`mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-[#8A8579]' : 'text-[#8A8579]'
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
