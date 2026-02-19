import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Users, Heart } from 'lucide-react';

const Card = ({ icon: Icon, title, subtitle, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
    >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-500">
            <Icon className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold text-slate-800 mb-2">{title}</div>
        <div className="text-gray-500 text-sm font-medium">{subtitle}</div>
    </motion.div>
);

const TimelineItem = ({ year, title, description, align }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`flex items-center justify-between w-full mb-8 ${align === 'left' ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-10 h-10 rounded-full justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: align === 'left' ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 border-r-4 ${align === 'left' ? 'border-amber-500 text-right' : 'border-slate-800 text-left'}`}
            >
                <span className="font-bold text-amber-600 block mb-1">{year}</span>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{description}</p>
            </motion.div>
        </div>
    );
};

const AboutSection = () => {
    // For mobile timeline
    const steps = [
        { year: '2020', title: 'הקמה בקורונה', description: 'דווקא בשיא הסגרים והחוסר וודאות, הקמנו בית של תורה ואור.' },
        { year: '2022', title: 'צמיחה והתבססות', description: 'עשרות תלמידים מצטרפים, בית המדרש שוקק חיים.' },
        { year: '2024', title: 'פריחת הבוגרים', description: 'בוגרים ראשונים משתלבים במשק ותורמים לחברה.' },
        { year: '2026', title: 'היום', description: 'למעלה מ-40 בוגרים, משפחות של תורה, ועשייה בלתי פוסקת.' },
    ];

    return (
        <section id="about" className="py-24 bg-gray-50 relative overflow-hidden" dir="rtl">
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-[128px] opacity-40 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[128px] opacity-40 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Narrative & Stats Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        סיפור של <span className="text-amber-500">אמונה והגשמה</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed space-y-4"
                    >
                        <span className="block mb-4">
                            הישיבה קמה מיד לאחר פסח תש"פ (2020), בלב מגפת הקורונה.
                            כשעולם שלם עצר מלכת, בחרנו להקים בית של תורה ועבודה.
                        </span>
                        <span className="block font-medium text-slate-800">
                            בוגרינו משתלבים בהצלחה בעולם המעשה, מקימים בתים נאמנים בישראל וקובעים עיתים לתורה.
                        </span>
                    </motion.p>
                </div>

                {/* Stats Cards - Mobile Scroll / Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <Card icon={Lightbulb} title="הוקמה בקורונה" subtitle="תש״פ - 2020" delay={0.2} />
                    <Card icon={Users} title="מעל 40 בוגרים" subtitle="משולבים במשק ובקהילה" delay={0.3} />
                    <Card icon={Heart} title="בתים של תורה" subtitle="בוגרים נשואים ומקימי בתים" delay={0.4} />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Mobile Timeline (Hidden on MD+) */}
                    <div className="md:hidden space-y-8 pl-4 border-r-2 border-amber-200 mr-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pr-8">
                                <div className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white"></div>
                                <span className="text-sm font-bold text-amber-600 mb-1 block">{step.year}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Timeline (Hidden on Mobile) */}
                    <div className="hidden md:block relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 rounded-full"></div>

                        <TimelineItem
                            align="right"
                            year="2020 - ההתחלה"
                            title="הקמה בשיא המגפה"
                            description="בעיצומו של הסגר הראשון, כשחוסר הוודאות שלט, החלטנו להדליק אור. קבוצה ראשונה של חלוצים הקימה את בית המדרש."
                        />
                        <TimelineItem
                            align="left"
                            year="2022 - התבססות"
                            title="הקול תורה נשמע"
                            description="הישיבה צומחת. עוד ועוד בחורים מצטרפים למסלול המשלב לימוד מעמיק עם עשייה רצינית."
                        />
                        <TimelineItem
                            align="right"
                            year="2024 - פירות ראשונים"
                            title="בוגרים משתלבים"
                            description="המחזורים הראשונים יוצאים לדרך עצמאית. נוכחות מרשימה של הבוגרים בעולמות התעסוקה והאקדמיה."
                        />
                        <TimelineItem
                            align="left"
                            year="2026 - תנופה"
                            title="בניין וצמיחה"
                            description="למעלה מ-40 בוגרים, חלקם כבר הקימו בתים נאמנים בישראל, ומהווים דוגמא חיה לחזון הישיבה."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
