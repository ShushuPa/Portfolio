import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const myEmail = "pablomaitini20@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error("Faltan las variables de entorno de EmailJS");
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
    }

    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Tu Nombre', 
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        console.error('FAILED...', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-6 md:p-10 rounded-lg border border-border/50 bg-background/70 backdrop-blur-sm">
          <div className="order-1 md:order-2">
             <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Get in Touch
                </h2>
                <div className="w-20 h-1 bg-gradient-to-l from-blue-400 to-transparent rounded-full"></div>
             </div>

             <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question, 
                a proposal, or just want to say hi, I'll try my best to get back to you!
             </p>

             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
                <p className="text-sm dark:text-gray-400 text-white mb-2">Send me an email directly:</p>
                <div className="flex items-center justify-between bg-slate-900 rounded px-4 py-3">
                    <span className="text-blue-100 font-mono text-sm md:text-base">{myEmail}</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy to clipboard"
                    >
                        {copied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        )}
                    </button>
                </div>
             </div>
          </div>
          <div className="order-2 md:order-1">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50">
              <div className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-lg font-bold text-white transition-all duration-300 transform hover:-translate-y-1 ${
                    isSubmitting 
                      ? 'bg-blue-800 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                   <p className="text-green-400 text-center text-sm font-medium bg-green-400/10 py-2 rounded">
                     Message sent successfully! I'll get back to you soon.
                   </p>
                )}
                {submitStatus === 'error' && (
                   <p className="text-red-400 text-center text-sm font-medium bg-red-400/10 py-2 rounded">
                     Something went wrong. Please try again later.
                   </p>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};