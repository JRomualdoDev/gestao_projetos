import { db } from "../../config/database.ts";

export async function listarTodosProjetos() {

    const client = await db.connect()

    try {
        const result = await client.query('SELECT * FROM projects ORDER BY created_at DESC')
        console.log(result.rows)
        return result.rows
    } catch (error) {
        console.log(error)
    }
    finally {
        client.release()
    }
}
