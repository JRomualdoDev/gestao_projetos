import { listTaskProjectIdSchema } from "../schemas/schemaTask.ts"
import { listAllTasks, listTaskProjectId, newTask } from "../services/taskService.ts"



export async function listTasks(request: any, reply: any) {
    const listTasks = await listAllTasks()
    return listTasks
}

export async function createTask(request: any, reply: any) {
    const createTask = await newTask(request, reply)
    return createTask
}

export async function listTaskProject_id(request: any, reply: any) {
    const listTaskProject_id = await listTaskProjectId(request, reply)
    return listTaskProject_id
}