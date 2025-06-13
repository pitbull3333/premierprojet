import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next'

type FormValuesType = {
  email:string,
  //password: string;
};

const onSubmit = (data:FormValuesType) => {
  console.log("Form data:",data.email);
};

const LoginForm = () => {
    const { register, handleSubmit } = useForm<FormValuesType>();
    const {t} =  useTranslation();
    return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("email")} id="outlined-basic" label={t("common:email")} variant="outlined" size="small" sx={{marginTop:"10px",marginLeft:"10px"}} />
        <Button variant="contained" type="submit" sx={{marginTop:"10px",marginLeft:"10px"}}>valider</Button>
      </Box>
    );
}
export default LoginForm;