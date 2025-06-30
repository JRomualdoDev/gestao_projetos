import { listAllProjects, newProject } from "../services/projectService.ts"


export async function listProjects(request: any, reply: any) {
    const projetos = await listAllProjects()
    return projetos
}

export async function createProject(request: any, reply: any) {
    const projeto = await newProject(request, reply)
    return projeto
}