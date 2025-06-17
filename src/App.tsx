import './App.css';
import { useTranslation,I18nextProvider } from 'react-i18next'
import i18n from "./core/translation"
import LoginForm from "./components/LoginForm";
import Categorie from "./components/Categorie";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Icon from './components/Icon';
import { useApiGet } from './domains/user/services/api';
import type { DescriptionType } from './components/Categorie';

const queryClient = new QueryClient();

function App() {
  const {t} =  useTranslation();
  const { data: logData = {} } = useApiGet();
  const descriptionReception = Object.entries(logData)
    .filter(([key]) => key !== "sensitiveProductReportsToValidate")
    .map(([key, value], index) => ({
      id: index,
      sousTitre: t(`common:${key}`),
      valeur: value,
  })) as DescriptionType[];
  const warningReception = descriptionReception.some(item => item.valeur > 0);
  const descriptionSensible = Object.entries(logData)
    .filter(([key]) => key === "sensitiveProductReportsToValidate")
    .map(([key, value], index) => ({
      id: index,
      sousTitre: t(`common:${key}`),
      valeur: value,
  })) as DescriptionType[];
  const warningSensible = descriptionReception.some(item => item.valeur > 0);
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <div className="div_logo_cultura">
          <LoginForm />
        </div>
        <h1>{t("common:titre")}</h1>
        <div className="conteneur_categorie">
          <Categorie titre={t("common:receptions")} isWarning={warningReception} icon={<Icon name="delivery" size={40} />} description={descriptionReception} />
          <Categorie titre={t("common:sensibles")} isWarning={warningSensible} icon={<Icon name="package-locked" size={40} />} description={descriptionSensible} />
        </div>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
export default App