import React from 'react';
import { Heart } from 'lucide-react';

const DonationSection = () => {
    return (
        <section id="donate" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                <Heart className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">היו שותפים בבניין הרוח והחומר</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    תרומתכם מסייעת לנו להעמיד דור של תלמידי חכמים המעורים בחיי המעשה,
                    ותומכת במלגות מחיה לתלמידים מצטיינים ומעוטי יכולת.
                </p>

                <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 max-w-3xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[180, 360, 500, 1000].map((amount) => (
                            <button key={amount} className="bg-slate-800 hover:bg-amber-500 hover:text-slate-900 text-white border border-slate-600 hover:border-amber-500 py-3 rounded-xl font-bold transition-all duration-300">
                                ₪{amount}
                            </button>
                        ))}
                    </div>
                    <a href="https://nedar.im/7006348M5" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-xl font-bold py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1 block text-center">
                        תרום עכשיו באשראי מאובטח
                    </a>
                    <p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        התרומה מוכרת לצרכי מס לפי סעיף 46
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonationSection;
