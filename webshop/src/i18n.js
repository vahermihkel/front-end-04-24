import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add product",
      "maintain-products": "Maintain products",
      "supplier": "Supplier",
      "book-supplier": "Book supplier",
      "admin": "To admin view",
      "shops": "Our shops",
      "contact": "Contact us",
      "cart": "To cart view",
    }
  },
  ee: {
    translation: {
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",
      "supplier": "Tarnija",
      "book-supplier": "Raamatute tarnija",
      "admin": "Admin vaatesse",
      "shops": "Meie poed",
      "contact": "Kontakteeru meiega",
      "cart": "Ostukorvi",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;