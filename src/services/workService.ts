import { DatabaseType } from "@/contracts/IDb";
import { WorkDbNames, WorkItem, WorkType } from "@/contracts/IWork";
import IWorkService from "@/contracts/IWorkService";
import { Work } from "@/models/Work";

export default class WorkService implements IWorkService< WorkDbNames,WorkItem>{
    private static _db:WorkType | null
    constructor(){
        if(WorkService._db===null){
            WorkService._db=Work;
        }
        this.db=WorkService._db;
    }
    db: DatabaseType<WorkDbNames, WorkItem> | null;
    
    connect(connectionstring: string) {
        return true
    };  
    

}