import { WorkItem, WorkType } from "@/contracts/IWork";

const memoryDb:WorkItem[]=[];
export const Work :WorkType={
     addWork(item){
        memoryDb.push(item)
        item.id=memoryDb.length-1
        return item
     },
     removeWork({ id}){
        memoryDb.splice(id,1)
        return true
     },
     updateWork(item){
        memoryDb[item.id]={...item}
        return true
     },
     getWorkList(){
       return memoryDb.slice(0)
     },
     getWorkById(id){
      return {...memoryDb[id]}
     }
}