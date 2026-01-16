import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { RUBRIC_DATA } from '../constants';

interface RubricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RubricModal: React.FC<RubricModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-white">Scoring Rubric Guide</h2>
                <p className="text-sm text-slate-400">Reference for the 1-10 Scale (The "MSL Standard")</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
            <div className="grid grid-cols-1 gap-6">
                {RUBRIC_DATA.map((item) => (
                    <div key={item.category} className="bg-slate-950/50 border border-slate-800 rounded-lg p-5">
                        <div className="mb-3">
                            <h3 className="text-lg font-bold text-indigo-300">{item.category}</h3>
                            <p className="text-sm text-slate-400 italic">{item.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-slate-900/50 p-3 rounded border-l-2 border-emerald-500/50">
                                <span className="block text-xs font-bold text-emerald-400 uppercase mb-1">Low (1-3)</span>
                                <p className="text-slate-300">{item.low}</p>
                            </div>
                            <div className="bg-slate-900/50 p-3 rounded border-l-2 border-yellow-500/50">
                                <span className="block text-xs font-bold text-yellow-400 uppercase mb-1">Mid (4-7)</span>
                                <p className="text-slate-300">{item.mid}</p>
                            </div>
                            <div className="bg-slate-900/50 p-3 rounded border-l-2 border-red-500/50">
                                <span className="block text-xs font-bold text-red-400 uppercase mb-1">High (8-10)</span>
                                <p className="text-slate-300">{item.high}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/50 text-right">
             <button 
                onClick={onClose}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
                Close Guide
            </button>
        </div>
      </div>
    </div>
  );
};

export default RubricModal;