import React from 'react';

const Stats = () => {
    return (
        <section className="bg-slate-900 py-16 text-white relative">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-slate-700/50">
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-amber-500">30+</div>
                    <div className="text-gray-400">תלמידים</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-amber-500">100%</div>
                    <div className="text-gray-400">משלבים תורה ועבודה</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-amber-500">95%</div>
                    <div className="text-gray-400">אחוזי השמה</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-amber-500">5</div>
                    <div className="text-gray-400">שנות פעילות</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
