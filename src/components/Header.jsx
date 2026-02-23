import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-amber-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300">
                            <BookOpen className="text-slate-900 w-6 h-6" />
                        </div>
                        <span className="font-bold text-2xl tracking-wide">ישיבת <span className="text-amber-400">עבודת השם</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center gap-8 space-x-reverse">
                            <a href="#about" className="hover:text-amber-400 transition-colors duration-300 text-lg font-medium">אודות</a>
                            <a href="#program" className="hover:text-amber-400 transition-colors duration-300 text-lg font-medium">המסלול</a>
                            <a href="#gallery" className="hover:text-amber-400 transition-colors duration-300 text-lg font-medium">גלריה</a>
                            <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 text-lg font-medium">צור קשר</a>
                            <a href="https://nedar.im/7006348M5" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20">
                                תרומה לישיבה
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2"
                        >
                            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-fadeIn">
                    <div className="px-4 pt-2 pb-6 space-y-2 text-center">
                        <a href="#about" className="block text-gray-300 hover:text-amber-400 px-3 py-3 rounded-md text-lg font-medium" onClick={() => setIsMenuOpen(false)}>אודות</a>
                        <a href="#program" className="block text-gray-300 hover:text-amber-400 px-3 py-3 rounded-md text-lg font-medium" onClick={() => setIsMenuOpen(false)}>המסלול</a>
                        <a href="#gallery" className="block text-gray-300 hover:text-amber-400 px-3 py-3 rounded-md text-lg font-medium" onClick={() => setIsMenuOpen(false)}>גלריה</a>
                        <a href="#contact" className="block text-gray-300 hover:text-amber-400 px-3 py-3 rounded-md text-lg font-medium" onClick={() => setIsMenuOpen(false)}>צור קשר</a>
                        <a href="https://nedar.im/7006348M5" target="_blank" rel="noopener noreferrer" className="block mt-4 w-full bg-amber-500 text-slate-900 px-4 py-3 rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>
                            תרומה לישיבה
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
