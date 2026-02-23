import React from 'react';
import { BookOpen, Users, Calendar, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-400 py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 text-white font-bold text-xl">
                            <BookOpen className="text-amber-500" />
                            ישיבת עבודת השם
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500">
                            מקום של חיבורים. תורה ועבודה. שמיים וארץ.
                            מגדלים אנשי אמונה ואהבה.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">ניווט מהיר</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors">אודות הישיבה</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">הצוות החינוכי</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">מסלולי לימוד</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">הרשמה</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">בוגרים מספרים</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">צור קשר</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-slate-800 p-1.5 rounded text-amber-500"><Users className="w-4 h-4" /></div>
                                <span>הרב בלומנשטוק (רישום ותרומות): 052-763-2318</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-slate-800 p-1.5 rounded text-amber-500"><Calendar className="w-4 h-4" /></div>
                                <span>office@derech-chaim.org.il</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-slate-800 p-1.5 rounded text-amber-500"><BookOpen className="w-4 h-4" /></div>
                                <span>הר שמואל</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg">הישאר מעודכן</h4>
                        <p className="text-sm text-gray-500 mb-4">קבל עדכונים על אירועים, שיעורים ופעילויות בישיבה.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="הכנס כתובת אימייל"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600 text-sm"
                            />
                            <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors text-sm">
                                הרשמה
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-slate-900 mt-12 pt-8 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} ישיבת עבודת השם - כל הזכויות שמורות.</p>
                    <div className="flex gap-6">
                        <Link to="/accessibility" className="hover:text-gray-400">הצהרת נגישות</Link>
                        <Link to="/terms" className="hover:text-gray-400">מדיניות פרטיות</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
