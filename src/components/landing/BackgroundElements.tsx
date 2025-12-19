import { motion } from 'framer-motion';

export function BackgroundElements() {
  return (
    <>
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }} 
      />

      {/* Floating Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border-4 border-black bg-neo-yellow opacity-50"
        />
        <motion.div 
          animate={{ rotate: -360, x: [0, -30, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full border-4 border-black bg-neo-black opacity-50"
        />
        <motion.div 
          animate={{ rotate: 180, x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-black bg-neo-green opacity-30"
          />
          <motion.div 
          animate={{ rotate: 360, x: [0, 50, 0], y: [0, -140, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-32 h-32 border-4 border-black bg-neo-yellow opacity-50"
        />
      </div>
    </>
  );
}
