import './App.css';
import { useTranslation,I18nextProvider } from 'react-i18next'
import i18n from "./core/translation"
import LoginForm from "./components/LoginForm";
import Categorie from "./components/Categorie";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Icon from './components/Icon';
import { useApiGet } from './domains/user/services/api';
import type { DescriptionType } from './components/Categorie';
//import SvgIcon from '@mui/material/SvgIcon';
import LogoCultura from './assets/logo-culturalog.svg';
//import { ReactComponent as LogoCultura } from './assets/logo-culturalog.svg';

const queryClient = new QueryClient();

function App() {
  const {t} =  useTranslation();
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
        <h4>{t("common:culturaLog")}</h4>
        <div className="div_logo_cultura">
          <img src={LogoCultura} alt="Logo Cultura" width={160} height={30} />
          {/*<LogoCultura width={160} height={80} />*/}
          <div className="toto"><Icon name={"setting"} size={15} style={{color:"white",paddingRight:"5px"}} />{t("common:parametrages")}</div>
          <div><Icon name={"map"} size={15} style={{color:"white"}} /></div>
        </div>
        <h1>{t("common:titre")}</h1>
        <div className="conteneur_categorie">
          <Categorie titre={t("common:receptions")} isWarning={warningReception} loading={loading} error={error} icon={<Icon name="delivery" size={40} />} description={descriptionReception} />
          <Categorie titre={t("common:sensibles")} isWarning={warningSensible} loading={loading} error={error} icon={<Icon name="package-locked" size={40} />} description={descriptionSensible} />
          <Categorie titre={t("common:trieEtiquetage")} isWarning={false} loading={false} error={null} icon={<Icon name="label" size={40} />} description={[]} />
          <Categorie titre={t("common:prisme")} isWarning={false} loading={false} error={null} icon={<Icon name="scanner" size={40} />} description={[]} />
        </div>
        <LoginForm />
      </I18nextProvider>
    </QueryClientProvider>
  )
}
export default App