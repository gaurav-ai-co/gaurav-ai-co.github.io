import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { createPortfolioChat, sendMessageStream } from '../services/geminiService';
import { Chat } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'Hi! I\'m Alex\'s AI assistant. Ask me anything about his skills, projects, or experience.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const [isApiKeyMissing, setIsApiKeyMissing] = useState(false);

  // Initialize Chat Session on Mount
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
        if (!process.env.API_KEY) {
            setIsApiKeyMissing(true);
            return;
        }
        const chat = createPortfolioChat();
        if (chat) {
            chatSessionRef.current = chat;
        } else {
            setError("Failed to initialize AI. Please try again later.");
        }
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading || isApiKeyMissing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    // Placeholder for AI response
    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '', isStreaming: true }]);

    try {
      if (!chatSessionRef.current) {
         // Attempt reconnection if session was lost or null
         chatSessionRef.current = createPortfolioChat();
         if (!chatSessionRef.current) throw new Error("Connection failed");
      }

      const stream = sendMessageStream(chatSessionRef.current, userMessage.text);
      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, text: fullText } : msg
        ));
      }

      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, text: "I encountered an error. Please try again.", isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, isApiKeyMissing]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in transition-colors duration-300">
          {/* Header */}
          <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
            {isApiKeyMissing && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-200 p-3 rounded-lg text-sm flex gap-2 items-start">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>API Key missing. Chat functionality is disabled for this demo.</p>
                </div>
            )}
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && (
                    <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-400 animate-pulse align-middle"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            {error && (
                <div className="text-center text-red-400 text-xs mt-2">{error}</div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isApiKeyMissing ? "Chat disabled" : "Ask about my experience..."}
                disabled={isLoading || isApiKeyMissing}
                className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-200 rounded-full pl-4 pr-12 py-3 border border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading || isApiKeyMissing}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 disabled:opacity-0 transition-all disabled:pointer-events-none"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-500 dark:text-slate-600 mt-2">
              AI can make mistakes. Powered by Gemini.
            </p>
          </div>
        </div>
      )}

      {/* FAB Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${
          isOpen 
            ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' 
            : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white animate-bounce'
        }`}
        style={{ animationDuration: '3s' }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default GeminiChat;