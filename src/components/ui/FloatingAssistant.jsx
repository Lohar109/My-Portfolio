import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Send, Sparkles, X } from 'lucide-react';
import Lottie from 'lottie-react'; 
import { sendMessageToVaibhavAgent } from '../../services/aiService';
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;
  const fallbackReply = 'I\'m having a quick issue right now. Please try again and I\'ll respond with the current portfolio context.';
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typedText, setTypedText] = useState('');

  const fullText = 'Ask me regarding Vaibhav ✨';
  const greetingText = 'What would you like to know about Vaibhav Lohar? ✨';
  const quickPrompts = [
    'Tell me about the Loading Optimisation project.',
    'What are Vaibhav\'s strongest technical skills?',
    'Summarize his education and academic background.',
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
      typeAssistantResponse(greetingText);
    }, 1000);

    return () => {
      clearTimeout(thinkingTimeoutRef.current);
      clearInterval(typingIntervalRef.current);
    };
  }, [isOpen, greetingText]);

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

  return (
    <div className="fixed bottom-8 right-8 z-[9999] overflow-visible sm:bottom-10 sm:right-10">
      <AnimatePresence>
        {isHovering && !isOpen && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-6 -translate-x-1/2 origin-center overflow-visible whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex w-max items-center gap-2 rounded-full border border-black/5 bg-white/85 px-3 py-1.5 shadow-lg shadow-black/10 backdrop-blur-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              <p className="text-[12px] font-medium text-slate-900 whitespace-nowrap">{typedText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-4 right-4 flex h-[calc(100vh-2rem)] w-[min(1120px,calc(100vw-1rem))] overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
            initial={{ opacity: 0, x: 80, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex h-full min-h-0 w-full flex-col border-r border-slate-200/70 bg-gradient-to-b from-slate-50 to-white lg:w-[calc(100%-300px)]">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 px-5 py-4 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-md shadow-slate-900/20">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-950">Vaibhav&apos;s Agent</p>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Ready
                      </span>
                    </div>
                    <p className="mt-1 max-w-[320px] text-xs leading-5 text-slate-500">
                      A polished assistant for projects, skills, education, and professional background.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="border-b border-slate-200/70 px-5 py-4 sm:px-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <Sparkles className="h-3.5 w-3.5 text-slate-900" />
                  Live portfolio conversation
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Ask about Vaibhav&apos;s projects, skills, or education. The reply area below stays wide and readable for ongoing conversation.
                </p>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white px-4 py-5 sm:px-6">
                {messages.length === 0 && !isThinking && (
                  <div className="mb-4 rounded-[1.5rem] border border-dashed border-slate-200 bg-white/80 p-4 text-sm leading-6 text-slate-600 shadow-sm">
                    Start with a project, skill, or education question. The assistant will keep the tone professional and concise.
                  </div>
                )}

                <div className="space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[min(100%,760px)] rounded-[1.5rem] px-4 py-3 text-sm leading-6 shadow-sm ${
                          message.role === 'user'
                            ? 'rounded-br-md bg-slate-950 text-white shadow-slate-900/10'
                            : 'rounded-bl-md border border-slate-200 bg-white text-slate-900'
                        }`}
                      >
                        <span className="font-medium whitespace-pre-wrap">
                          {message.text}
                          {message.typing ? <span className="ml-0.5 inline-block animate-pulse">|</span> : null}
                        </span>
                      </div>
                    </div>
                  ))}

                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="rounded-[1.5rem] rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
                        Vaibhav&apos;s Agent is thinking...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="border-t border-slate-200/80 bg-white/95 p-4 sm:p-5">
                <form
                  className="flex items-end gap-2 rounded-[1.4rem] border border-slate-200 bg-slate-50 px-3 py-3 shadow-sm"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    await handleSendMessage();
                  }}
                >
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Ask anything
                    </p>
                    <input
                      type="text"
                      placeholder="Ask about education, projects, or skills..."
                      className="w-full bg-transparent text-sm font-medium text-slate-950 outline-none placeholder:text-slate-400"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      disabled={isThinking || Boolean(typingMessageId)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await handleSendMessage();
                    }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                    disabled={isThinking || Boolean(typingMessageId) || !inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-medium text-slate-400">
                  <span>Professional, grounded replies from verified portfolio context.</span>
                  <span className="hidden items-center gap-1 sm:inline-flex">
                    <ArrowRight className="h-3 w-3" />
                    Press Enter to send
                  </span>
                </div>
              </div>
            </div>

            <aside className="hidden w-[300px] shrink-0 flex-col border-l border-slate-200/70 bg-white/90 lg:flex">
              <div className="border-b border-slate-200/80 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Quick actions
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keep the settings and shortcuts visible while the conversation stays centered.
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-3">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setInputValue(prompt)}
                      className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm leading-6 text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-950 px-4 py-4 text-white shadow-lg shadow-slate-900/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Session status
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-100">
                    <p>• Live portfolio retrieval enabled</p>
                    <p>• Structured, grounded responses</p>
                    <p>• Side-panel controls always visible</p>
                  </div>
                </div>
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transparent icon with hover scale only */}
      <div
        className="cursor-pointer overflow-visible transition-transform duration-500 hover:scale-110 active:scale-95"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleToggleChat}
      >
        <LottieComponent 
          animationData={animationData} 
          loop={true} 
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  )
}

export default FloatingAssistant;
