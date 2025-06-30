import { listAllTasks, newTask } from "../services/taskService.ts"



export async function listTasks(request: any, reply: any) {
    const tasks = await listAllTasks()
    return tasks
}

export async function createTask(request: any, reply: any) {
    const task = await newTask(request, reply)
    return task
}