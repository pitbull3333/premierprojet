import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";

export function useGetUsers(){
    return useQuery({queryKey:["users"],queryFn:fetchUsers});
}