export const criarProjetoSchema = {
    body: {
        type: 'object',
        required: ['name', 'description'],
        properties: {
            name: {
                type: 'string',
                minLength: 3,
                maxLength: 100,
                description: 'Nome do projeto'
            },
            description: {
                type: 'string',
                minLength: 10,
                maxLength: 500,
                description: 'Descrição do projeto'
            }
        },
        additionalProperties: false
    },
    response: {
        201: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                description: { type: 'string' },
                created_at: { type: 'string', format: 'date-time' }
            }
        },
        400: {
            type: 'object',
            properties: {
                statusCode: { type: 'integer' },
                error: { type: 'string' },
                message: { type: 'string' }
            }
        }
    }
}

export const listarProjetosSchema = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    description: { type: 'string' },
                    created_at: { type: 'string', format: 'date-time' }
                }
            }
        }
    }
}