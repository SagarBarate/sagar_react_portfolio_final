import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
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
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
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
        },
        publicKey
      );

      showToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-navy-800/40 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500/60 focus:bg-navy-800/60 transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-navy-800/40 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500/60 focus:bg-navy-800/60 transition-all"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-navy-800/40 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500/60 focus:bg-navy-800/60 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full kunai-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all border border-orange-500/30 ${
            toast.type === 'success'
              ? 'bg-dark-orange text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Contact;

