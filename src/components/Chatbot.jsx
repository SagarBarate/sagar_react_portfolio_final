import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const chatWindowRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  useEffect(() => {
    // Auto-focus input when chat opens
    if (isOpen && !isMinimized && formRef.current) {
      const nameInput = formRef.current.querySelector('input[name="name"]');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 300);
      }
    }
  }, [isOpen, isMinimized]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          source: 'Chatbot',
        },
        publicKey
      );

      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
      
      // Close chat after 2 seconds on success
      setTimeout(() => {
        setIsOpen(false);
        setIsMinimized(false);
      }, 2000);
    } catch (error) {
      console.error('EmailJS error:', error);
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen && !isMinimized
            ? 'bg-dark-orange scale-90 rotate-180'
            : 'bg-gradient-to-br from-dark-orange to-ninja-orange hover:scale-110 hover:shadow-orange-500/50'
        }`}
        aria-label="Open chat"
      >
        {isOpen && !isMinimized ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        
        {/* Pulse Animation Ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-75"></span>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-16 md:bottom-20 right-4 md:right-6 z-50 bg-white text-dark-orange px-2.5 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 md:gap-2 animate-bounce">
          <span>💬</span>
          <span className="hidden sm:inline">Need help?</span>
          <span className="sm:hidden">Help?</span>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className={`fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-96 max-w-md transition-all duration-300 ${
            isMinimized
              ? 'h-0 opacity-0 pointer-events-none'
              : 'h-[calc(100vh-7rem)] md:h-[600px] max-h-[600px] opacity-100'
          }`}
        >
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl shadow-2xl border-2 border-white/30 flex flex-col h-full overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-dark-orange to-ninja-orange px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Sagar's Assistant</h3>
                  <p className="text-white/80 text-xs">Usually replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Minimize"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  onClick={closeChat}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-navy-900/50">
              {/* Welcome Message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-dark-orange/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-dark-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="bg-navy-800/60 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                  <p className="text-white text-sm">
                    👋 Hi! I'm here to help you connect with Sagar. Feel free to ask questions or send a message!
                  </p>
                </div>
              </div>

              {/* Notification Message */}
              {notification.show && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    notification.type === 'success'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {notification.message}
                </div>
              )}
            </div>

            {/* Chat Form */}
            <div className="p-4 bg-navy-800/40 border-t border-white/10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-navy-900/60 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-dark-orange focus:bg-navy-900/80 transition-all text-sm disabled:opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-navy-900/60 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-dark-orange focus:bg-navy-900/80 transition-all text-sm disabled:opacity-50"
                />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="3"
                  className="w-full px-4 py-2.5 bg-navy-900/60 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-dark-orange focus:bg-navy-900/80 transition-all resize-none text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-dark-orange to-ninja-orange hover:from-dark-orange/90 hover:to-ninja-orange/90 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Chat Button */}
      {isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-dark-orange to-ninja-orange shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Chatbot;

