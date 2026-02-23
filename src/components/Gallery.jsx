import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">הווי הישיבה</h2>
                        <p className="text-gray-600">רגעים של קדושה, חברות, ועשייה.</p>
                    </div>
                    <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2 group">
                        לכל הגלריה
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
                    {/* Large item */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                        {/* Placeholder Image */}
                        <div className="h-full w-full bg-slate-200 bg-[url('/seder_erev.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute bottom-0 right-0 p-8 w-full bg-gradient-to-t from-slate-900/90 to-transparent text-white">
                            <span className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-1 block">בית המדרש</span>
                            <h3 className="text-2xl font-bold">סדר ערב בישיבה</h3>
                        </div>
                    </div>

                    {/* Small item 1 */}
                    <div className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                        <div className="h-full w-full bg-slate-200 bg-[url('/kashrut.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute bottom-0 right-0 p-6 w-full bg-gradient-to-t from-slate-900/90 to-transparent text-white">
                            <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-1 block">לימודים ופרקטיקה</span>
                            <p className="font-bold">קורס משגיחי כשרות</p>
                        </div>
                    </div>

                    {/* Small item 2 */}
                    <div className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                        <div className="h-full w-full bg-slate-200 bg-[url('/bowling.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute bottom-0 right-0 p-6 w-full bg-gradient-to-t from-slate-900/90 to-transparent text-white">
                            <span className="text-green-400 text-xs font-bold tracking-wider uppercase mb-1 block">חברה</span>
                            <p className="font-bold">גיבוש חברתי</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
