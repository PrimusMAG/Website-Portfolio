import { Mail } from 'lucide-react';

interface ContactProps {
  onOpenPopup: () => void;
}

export function Contact({ onOpenPopup }: ContactProps) {
  return (
    <section className="py-24 px-6 bg-neo-green border-t-4 border-black">
      <div className="max-w-4xl mx-auto text-center"> 
        <div className="bg-white border-4 border-black p-10 md:p-16 shadow-neo rotate-1">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">Let's Work Together</h2>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">
            Got an idea or a project? I craft clear, maintainable solutions.
          </p>
          <button
            onClick={onOpenPopup}
            className="neo-button bg-neo-black text-white text-xl hover:bg-black"
          >
            <span className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
