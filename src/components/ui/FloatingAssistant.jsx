import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, X } from 'lucide-react';
import Lottie from 'lottie-react'; 
import { VAIBHAV_KNOWLEDGE } from '../../data/knowledgeBase';
import animationData from '../../assets/lottie/AI Assistent.json'; 

const FloatingAssistant = () => {
  // Safe-check logic
  const LottieComponent = Lottie?.default || Lottie;
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const [typedText, setTypedText] = useState('');

  const fullText = 'Ask me regarding Vaibhav ✨';
  const greetingText = 'What would you like to know about Vaibhav Lohar? ✨';
  const typingIntervalRef = useRef(null);
  const thinkingTimeoutRef = useRef(null);
  const messagesEndRef = useRef(null);

  const calculateAge = (dobString) => {
    const birthDate = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age -= 1;
    }

    return age;
  };

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

  const getAssistantReply = (query) => {
    const normalizedQuery = query.toLowerCase();
    const { academics, technicalSkills, personal } = VAIBHAV_KNOWLEDGE;

    if (/how old|age|old are you/.test(normalizedQuery)) {
      const calculatedAge = calculateAge(personal.dob);
      return `Vaibhav is currently ${calculatedAge} years old.`;
    }

    if (/education|academics|cgpa|mca|bsc|college|study|degree/.test(normalizedQuery)) {
      const bScSubjects = academics.graduation.keySubjects.join(', ');

      return `Verified from official marksheets, Vaibhav's academic record shows a 9.30 CGPA in ${academics.postGraduation.degree} and a 9.08 CGPA in ${academics.graduation.degree}. His B.Sc. subjects include ${bScSubjects}. This reflects strong academic consistency and technical excellence.`;
    }

    if (/project|projects|shopease|work|built|portfolio/.test(normalizedQuery)) {
      return 'His key project is ShopEase, an intelligent e-commerce suite that uses multimodal AI across Vision and Audio to create a more interactive shopping experience.';
    }

    if (/stack|tech|skills|react|node|tailwind|framer|developer|web development/.test(normalizedQuery)) {
      const skillList = [...technicalSkills.languages, ...technicalSkills.technologies].join(', ');
      return `Verified from official marksheets, Vaibhav's technical skill set includes ${skillList}. He specializes in premium UI/UX and GenAI integrations as part of his full stack web development profile.`;
    }

    if (/subject|subjects|syllabus|topics/.test(normalizedQuery)) {
      const mcaTopics = [
        academics.postGraduation.degree,
        `CGPA ${academics.postGraduation.currentCGPA}`,
        academics.postGraduation.semesterPerformance.sem1,
        academics.postGraduation.semesterPerformance.sem2,
        academics.postGraduation.semesterPerformance.sem3,
      ].join(', ');
      const bScSubjects = academics.graduation.keySubjects.join(', ');

      return `Verified from official marksheets, the available academic details show M.C.A. progress through ${mcaTopics}, while the B.Sc. subjects listed are ${bScSubjects}.`;
    }

    if (/who are you|about vaibhav|vaibhav lohar|introduce|profile/.test(normalizedQuery)) {
      return `${personal.fullName} is a Full Stack Web Developer specializing in premium UI/UX and GenAI integrations.`;
    }

    return "I specialize in Vaibhav's professional journey. Feel free to ask about his web development skills or academic background!";
  };

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

  const handleSendMessage = () => {
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

    const replyText = getAssistantReply(trimmedInput);

    thinkingTimeoutRef.current = setTimeout(() => {
      setIsThinking(false);
      typeAssistantResponse(replyText);
    }, 1000);
  };

  const handleToggleChat = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[9999] overflow-visible">
      <AnimatePresence>
        {isHovering && !isOpen && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-6 -translate-x-1/2 origin-center overflow-visible whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex w-max items-center gap-2 rounded-full border-[0.5px] border-black/5 bg-white/80 px-3 py-1.5 shadow-lg shadow-black/5 backdrop-blur-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              <p className="text-[12px] font-medium text-slate-900 whitespace-nowrap">{typedText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-28 right-0 h-[500px] w-[350px] overflow-hidden rounded-[2rem] border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Vaibhav&apos;s Agent</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">Professional English assistant</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/60 text-slate-900 transition hover:bg-white"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-[1.4rem] px-4 py-3 text-sm leading-6 shadow-sm ${
                        message.role === 'user'
                          ? 'rounded-br-md bg-slate-900 text-white'
                          : 'rounded-bl-md bg-slate-100 text-slate-900'
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
                    <div className="rounded-[1.4rem] rounded-bl-md bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-black/5 p-4">
                <form
                  className="flex items-center gap-2 rounded-full bg-slate-100/50 px-4 py-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask about education, projects, or skills..."
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    disabled={isThinking || Boolean(typingMessageId)}
                  />
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                    disabled={isThinking || Boolean(typingMessageId) || !inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
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
