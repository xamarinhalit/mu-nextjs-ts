import { WorkDbNames, WorkItem, WorkType } from "@/contracts/IWork";
import IWorkService from "@/contracts/IWorkService";
import { Work } from "@/models/Work";

class WorkInstanceService implements IWorkService<WorkDbNames, WorkItem> {
  public static get instance() {
    if (WorkInstanceService._instance===null) {
      WorkInstanceService._instance = new WorkInstanceService();
    }
    return WorkInstanceService._instance;
  }
  private static _instance: WorkInstanceService | null =null;
  private static readonly db: WorkType = Work;

  connect(connectionstring: string) {
    return true;
  }
  addWork(item: WorkItem) {
    return WorkInstanceService.db.addWork(item);
  }
  updateWork(item: WorkItem) {
    return WorkInstanceService.db.updateWork(item);
  }
  removeWork(item: WorkItem) {
    return WorkInstanceService.db.removeWork(item);
  }
  getList(){
    return WorkInstanceService.db.getWorkList()
  }
  getById(id:number){
    return WorkInstanceService.db.getWorkById(id)
  }
}
export const WorkService = WorkInstanceService.instance;
