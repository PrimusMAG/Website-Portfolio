import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ContactPopupProps {
  onClose: () => void;
}

export function ContactPopup({ onClose }: ContactPopupProps) {
  const contactEmail = 'primusmag@gmail.com';
  const [copiedContact, setCopiedContact] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const copyBtnRef = useRef<HTMLButtonElement>(null);

  const copyContact = async () => {
    if (copiedContact) return;
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = contactEmail;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedContact(true);
    setTimeout(() => setCopiedContact(false), 1800);
  };

  useEffect(() => {
    setTimeout(() => copyBtnRef.current?.focus(), 40);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={popupRef}
        initial={{ scale: 0.9, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.9, rotate: 5 }}
        className="relative bg-white border-4 border-black shadow-neo w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-neo-blue border-b-4 border-black text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-2xl text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">✉️</div>
            <div>
              <h3 className="text-xl font-black uppercase">Let's talk</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-black transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="mb-6 font-bold text-lg">Reach me directly via email:</div>

          <div className="bg-gray-100 border-4 border-black p-4 mb-6 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex-1 overflow-hidden">
              <div className="font-mono text-lg truncate font-bold">{contactEmail}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              ref={copyBtnRef}
              onClick={copyContact}
              className="flex-1 py-3 bg-neo-yellow border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all active:bg-yellow-500"
            >
              {copiedContact ? '✅ Copied!' : '📋 Copy Email'}
            </button>

            <a 
              href={`mailto:${contactEmail}`} 
              className="flex-1 py-3 bg-neo-green text-white border-4 border-black font-bold text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all active:bg-green-600"
            >
              Send Mail
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
