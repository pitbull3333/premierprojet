import {useState,useEffect} from "react";
import axios, { AxiosError } from "axios";
type UseTestGetType = {
  url:string,
};
type UseData = {
  id: number;
  sousTitreKey: string;
  valeur: number;
};
export function useApiGet({url}:UseTestGetType){
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState<UseData[]>([]);
  const [error,setError] = useState<any>(null);
  useEffect(() => {
    axios
    .get(url)
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
      message = "clé de traduction";
    break;
    default:
      message = "Erreur serveur"
  }
  setError(message);
}