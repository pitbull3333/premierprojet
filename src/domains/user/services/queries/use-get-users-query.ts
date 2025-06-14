import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../apiSup";

export function useGetUsers(){
    return useQuery({queryKey:["users"],queryFn:fetchUsers});
}