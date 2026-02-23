import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessibilityStatement = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                    <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                        <ArrowRight className="w-4 h-4 ml-1" />
                        חזרה לדף הבית
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-6">הצהרת נגישות</h1>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        ישיבת "עבודת השם" רואה חשיבות עליונה בהנגשת שירותיה לכלל הציבור,
                        לרבות אנשים עם מוגבלויות. אנו פועלים רבות כדי להבטיח שהאתר יהיה
                        נגיש, ברור וקל לשימוש עבור כולם.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">רמת הנגישות באתר</h2>
                    <p>
                        אתר זה נבנה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013,
                        ועומד בהמלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA,
                        ואת המלצות מסמך WCAG2.1 של ארגון W3C.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800">התאמות שבוצעו באתר</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>האתר,מותאם לצפייה ושימוש במחשב נייח, נייד וטלפון חכם (רספונסיביות).</li>
                        <li>ניווט פשוט וברור בתפריטים.</li>
                        <li>שימוש בכותרות לתיוג והיררכיה של תוכן.</li>
                        <li>טקסטים ברורים וקריאים.</li>
                        <li>ניגודיות צבעים נאותה.</li>
                        <li>תמיכה בשימוש במקלדת לניווט באתר.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-800">יצירת קשר בנושא נגישות</h2>
                    <p>
                        אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות.
                        אם נתקלתם בבעיה או שיש לכם הצעה לשיפור, נשמח לשמוע מכם.
                    </p>
                    <p className="font-semibold">
                        פרטי רכז הנגישות: <br />
                        שם: משרד הישיבה <br />
                        אימייל: office@derech-chaim.org.il
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityStatement;
