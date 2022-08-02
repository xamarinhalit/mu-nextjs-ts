import { DatabaseType } from "./IDb";

export type WorkItem = {
    id: number
    lastName: string
    firstName: string | null
    age: number | null
};
export type WorkDbNames ={
    work:string,
}
export type WorkType= DatabaseType<WorkDbNames,WorkItem>