// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/notes
// Servidor-->Navegador:Responde con el codigo HTML
// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/main.css
// Servidor-->Navegador:Responde con el main.css
// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/main.js
// Servidor-->Navegador:Responde con el main.js

// note over Navegador:
// El navegador solicitara el codigo JS dependiendo la ubicacion del SCRIPT
// en el documento HTML, si se encuentra en el HEAD 
// se solicitara antes de cargar el BODY, Si el SCRIPT se encuentra al final del BODY
// Se solicitara luego de la carga del la pagina
// end note

// Navegador->Servidor:Realiza la peticion a HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
// Servidor-->Navegador: [{ Responde con el codigo JSON}, ...]

// note over Navegador:
// El navegador mostrara todos los datos JSON en la pagina principal
// end note

// note over Navegador:
// El formulario esta cargado listo para ser usado por el usuario
// end note

// Usuario->Navegador: El usuario interactual con el formulario enviando datos al servidor

// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/notes
// Servidor-->Navegador:Responde con el codigo HTML
// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/main.css
// Servidor-->Navegador:Responde con el main.css
// Navegador->Servidor:Realiza una peticion a https://studies.cs.helsinki.fi/exampleapp/main.js
// Servidor-->Navegador:Responde con el main.js
// Navegador->Servidor:Realiza la peticion a HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
// Servidor-->Navegador: [{ Responde con el codigo JSON actualizado con la nueva informacion}, ...]

// note over Navegador:
// El navegador mostrara todos los datos JSON actualizados
// end note

// note over Navegador:
// Como es una pagina que utiliza AJAX ya obsoleto,
// se repite el mismo ciclo inicial una y otra vez de la misma manera,
// Ya que no es una pagina SPA
// end note

