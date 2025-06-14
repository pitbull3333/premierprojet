import './App.css';
import { useTranslation,I18nextProvider } from 'react-i18next'
import i18n from "./core/translation"
import LoginForm from "./components/LoginForm";
import Categorie from "./components/Categorie";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Icon from './components/Icon';
import { useApiGet } from './domains/user/services/api';

const queryClient = new QueryClient();

function App() {
  const {t} =  useTranslation();
  //const descriptionReception = [
    //{id:0,sousTitre:t("common:transfert"),valeur:1},
    //{id:1,sousTitre:t("common:interMag"),valeur:2},
    //{id:2,sousTitre:t("common:directCours"),valeur:3},
  //];
  const { data: receptionData = [] } = useApiGet({ url:"http://127.0.0.1:800/dev" });
  const descriptionReception = receptionData.map((item: any) => ({
    ...item,
    sousTitre: t(item.sousTitreKey),
  }));
  const descriptionSensible = [
  {id:0,sousTitre:t("common:verifier"),valeur:0},
  ];
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <div className="div_logo_cultura">
          <LoginForm />
        </div>
        <h1>{t("common:titre")}</h1>
        <div className="conteneur_categorie">
          <Categorie titre={t("common:receptions")} isWarning={true} icon={<Icon name="delivery" size={40} />} description={descriptionReception} />
          <Categorie titre={t("common:sensibles")} isWarning={false} icon={<Icon name="package-locked" size={40} />} description={descriptionSensible} />
        </div>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App