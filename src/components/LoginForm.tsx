import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

//type LoginFormType = {
type LoginFormProps = {
  onAdd?: () => void; // tu peux ignorer si inutilisé
};

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = ({ onAdd }: LoginFormProps) => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        console.log("Form data:",data);
        if (onAdd) onAdd();
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("email")} id="outlined-basic" label="name" variant="outlined" size="small" sx={{marginTop:"10px",marginLeft:"10px"}} />
            <Button variant="contained" type="submit" sx={{marginTop:"10px",marginLeft:"10px"}}>valider</Button>
        </Box>
    );
}
export default LoginForm;