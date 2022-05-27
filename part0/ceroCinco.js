// title Single Page Application (SPA)

// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/SPA
// Servidor-->Navegador:Responde con el documento HTML

// Navegador->Servidor:Realiza la peticion a HTTP GET https://studies.cs.helsinki.fi/exampleapp/SPA/data.json
// Servidor-->Navegador: [{ Responde data.JSON}, ...]

// note over Navegador:
// El navegador mostrara todos los datos JSON en la pagina principal
// end note

// note over Navegador:
// Los archivos son cargados de forma inicial igual que las paginas antiguas,
// solo que al realizar cargas de nuevas notas solo solicitara al servidor 
// esa informacion y no se recargara toda la pagina, podriamos decir que
// se actualizara en tiempo real a medida que el usuario realiza peticiones
// o navega por el sitio.
// end note
