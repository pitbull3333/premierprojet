import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import './categorie.css';
import Icon from "./Icon";
import Loading from "./CircularProgress";

type CategorieType = {
  isWarning:boolean,
  titre:string,
  icon:ReactNode,
  description:Array<DescriptionType>,
  loading:boolean,
  error: string,
};
export type DescriptionType ={
 id:number,
 sousTitre:string,
 valeur:number,
}

//export function Categorie(data:CategorieProps){
const Categorie = (data:CategorieType) => {
  const {isWarning,titre,icon,description,loading,error} = data;
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
          {loading && <Loading size={30} sx={{ p: 0.3 }} />}
          {error && <div className="message_error">{error}</div>}
          <div>{!loading && !error && description.map((item) => (
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
export default Categorie;