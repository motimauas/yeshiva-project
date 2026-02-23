import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 relative inline-block">
                        החזון שלנו
                        <div className="absolute -bottom-2 right-0 w-1/3 h-1 bg-amber-500 rounded-full"></div>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        אנו מאמינים כי אין סתירה בין חיי תורה עמוקים לבין חיים מקצועיים פוריים.
                        אדרבה, הם משלימים ומעצימים זה את זה.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Torah Column */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-amber-500/30">
                                <BookOpen className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-4">עולם התורה</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                הישיבה מתמקדת בלימוד במסגרת סדר ב' וסדר ג' בשעות הערב.
                                אנו מאמינים כי חיבור יומיומי ללימוד, דווקא לאחר יום עבודה, בונה קומה רוחנית יציבה.
                            </p>
                            <ul className="space-y-3">
                                {['לימוד בחברותות עם אברכים איכותיים', 'שיעורים מרתקים בנושאים אקטואליים'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Work Column */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-br-full -ml-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-8 -rotate-3 shadow-lg shadow-slate-700/30">
                                <Briefcase className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-4">עולם המעשה</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                בשעות הבוקר, הבחורים יוצאים לעבוד או ללמוד מקצועות באופן עצמאי.
                                הישיבה מעודדת יציאה לשוק העבודה ורכישת כלים לחיים, תוך שמירה על מסגרת תורנית.
                            </p>
                            <ul className="space-y-3">
                                {['עבודה במגוון תחומים', 'לימודים אקדמיים עצמאיים', 'שילוב חיי תורה ועבודה בחיי המעשה'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
