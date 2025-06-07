import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import './categorie.css';
import Icon from "./Icon";
import { useGetUsers } from '../domains/user/services/queries/use-get-users-query';

type CategorieProps = {
  isWarning:boolean,
  titre:string,
  icon:ReactNode,
  description:Array<DescriptionType>,
};
type DescriptionType ={
 id:number,
 sousTitre:string,
 valeur:number,
}

//export function Categorie(data:CategorieProps){
const Categorie = (data:CategorieProps) => {
  const {t} = useTranslation();
  const {isWarning,titre,icon,description} = data;
  //const {data:users,error,isFetching} = useGetUsers();
  return (
    <Paper elevation={10} sx={{width:"150px",height:"150px",backgroundColor:"white"}}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"50%",position:"relative",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",backgroundColor:isWarning ? "#ffe0b2":"lightblue"}}>
        {icon}
        {isWarning && (<Icon name={"warning-filled"} style={{ position:"absolute",left:"50%",bottom:0,transform:"translate(-50%,50%)",color:"#e38700",borderRadius:"50%",border:"3px solid white" }} />)}
      </Box>
      <div className="sousCategorieBas">
        <h2>{titre}</h2>
        <h3>
          <div>{description.map((item) => (
            <p key={item.id}>
              {item.sousTitre} : {item.valeur}
            </p>))}
          </div>
        </h3>
        {/*<div>{users?.map((user:any) => {return <p key={user.name}>{user.name}</p>})}</div>*/}
      </div>
    </Paper>
  );
}
export default Categorie