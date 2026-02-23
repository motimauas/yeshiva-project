import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Abstract Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-900">
                {/* Placeholder for actual background image/video */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534067783741-5127d28f85be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <div className="inline-block border border-amber-500/60 rounded-full px-4 py-1.5 bg-slate-800/50 backdrop-blur-sm text-amber-400 text-sm font-semibold tracking-wider mb-2">
                    5 שנים של עשייה ורוח - מהקורונה ועד היום
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
                    גדלות ב<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">תורה</span>.
                    <br />
                    מצוינות ב<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">עשייה</span>.
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                    ישיבת "עבודת השם" משלבת עבודה בבקרים וסדרי לימוד בערב (סדר ב' ו-ג').
                    הישיבה הוקמה בתקופת הקורונה, כדי לתת מענה לבחורים שחיפשו מקום של תורה ועשייה.
                </p>

                <div className="flex justify-center mt-10">
                    <a
                        href="https://nedar.im/7006348M5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 hover:scale-105 hover:-translate-y-1 transform"
                    >
                        היו שותפים - לתרומה לישיבה
                        <ArrowLeft className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
