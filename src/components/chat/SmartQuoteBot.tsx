import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FiX, FiSend, FiArrowRight
} from 'react-icons/fi';
import { FaRobot, FaRegStar } from 'react-icons/fa';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionUrl?: string;
  actionText?: string;
  timestamp: string;
}

// Festival Detector Helper
const getFestivalWish = (): string | null => {
  const date = new Date();
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  if (month === 1 && day >= 13 && day <= 16) {
    return '🌾 Happy Sankranti & Pongal from SLV Marine Exports!';
  } else if (month === 1 && day === 26) {
    return '🇮🇳 Happy Republic Day from SLV Marine Exports!';
  } else if (month === 3 || (month === 4 && day <= 15)) {
    return '🌸 Wishing you a prosperous Ugadi & Happy New Year!';
  } else if (month === 8 && day === 15) {
    return '🇮🇳 Happy Independence Day from SLV Marine!';
  } else if (month === 9 || month === 10) {
    return '🪔 Happy Diwali & Dussehra! May your business shine with success!';
  } else if (month === 12 && day >= 20) {
    return '🎄 Merry Christmas & Happy New Year from SLV Marine!';
  }
  return null;
};

export const SmartQuoteBot: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  // Initialize bot greeting & festival wish
  useEffect(() => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const initialMsgs: Message[] = [
      {
        id: '1',
        sender: 'bot',
        text: 'Welcome to SLV Marine Exports! 🌊 Premium Indian Seafood Exporters.\nHow can we assist your seafood procurement today?\n\nWe assure your trust. 🤝',
        timestamp: timeStr
      }
    ];

    const festWish = getFestivalWish();
    if (festWish) {
      initialMsgs.push({
        id: 'fest-1',
        sender: 'bot',
        text: `${festWish}\n\nWe assure your trust. 🤝`,
        timestamp: timeStr
      });
    }

    setMessages(initialMsgs);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  useEffect(() => {
    const handleOpenBot = () => setIsOpen(true);
    window.addEventListener('open-slv-ai-bot', handleOpenBot);
    return () => window.removeEventListener('open-slv-ai-bot', handleOpenBot);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputMsg).trim();
    if (!query) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: timeStr
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');

    // Generate smart response
    setTimeout(() => {
      generateBotResponse(query);
    }, 400);
  };

  const generateBotResponse = (userQuery: string) => {
    const lower = userQuery.toLowerCase();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let replyText = '';
    let actionUrl: string | undefined = undefined;
    let actionText: string | undefined = undefined;

    // Rule 1: Price / Cost / Rate query
    if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('quote') || lower.includes('cheap') || lower.includes('amount')) {
      replyText = 'Cost: Contact for details.\n\nPlease call our Managing Partner V. Sampath Kumar (+91 89777 70455) or Accountant Sohail (+91 93901 97086) for live daily market rates and customized bulk pricing.';
      actionUrl = '/contact';
      actionText = 'Contact Sales Team';
    } 
    // Rule 2: Shipment / Delivery / Freight charges
    else if (lower.includes('ship') || lower.includes('freight') || lower.includes('charge') || lower.includes('delivery') || lower.includes('transport') || lower.includes('container') || lower.includes('reefer')) {
      replyText = 'For shipment & freight charges, please call our team directly for detailed reefer container rates and port logistics.\n\nPhone: +91 89777 70455 / +91 93901 97086';
      actionUrl = '/export-markets';
      actionText = 'View Export Logistics';
    }
    // Rule 3: Products query
    else if (lower.includes('product') || lower.includes('shrimp') || lower.includes('fish') || lower.includes('prawn') || lower.includes('crab') || lower.includes('lobster') || lower.includes('squid') || lower.includes('octopus')) {
      replyText = 'We export premium Grade-A Black Tiger Prawns, Vannamei Shrimp, King Seer Fish, Pomfret, Rock Lobster, Mud Crab, and Value-Added ready-to-cook items.';
      actionUrl = '/products';
      actionText = 'Explore Full Product Catalog';
    }
    // Rule 4: Gallery / Photos / Processing query
    else if (lower.includes('gallery') || lower.includes('photo') || lower.includes('video') || lower.includes('image') || lower.includes('processing') || lower.includes('factory') || lower.includes('facility')) {
      replyText = 'Explore our high-definition photo gallery and live processing facility videos showing our hygienic cleaning, blast freezing, and export packing.';
      actionUrl = '/gallery';
      actionText = 'Go to Gallery Page';
    }
    // Rule 5: Quality / Certifications query
    else if (lower.includes('certif') || lower.includes('quality') || lower.includes('eia') || lower.includes('mpeda') || lower.includes('fssai') || lower.includes('haccp') || lower.includes('iso')) {
      replyText = 'SLV Marine Exports complies with international export standards including EIA, MPEDA, FSSAI, and LEI registration.';
      actionUrl = '/certifications';
      actionText = 'View Official Certifications';
    }
    // Rule 6: Greetings
    else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey') || lower.includes('namaste') || lower.includes('good morning') || lower.includes('good evening')) {
      replyText = 'Greetings! Warm welcome from SLV Marine Exports. How can we assist with your seafood order today?';
    }
    // Default fallback
    else {
      replyText = 'Thank you for reaching out! We specialize in premium Indian seafood exports to domestic cities and international destinations like Nepal.\n\nFor immediate assistance, call us at +91 89777 70455.';
      actionUrl = '/contact';
      actionText = 'Connect with Sales Team';
    }

    // MANDATORY ENDING RULE: "We assure your trust. 🤝"
    replyText += '\n\nWe assure your trust. 🤝';

    const botMsg: Message = {
      id: Date.now().toString(),
      sender: 'bot',
      text: replyText,
      actionUrl,
      actionText,
      timestamp: timeStr
    };

    setMessages(prev => [...prev, botMsg]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] sm:bottom-6 right-3 sm:right-6 z-[100] w-[calc(100vw-1.5rem)] sm:w-[380px] h-[530px] max-h-[82vh] bg-white dark:bg-[#0d1f3c] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#023047] via-[#0077B6] to-[#00B4D8] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <FaRobot className="w-5 h-5 text-[#48CAE4]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-tight flex items-center gap-1.5">
                    SLV Assistant <FaRegStar className="text-[#48CAE4] w-3.5 h-3.5" />
                  </h3>
                  <p className="text-[11px] text-white/80 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Online • Quick Quotes
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close Chat"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 dark:bg-slate-900/40">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#0077B6] text-white rounded-br-none'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}

                    {msg.actionUrl && msg.actionText && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-white/10">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            navigate(msg.actionUrl!);
                          }}
                          className="w-full bg-[#0077B6]/10 hover:bg-[#0077B6] text-[#0077B6] hover:text-white dark:text-[#48CAE4] font-bold text-[11px] px-3 py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                        >
                          {msg.actionText} <FiArrowRight />
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-3 py-2 bg-slate-100/80 dark:bg-slate-800/60 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => handleSend('Cost & Price Details')}
                className="whitespace-nowrap bg-white dark:bg-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-[#0077B6] hover:text-white transition-all flex-shrink-0"
              >
                💰 Price & Rates
              </button>
              <button
                onClick={() => handleSend('Shipment and Freight Charges')}
                className="whitespace-nowrap bg-white dark:bg-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-[#0077B6] hover:text-white transition-all flex-shrink-0"
              >
                🚢 Shipping Info
              </button>
              <button
                onClick={() => handleSend('Product Catalog')}
                className="whitespace-nowrap bg-white dark:bg-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-[#0077B6] hover:text-white transition-all flex-shrink-0"
              >
                📦 Products
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-[#0d1f3c] border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask about prices, shipping, products..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs px-3.5 py-2.5 rounded-full border border-transparent focus:border-[#0077B6] outline-none transition-all placeholder:text-slate-400"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 rounded-full bg-[#0077B6] hover:bg-[#023047] text-white flex items-center justify-center shadow-md transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmartQuoteBot;
