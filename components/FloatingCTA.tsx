
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 md:hidden">
      <AnimatePresence>
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          href="https://wa.me/1234567890"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          href="tel:+1234567890"
          className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;
