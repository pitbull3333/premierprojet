import './App.css';
import { useTranslation,I18nextProvider } from 'react-i18next'
import i18n from "./core/translation"
import { useState } from 'react';
import LoginForm from "./components/LoginForm";
import Categorie from "./components/Categorie";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Icon from './components/Icon';
import { useApiGet } from './domains/user/services/api';
import type { DescriptionType } from './components/Categorie';
import LogoCultura from './assets/logo-culturalog.svg';
//import '@fontsource/poppins';

const queryClient = new QueryClient();

function App() {
  const {t} =  useTranslation();
  const [email, setEmail] = useState<string>("");
  const { data: logData = {}, loading, error } = useApiGet();
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
  const warningSensible = descriptionSensible.some(item => item.valeur > 0);
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <h4>
          <span>{t("common:culturaLog")}</span>
          <span className="version">{__APP_VERSION__}</span>
          <span>{import.meta.env.MODE}</span>
        </h4>
        <div className="div_logo_cultura">
          <img className="img_logo_cultura" src={LogoCultura} alt="Logo Cultura" />
          <div className="div_setting">
            <Icon name={"setting"} size={15} style={{color:"white"}} />
            <span className="span_setting">{t("common:parametrages")}</span>
            <Icon name={"map"} size={15} style={{color:"white",paddingLeft:"20px"}} />
            <span className="span_setting">{t("common:magasin")}</span>
            <div className="div_user">
              <Icon name={"profil"} size={15} style={{color:"white",paddingLeft:"20px"}} />
              <div className="div_text_user"><span>{t("common:user")}</span><br /><span className="span_text_decoonnexin">{t("common:deconnexion")}</span></div>
            </div>
          </div>
        </div>
        <h1>{t("common:titre")}</h1>
        <div className="conteneur_categorie">
          <Categorie titre={t("common:receptions")} isWarning={warningReception} loading={loading} error={error} icon={<Icon name="delivery" size={40} />} description={descriptionReception} />
          <Categorie titre={t("common:sensibles")} isWarning={warningSensible} loading={loading} error={error} icon={<Icon name="package-locked" size={40} />} description={descriptionSensible} />
          <Categorie titre={t("common:trieEtiquetage")} isWarning={false} loading={false} error={null} icon={<Icon name="label" size={40} />} description={[]} />
          <Categorie titre={t("common:prisme")} isWarning={false} loading={false} error={null} icon={<Icon name="scanner" size={40} />} description={[]} />
        </div>
        <div className="div_form">
          <LoginForm onEmailSubmit={setEmail} />
          <span className="span_reponse_form">{email}</span>
        </div>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
export default App