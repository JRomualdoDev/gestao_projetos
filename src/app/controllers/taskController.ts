import { listTaskProjectIdSchema } from "../schemas/schemaTask.ts"
import { deleteOneTask, listAllTasks, listTaskProjectId, newTask, updateOneTask } from "../services/taskService.ts"



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

export async function updateTask(request: any, reply: any) {
    const update_task = await updateOneTask(request, reply)
    return update_task
}

export async function deleteTask(request: any, reply: any) {
    const delete_task = await deleteOneTask(request, reply)
    return delete_task
}