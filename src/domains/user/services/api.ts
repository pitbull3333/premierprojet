import {useState,useEffect} from "react";
import axios, { AxiosError } from "axios";
import i18n from "../../../core/translation";
type UseDataType = {
  id: number;
  sousTitreKey: string;
  valeur: number;
};
export function useApiGet(){
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState<UseDataType[]>([]);
  const [error,setError] = useState<any>(null);
  useEffect(() => {
    axios
    .get("http://127.0.0.1:800/log",{ timeout:5000 })
    .then((res) => setData(res.data))
    .catch((err) => handleError(err,setError))
    //.catch((err) => console.log(err))
    .finally(() => setLoading(false))
  },[]);
  return {loading,data,error};
}
const handleError = (error:AxiosError,setError:(message:string) => void) => {
  let message;
  const code = error.code;
  switch(code){
    case "ERR_NETWORK":
      message = i18n.t("common:errNetwork");
    break;
    default:
      message = i18n.t("common:errDefault");
  }
  setError(message);
}