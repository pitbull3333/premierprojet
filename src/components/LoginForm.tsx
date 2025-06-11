import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

type LoginFormType = {
    data:string;
}

const LoginForm = (data:LoginFormType) => {
    return (
        <>
            <TextField id="outlined-basic" label="name" variant="outlined" size="small" sx={{marginTop:"10px",marginLeft:"10px"}} />
            <Button variant="contained" sx={{marginTop:"10px",marginLeft:"10px"}}>valider</Button>
        </>
    );
}
export default LoginForm;