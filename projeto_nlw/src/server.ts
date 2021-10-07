import { http } from "./http"
import "./websocket/client"
import "./websocket/admin"


http.listen(3333, () => console.log("Server is running on port 3333"))

/**
 * GET = Buscas
 *  POST = Criação
 *  PUT = Alteração
 *  Delete = Deletar
 *  PATCH = Alterar uma informação específica
 */



