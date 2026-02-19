import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                    <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                        <ArrowRight className="w-4 h-4 ml-1" />
                        חזרה לדף הבית
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-6">תנאי שימוש ומדיניות פרטיות</h1>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="font-semibold">עודכן לאחרונה: פברואר 2026</p>

                    <h2 className="text-xl font-bold text-slate-800">כללי</h2>
                    <p>
                        ברוכים הבאים לאתר ישיבת "עבודת השם". השימוש באתר כפוף לתנאים המפורטים להלן.
                        הגלישה באתר מעידה על הסכמתכם לתנאים אלו.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">קניין רוחני</h2>
                    <p>
                        כל התוכן המופיע באתר, לרבות טקסטים, תמונות, לוגו וגרפיקה, הינו קניינה הבלעדי של הישיבה (או שניתן לה רשיון שימוש בהם)
                        ואין לעשות בו שימוש מסחרי ללא אישור בכתב.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">שמירה על פרטיות</h2>
                    <p>
                        אנו מכבדים את פרטיות המשתמשים באתר. המידע שתמסרו לנו (כגון בעת יצירת קשר או תרומה) ישמש אך ורק למטרות שלשמן נמסר,
                        ולא יועבר לצדדים שלישיים ללא הסכמתכם, אלא אם נדרש על פי חוק.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">תרומות ואבטחה</h2>
                    <p>
                        סליקת התרומות באתר מתבצעת באמצעות ספק חיצוני מאובטח ("נדרים פלוס") העומד בתקני האבטחה המחמירים (PCI-DSS).
                        פרטי האשראי אינם נשמרים בשרתי הישיבה.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">יצירת קשר</h2>
                    <p>
                        לכל שאלה או בירור בנוגע לתנאי השימוש, ניתן לפנות אלינו במייל: office@derech-chaim.org.il
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
