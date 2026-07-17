import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Contact,
  GraduationCap,
  MessageCircleMore,
  Rocket,
  Send,
  Sparkles,
  Sun,
  Moon,
  UserRound,
  X,
} from 'lucide-react';
import Lottie from 'lottie-react';
import { sendMessageToVaibhavAgent } from '../../services/aiService';
import animationData from '../../assets/lottie/AI Assistent.json';
import MarkdownRenderer from './MarkdownRenderer';

const FloatingAssistant = () => {
  const LottieComponent = Lottie?.default || Lottie;
  const fallbackReply = 'I\'m having a quick issue right now. Please try again and I\'ll respond with the current portfolio context.';
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Chat');

  const fullText = 'Hello';

  const getGreetingText = () => {
    switch (activeTab) {
      case 'About Me':
        return 'Let\'s explore Vaibhav\'s background, story, and experience together! What would you like to know about him?';
      case 'Projects':
        return 'Vaibhav has built some amazing full-stack projects. Ask me about his featured work, tech stack, or specific builds!';
      case 'Skills':
        return 'From Frontend and Backend to Devops and tools, Vaibhav has a diverse technical skillset. Ask about specific technologies!';
      case 'Education':
        return 'Learn about Vaibhav\'s academic journey, degree, certifications, and learning milestones.';
      case 'Contact':
        return 'Ready to connect, collaborate, or hire? Ask me how to reach Vaibhav or find his socials!';
      default:
        return 'Hey there! I\'m Vaibhav\'s AI assistant. I can help you explore his work, skills, experience, and more.';
    }
  };

  const getPlaceholderText = () => {
    if (activeTab === 'Chat') return "Ask me anything...";
    return `Ask about Vaibhav's ${activeTab.toLowerCase()}...`;
  };

  const sectionPrompts = {
    'Chat': [
      'What technologies does Vaibhav work with?',
      'Show me Vaibhav\'s latest projects.',
      'What are Vaibhav\'s achievements?',
    ],
    'About Me': [
      'Tell me about Vaibhav\'s background.',
      'What is his professional journey?',
      'What are his primary career goals?',
    ],
    'Projects': [
      'What are his featured projects?',
      'What backend tools does he use in projects?',
      'Are his projects open source?',
    ],
    'Skills': [
      'What frontend tech does he specialize in?',
      'Does he have database experience?',
      'What dev tools does he use?',
    ],
    'Education': [
      'Where did Vaibhav study?',
      'What degree does he hold?',
      'Has he done any certifications?',
    ],
    'Contact': [
      'How can I get in touch with Vaibhav?',
      'What is his LinkedIn profile?',
      'Can I download his resume?',
    ]
  };

  const quickPrompts = sectionPrompts[activeTab] || sectionPrompts['Chat'];

  const navItems = [
    { label: 'Chat', icon: MessageCircleMore },
    { label: 'About Me', icon: UserRound },
    { label: 'Projects', icon: Briefcase },
    { label: 'Skills', icon: Code2 },
    { label: 'Education', icon: GraduationCap },
    { label: 'Contact', icon: Contact },
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
    if (!isOpen) {
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);
      setIsThinking(false);
      setTypingMessageId(null);
      return;
    }

    setMessages([]);
    setInputValue('');
    setIsThinking(true);

    clearTimeout(thinkingTimeoutRef.current);
    clearInterval(typingIntervalRef.current);

    thinkingTimeoutRef.current = setTimeout(() => {
      setIsThinking(false);
      typeAssistantResponse(getGreetingText());
    }, 1000);

    return () => {
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);
    };
  }, [isOpen, activeTab]);

  const clearAssistantTimers = () => {
    clearTimeout(thinkingTimeoutRef.current);
    clearInterval(typingIntervalRef.current);
  };

  const typeAssistantResponse = (responseText) => {
    clearAssistantTimers();

    const messageId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setTypingMessageId(messageId);
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageId, role: 'assistant', text: '', typing: true },
    ]);

    let charIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      charIndex += 1;

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
    }, 24);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();

    if (!trimmedInput || isThinking || typingMessageId) {
      return;
    }

    const nextMessages = [
      ...messages,
      { id: `${Date.now()}-user`, role: 'user', text: trimmedInput },
    ];

    setMessages(nextMessages);
    setInputValue('');
    setIsThinking(true);
    clearAssistantTimers();

    const minimumLoadingDelay = new Promise((resolve) => {
      thinkingTimeoutRef.current = setTimeout(resolve, 1000);
    });

    try {
      const replyPromise = sendMessageToVaibhavAgent(trimmedInput);
      const [replyText] = await Promise.all([replyPromise, minimumLoadingDelay]);
      typeAssistantResponse(replyText);
    } catch (error) {
      console.error('Floating assistant send error:', error);
      typeAssistantResponse(fallbackReply);
    } finally {
      setIsThinking(false);
    }
  };

  const handleToggleChat = () => {
    setIsOpen((currentOpen) => !currentOpen);
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
      const replyPromise = sendMessageToVaibhavAgent(trimmedInput);
      const [replyText] = await Promise.all([replyPromise, minimumLoadingDelay]);
      typeAssistantResponse(replyText);
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
            className={`fixed inset-y-4 right-4 left-4 sm:inset-y-6 sm:right-6 sm:left-auto sm:w-[min(1160px,calc(100vw-3rem))] lg:w-[1160px] flex overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border transition-colors duration-300 backdrop-blur-2xl ${
              isDarkMode
                ? 'border-slate-800 bg-slate-950/96 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.55)]'
                : 'border-slate-200/70 bg-white/92 text-slate-800 shadow-[0_30px_100px_rgba(15,23,42,0.18)]'
            }`}
            initial={{ opacity: 0, x: 90, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 90, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >            <aside className={`hidden w-[128px] shrink-0 border-r px-3 py-5 lg:flex lg:flex-col overflow-y-auto scrollbar-none transition-colors duration-300 ${
              isDarkMode ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200/70 bg-white/85'
            }`}>
              <nav className="flex flex-col gap-1.5 shrink-0">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.label === activeTab;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveTab(item.label)}
                      className={`flex flex-col items-center gap-1.5 rounded-[1.2rem] px-2 py-2.5 text-[11px] font-medium transition shrink-0 cursor-pointer ${
                        isActive
                          ? isDarkMode
                            ? 'bg-violet-950/70 text-violet-300 shadow-sm border border-violet-800/40'
                            : 'bg-violet-50 text-violet-700 shadow-sm'
                          : isDarkMode
                            ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-auto shrink-0 pt-4">
                <div className={`flex items-center justify-center gap-1.5 rounded-full border p-1 shadow-sm shrink-0 transition-colors duration-300 ${
                  isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode(false)}
                    className={`h-7 w-7 rounded-full transition flex items-center justify-center cursor-pointer ${
                      !isDarkMode
                        ? 'bg-violet-50 text-violet-600 shadow-sm font-semibold'
                        : 'bg-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                    }`}
                    title="Light Mode"
                  >
                    <Sun className="h-4 w-4 shrink-0" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDarkMode(true)}
                    className={`h-7 w-7 rounded-full transition flex items-center justify-center cursor-pointer ${
                      isDarkMode
                        ? 'bg-violet-950 text-violet-300 shadow-sm border border-violet-800/30'
                        : 'bg-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                    }`}
                    title="Dark Mode"
                  >
                    <Moon className="h-4 w-4 shrink-0" />
                  </button>
                </div>
              </div>
            </aside>

            <div className={`flex h-full min-h-0 min-w-0 flex-1 flex-col transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950'
                : 'bg-gradient-to-b from-white via-slate-50/50 to-white'
            }`}>
              <div className={`flex items-center justify-between gap-4 border-b px-5 py-5 sm:px-6 transition-colors duration-300 backdrop-blur-sm ${
                isDarkMode ? 'border-slate-800 bg-slate-950/75' : 'border-slate-200/70 bg-white/75'
              }`}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className={`text-[17px] font-semibold tracking-[-0.02em] sm:text-[18px] transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-50' : 'text-slate-950'
                    }`}>
                      Vaibhav&apos;s AI Assistant
                      {activeTab !== 'Chat' && (
                        <span className={isDarkMode ? 'text-violet-400 font-medium' : 'text-violet-600 font-medium'}>
                          {' '}/ {activeTab}
                        </span>
                      )}
                    </h2>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-colors duration-300 ${
                      isDarkMode
                        ? 'border-violet-800/50 bg-violet-950/40 text-violet-300'
                        : 'border-violet-200 bg-violet-50 text-violet-700'
                    }`}>
                      AI
                    </span>
                  </div>
                  <p className={`mt-1 text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>Your personal portfolio assistant <span className="align-middle text-emerald-500">●</span></p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Premium Theme Toggle (only visible on mobile/tablet where sidebar is hidden) */}
                  <div className={`flex lg:hidden items-center justify-center gap-1 rounded-full border p-0.5 shadow-sm shrink-0 transition-colors duration-300 ${
                    isDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
                  }`}>
                    <button
                      type="button"
                      onClick={() => setIsDarkMode(false)}
                      className={`h-7 w-7 rounded-full transition flex items-center justify-center cursor-pointer ${
                        !isDarkMode
                          ? 'bg-violet-50 text-violet-600 shadow-sm font-semibold'
                          : 'bg-transparent text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                      }`}
                      title="Light Mode"
                    >
                      <Sun className="h-3.5 w-3.5 shrink-0" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsDarkMode(true)}
                      className={`h-7 w-7 rounded-full transition flex items-center justify-center cursor-pointer ${
                        isDarkMode
                          ? 'bg-violet-950 text-violet-300 shadow-sm border border-violet-800/30'
                          : 'bg-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                      title="Dark Mode"
                    >
                      <Moon className="h-3.5 w-3.5 shrink-0" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-102 cursor-pointer ${
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

              {/* Horizontal Scrollable Tabs on Mobile/Tablet */}
              <div className={`flex lg:hidden border-b px-4 py-2.5 overflow-x-auto scrollbar-none gap-2 shrink-0 transition-colors duration-300 ${
                isDarkMode ? 'border-slate-800 bg-slate-950/30' : 'border-slate-200 bg-slate-50/50'
              }`}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.label === activeTab;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveTab(item.label)}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition whitespace-nowrap cursor-pointer shrink-0 ${
                        isActive
                          ? isDarkMode
                            ? 'bg-violet-950/80 text-violet-300 border border-violet-800/40 shadow-sm'
                            : 'bg-violet-50 text-violet-700 shadow-sm'
                          : isDarkMode
                            ? 'text-slate-400 hover:bg-slate-900/50'
                            : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 sm:px-6">
                {messages.length === 0 && !isThinking && (
                  <div className={`mb-4 max-w-[520px] rounded-[1.25rem] border px-4 py-3 text-sm leading-6 shadow-sm transition-colors duration-300 ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300'
                      : 'border-slate-200/70 bg-white px-4 py-3 text-slate-600'
                  }`}>
                    {getGreetingText()}
                  </div>
                )}
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[min(100%,640px)] rounded-[1.35rem] border px-4 py-3 shadow-sm transition-all duration-300 ${
                        message.role === 'user'
                          ? isDarkMode
                            ? 'rounded-br-md border-violet-800 bg-gradient-to-br from-violet-700 to-indigo-600 text-slate-100'
                            : 'rounded-br-md border-violet-200 bg-gradient-to-br from-violet-600 to-indigo-500 text-white'
                          : isDarkMode
                            ? 'rounded-bl-md border-slate-800 bg-slate-900 text-slate-100'
                            : 'rounded-bl-md border-slate-200 bg-white text-slate-800'
                      }`}>
                        {message.role === 'user' ? (
                          <span className="whitespace-pre-wrap text-sm leading-7 font-medium">
                            {message.text}
                          </span>
                        ) : (
                          <div className="w-full select-text">
                            <MarkdownRenderer text={message.text} isDarkMode={isDarkMode} />
                            {message.typing && (
                              <span 
                                className={`inline-block h-3.5 w-1.5 ml-1 animate-pulse align-middle rounded-full ${
                                  isDarkMode ? 'bg-violet-400' : 'bg-violet-600'
                                }`} 
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {isThinking && (
                    <div className="flex items-start">
                      <div className={`rounded-[1.35rem] rounded-bl-md border px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-300 ${
                        isDarkMode
                          ? 'border-slate-800 bg-slate-900 text-slate-300'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}>
                        Vaibhav&apos;s AI Assistant is thinking...
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className={`shrink-0 border-t p-4 sm:p-5 transition-colors duration-300 ${
                isDarkMode ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200/80 bg-white/95'
              }`}>
                <div className="mb-4 flex flex-col gap-2 shrink-0">
                  <div className="flex items-center gap-2 text-violet-600">
                    <Sparkles className="h-4 w-4 shrink-0" />
                    <p className="text-sm font-medium">You can also ask</p>
                  </div>
                  <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 -mx-1 px-1">
                    {quickPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleQuickPrompt(prompt)}
                        className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition whitespace-nowrap cursor-pointer ${
                          isDarkMode
                            ? 'border-violet-900 bg-violet-950/30 text-violet-300 hover:border-violet-750 hover:bg-violet-900/40'
                            : 'border-violet-100 bg-violet-50 text-violet-700 hover:border-violet-200 hover:bg-violet-100'
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
                      placeholder={getPlaceholderText()}
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
