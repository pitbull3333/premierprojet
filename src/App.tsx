import './App.css';
import { useTranslation,I18nextProvider } from 'react-i18next'
import i18n from "./core/translation"
import Categorie from "./components/Categorie";
//import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import { red } from '@mui/material/colors';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import Icon from './components/Icon';

const queryClient = new QueryClient();

const descriptionReception = [
  {id:0,sousTitre:"T",valeur:1},
  {id:1,sousTitre:"I",valeur:2},
  {id:2,sousTitre:"D",valeur:3},
];

const descriptionSensible = [
  {id:0,sousTitre:"A",valeur:0},
];

function App() {
  const {t} =  useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <div className="div_logo_cultura"></div>
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