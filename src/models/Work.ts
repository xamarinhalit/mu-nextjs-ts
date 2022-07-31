import { WorkType } from "@/contracts/IWork";

export const Work :WorkType={
     addWork({
         age,firstName,id, lastName
     }){
        return {
            age,firstName,id, lastName
        };
     },
     removeWork({ id}){
        return true;
     },
     updateWork({age,firstName,id,lastName}){
        return true;
     },
}