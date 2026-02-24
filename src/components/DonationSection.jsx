import React from 'react';
import { Heart } from 'lucide-react';

const DonationSection = () => {
    return (
        <section id="donate" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-10 transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-10 transform translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-6 ring-1 ring-amber-500/20">
                    <Heart className="w-10 h-10 text-amber-500 animate-pulse" />
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    היו שותפים בבניין הרוח והחומר
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    תרומתכם מסייעת לנו להעמיד דור של תלמידי חכמים המעורים בחיי המעשה,
                    ותומכת במלגות מחיה לתלמידים מצטיינים ומעוטי יכולת.
                </p>

                <div className="max-w-2xl mx-auto">
                    {/* Right Side: Action Card */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
                        {/* Decorative glow inside card */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500 rounded-full blur-[80px] opacity-20"></div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">תרומה מאובטחת</h3>
                                <p className="text-gray-400">הצטרפו למאות תורמים שכבר שותפים לדרך</p>
                            </div>

                            <a
                                href="https://nedar.im/7006348M5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 text-2xl font-black py-6 rounded-2xl shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <span className="relative z-10">תרום עכשיו באשראי</span>
                                <div className="bg-slate-900/10 rounded-full p-1 group-hover:bg-slate-900/20 transition-colors">
                                    <svg className="w-6 h-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>

                            <div className="mt-8 flex flex-col items-center gap-4">
                                <div className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-[10px] text-white font-bold border border-white/20">VISA</div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-[10px] text-white font-bold border border-white/20">MC</div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-[10px] text-white font-bold border border-white/20">BIT</div>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <p className="text-emerald-400 text-sm font-semibold">
                                        התרומה מוכרת לצרכי מס - סעיף 46
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer simple mention */}
                <p className="text-gray-500 text-sm mt-16 max-w-xl mx-auto">
                    הישיבה הינה מוסד ללא כוונת רווח. כל התרומות מועברות ישירות לקידום מטרות הישיבה.
                </p>
            </div>
        </section>
    );
};

export default DonationSection;
