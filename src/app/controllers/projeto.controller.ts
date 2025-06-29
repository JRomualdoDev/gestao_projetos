
import { listarTodosProjetos } from "../services/projetoService.ts"

export async function listarProjetos(request: any, reply: any) {
    const projetos = await listarTodosProjetos()
    return reply.send(projetos)
}