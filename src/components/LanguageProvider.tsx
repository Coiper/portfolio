import React, { useState } from "react";

type Language = "EN" | "RU";
type LanguageContext = { language: Language; toggleLanguage: () => void };

export const LanguageContext = React.createContext<LanguageContext>(
  {} as LanguageContext
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("RU");
  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "RU" : "EN");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
