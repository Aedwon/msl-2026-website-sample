import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Who can join MSL?",
    answer: "Any student, campus esports organization, or recognized school-based group with a passion for Mobile Legends and esports development can be part of MSL."
  },
  {
    question: "How can I join if I'm just an individual student?",
    answer: "You can become part of your school's MSL Community or connect with us directly to explore content opportunities."
  },
  {
    question: "How do we start an MSL Community in our school?",
    answer: "Apply through the Campus Department's onboarding process. Once recognized, you or your team will receive support, resources, and opportunities to run esports initiatives on campus."
  },
  {
    question: "What benefits do MSL Communities receive?",
    answer: "MSL Communities gain official recognition, event support, training, creative resources, and the chance to participate in nationwide campaigns and tournaments."
  },
  {
    question: "How does MSL support esports tournaments?",
    answer: "We support both campus-only tournaments and inter-school competitions by providing visibility, resources, and partnership opportunities for recognized communities."
  },
  {
    question: "Can brands and partners collaborate with MSL?",
    answer: "Absolutely. The Partnerships Department works with organizations, brands, and sponsors to fuel student-led events, campaigns, and national activations."
  },
  {
    question: "What benefits do partners gain when collaborating with MSL?",
    answer: "Partners receive campus exposure, access to student-led events, opportunities for co-branded campaigns, and reporting that tracks engagement and impact."
  },
  {
    question: "Do MSL members receive training or development opportunities?",
    answer: "Yes — we offer workshops, seminars, and mentorship programs designed to build leadership, organizational, and esports-related skills."
  },
  {
    question: "Is MSL exclusive to Mobile Legends?",
    answer: "Yes — we are powered by Moonton and are focused on growing the Mobile Legends: Bang Bang collegiate esports ecosystem nationwide."
  },
  {
    question: "How can we contact MSL Philippines?",
    answer: "You can reach us through our official channels on Facebook, Discord, or via our email contact@moontonslph.org"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-msl-black py-24 px-4 border-t border-white/10" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h2 id="faq-title" className="font-display text-4xl font-bold text-white mb-2 uppercase">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about joining and partnering with us.</p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-msl-card transition-colors hover:border-white/20"
            >
              <h3>
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-msl-gold' : 'text-white'}`}>
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-msl-gold flex-shrink-0" size={20} aria-hidden="true" />
                  ) : (
                    <Plus className="text-gray-500 flex-shrink-0" size={20} aria-hidden="true" />
                  )}
                </button>
              </h3>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-gray-400 leading-relaxed border-t border-white/10">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;