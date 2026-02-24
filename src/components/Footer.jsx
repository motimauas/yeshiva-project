import React from 'react';
import { BookOpen, Users, Calendar, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 text-gray-400 py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-right">

                    {/* Brand Column */}
                    <div className="max-w-md space-y-6">
                        <div className="flex items-center justify-end gap-3 text-white font-bold text-2xl">
                            ישיבת עבודת השם
                            <BookOpen className="text-amber-500 w-8 h-8" />
                        </div>
                        <p className="text-base leading-relaxed text-gray-500">
                            מקום של חיבורים. תורה ועבודה. שמיים וארץ.
                            מגדלים אנשי אמונה ואהבה מזה 6 שנים.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-xl mb-6">צור קשר</h4>
                        <ul className="space-y-5 text-base">
                            <li className="flex items-center justify-end gap-4">
                                <span className="text-gray-300">הרב בלומנשטוק: 052-763-2318</span>
                                <div className="bg-slate-900 p-2.5 rounded-lg text-amber-500 border border-slate-800"><Users className="w-5 h-5" /></div>
                            </li>
                            <li>
                                <a href="mailto:yeshivatavodat@gmail.com" className="flex items-center justify-end gap-4 hover:text-amber-500 transition-colors group">
                                    <span className="text-gray-300 group-hover:text-amber-500">yeshivatavodat@gmail.com</span>
                                    <div className="bg-slate-900 p-2.5 rounded-lg text-amber-500 border border-slate-800 group-hover:bg-amber-500/10"><Calendar className="w-5 h-5" /></div>
                                </a>
                            </li>
                            <li className="flex items-center justify-end gap-4">
                                <span className="text-gray-300">הר שמואל, ירושלים</span>
                                <div className="bg-slate-900 p-2.5 rounded-lg text-amber-500 border border-slate-800"><BookOpen className="w-5 h-5" /></div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">© {new Date().getFullYear()} ישיבת עבודת השם - כל הזכויות שמורות.</p>
                    <div className="flex gap-8 text-sm font-medium">
                        <Link to="/accessibility" className="hover:text-amber-500 transition-colors">הצהרת נגישות</Link>
                        <Link to="/terms" className="hover:text-amber-500 transition-colors">תקנון האתר</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
