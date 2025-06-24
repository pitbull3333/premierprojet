import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next'

type FormValuesType = {
  email:string,
  //password:string;
};
type Props = {
  onEmailSubmit: (email: string) => void;
};

const LoginForm = ({ onEmailSubmit }: Props) => {
    const {t} =  useTranslation();
    const { register, handleSubmit } = useForm<FormValuesType>();
    const onSubmit = (data:FormValuesType) => {
      onEmailSubmit(data.email);
    };
    return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("email")} id="outlined-basic" label={t("common:email")} variant="outlined" size="small" />
        <Button variant="contained" type="submit" sx={{marginLeft:"10px"}}>valider</Button>
      </Box>
    );
}
export default LoginForm;