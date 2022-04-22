import Role from "./models/roles"

export const createRoles = async () => {
    try {
        // Contar documentos
        const count = await Role.estimatedDocumentCount()

        // chequea si existe roles
        if (count > 0) return

        // Crear roles por defecto
        const values = await Promise.all([
            new Role ({name: "user"}).save(),
            new Role ({name: "admin"}).save(),
            new Role ({name: "moderator"}).save()
        ])
        console.log(values);
    } catch (error) {
        console.log(error)
    }
}
