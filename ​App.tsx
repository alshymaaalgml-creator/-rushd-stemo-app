​import React, { useState } from 'react';

// تعريف أنواع البيانات للترجمة
interface LanguageContent {
  title: string;
  subtitle: string;
  scoreTracker: string;
  explorerGate: string;
  choosePartner: string;
  rushdTitle: string;
  rushdRole: string;
  rushdDesc: string;
  stemoTitle: string;
  stemoRole: string;
  stemoDesc: string;
  experimentTitle: string;
  experimentDesc: string;
  startBtn: string;
  languageLabel: string;
}

export default function App() {
  // الحالة الخاصة باللغة الافتراضية (العربية)
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  // حصيلة النجوم والدرجات التفاعلية للأطفال
  const [stars, setStars] = useState<number>(3);

  const content: Record<'ar' | 'en', LanguageContent> = {
    ar: {
      title: "✨ مغامرات رُشد وستيمو العلمية",
      subtitle: "منصة التجارب الهندسية التفاعلية للأطفال المستكشفين",
      scoreTracker: "حصيلة النجوم والدرجات المباشرة:",
      explorerGate: "🚪 بوابة الطفل المستكشف (STEM Kids Lab)",
      choosePartner: "من تريد أن يرافقك في رحلة الاستكشاف اليوم؟",
      rushdTitle: "👨‍🏫 المعلم رُشد",
      rushdRole: "المرشد الذكي والتربوي",
      rushdDesc: "مستكشف دائم يحب تبسيط العلوم، ومساعدتك في فهم الدوائر الكهربائية، وحل الألغاز الهندسية بسلاسة وبساطة!",
      stemoTitle: "🤖 الروبوت ستيمو",
      stemoRole: "المساعد الآلي التفاعلي",
      stemoDesc: "يبحث دائماً عن مصادر الطاقة للتوصيل، ويصدر أصواتاً رقمية مدهشة، ويساعدك في تشغيل الطنانات ومستشعرات الضوء!",
      experimentTitle: "🧪 معمل التجارب الحالي",
      experimentDesc: "تحدي اليوم: بناء دائرة طنان كهربائي باستخدام مستشعر الضوء. هل أنت مستعد للبدء؟",
      startBtn: "ابدأ المغامرة الآن 🚀",
      languageLabel: "English 🌐"
    },
    en: {
      title: "✨ Rushd & Stemo Scientific Adventures",
      subtitle: "Interactive Engineering Experiments Platform for Explorer Kids",
      scoreTracker: "Live Stars & Score Tracker:",
      explorerGate: "🚪 Explorer Kid Gate (STEM Kids Lab)",
      choosePartner: "Who do you want to accompany you on your exploration journey today?",
      rushdTitle: "👨‍🏫 Teacher Rushd",
      rushdRole: "The Smart & Educational Guide",
      rushdDesc: "A lifelong explorer who loves simplifying science, helping you understand electrical circuits, and solving engineering puzzles smoothly!",
      stemoTitle: "🤖 Stemo the Robot",
      stemoRole: "The Interactive Robotic Assistant",
      stemoDesc: "Always searching for energy sources to connect, making amazing digital sounds, and helping you activate buzzers and light sensors!",
      experimentTitle: "🧪 Current Experiment Lab",
      experimentDesc: "Today's Challenge: Building a buzzer circuit using a light sensor. Are you ready to start?",
      startBtn: "Start Adventure Now 🚀",
      languageLabel: "العربية 🌐"
    }
  };

  const t = content[lang];

  const handleGainStar = () => {
    setStars(prev => prev + 1);
  };

  return (
    <div className="app-container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* الهيدر الاحترافي للتطبيق */}
      <header className="app-header">
        <div className="header-top">
          <h1 className="main-title">{t.title}</h1>
          <button 
            className="lang-btn" 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          >
            {t.languageLabel}
          </button>
        </div>
        <p className="subtitle">{t.subtitle}</p>
        
        {/* لوحة تتبع النجوم التفاعلية */}
        <div className="stars-box" onClick={handleGainStar} style={{ cursor: 'pointer' }}>
          <span className="stars-label">{t.scoreTracker}</span>
          <div className="stars-display">
            {Array.from({ length: Math.min(stars, 8) }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="score-badge">🪙 {stars}</span>
          </div>
        </div>
        
        <div className="gate-banner">{t.explorerGate}</div>
      </header>

      {/* المحتوى الأساسي والشخصيات */}
      <main className="main-content">
        <h2 className="section-title">{t.choosePartner}</h2>
        
        <div className="characters-grid">
          {/* كارت المعلم رشد */}
          <div className="char-card rushd-card">
            <div className="card-badge">{t.rushdRole}</div>
            <div className="char-avatar">👨‍💻</div>
            <h3 className="char-name">{t.rushdTitle}</h3>
            <p className="char-description">{t.rushdDesc}</p>
          </div>

          {/* كارت الروبوت ستيمو */}
          <div className="char-card stemo-card">
            <div className="card-badge">{t.stemoRole}</div>
            <div className="char-avatar">🤖</div>
            <h3 className="char-name">{t.stemoTitle}</h3>
            <p className="char-description">{t.stemoDesc}</p>
          </div>
        </div>

        {/* قسم تجارب STEM Kids Lab التفاعلية */}
        <section className="experiment-section">
          <h3 className="experiment-heading">{t.experimentTitle}</h3>
          <p className="experiment-text">{t.experimentDesc}</p>
          <button className="action-btn" onClick={handleGainStar}>
            {t.startBtn}
          </button>
        </section>
      </main>
    </div>
  );
}
