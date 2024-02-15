# PRUEBA TECNICA

Requerimiento.
Desarrollar un sistema que permita a los promotores el seguimiento de sus prospectos a ser 
clientes, así como una pantalla para el departamento de evaluación de prospectos donde se pueda 
visualizar la información del prospecto, donde le permita la autorización o rechazo del mismo.
PANTALLA DE CAPTURA DE PROSPECTO.
En esta pantalla el promotor podrá capturar la información del prospecto, así como los 
documentos necesarios para su expediente.
Los campos con un * son obligatorios:
1. * Nombre del prospecto.
2. * Primer apellido:
3. Segundo apellido:
4. *Calle:
5. *Número:
6. *Colonia:
7. *Código Postal:
8. *Teléfono:
9. *RFC:
10. *Documentos: Aparecerá una opción (+), donde se puedan cargar N documentos con los 
campos: (Nombre documento y la opción donde se pueda cargar él documento).
11. Opción Enviar: Se terminará la captura del prospecto el mismo aparecerá en un listado de 
prospectos para revisar el estatus del mismo.
12. Estatus del prospecto: Los estatus del prospecto son (Enviado, Autorizado o Rechazado), 
Enviado: Cuando se termina la captura y se envía al área de evaluación de prospectos para 
su revisión, Autorizado: Cuando el área de evaluación de prospecto autoriza al prospecto. 
Rechazado: Cuando el área de evaluación de prospectos rechaza al prospecto.
13. Opción Salir: Saldrá de la pantalla de captura de prospectos ningún dato será guardado, se 
le avisará al usuario por medio de un mensaje de advertencia que si sale perderá toda la 
captura.
PANTALLA LISTADO DE PROSPECTOS
En esta pantalla el promotor podrá visualizar a sus prospectos capturados, la información a 
mostrar será: Nombre del prospecto, Primero apellido, Segundo apellido y Estatus.
El promotor podrá seleccionar a un prospecto y visualizar toda su información capturada, así como 
sus documentos sin poder modificar información, en caso que el prospecto esté con estatus 
Rechazado deberán aparecer las observaciones del rechazo.
PANTALLA EVALUACIÓN DEL PROSPECTO
En esta pantalla se podrá visualizar toda la información capturada del prospecto y la opción 
Autorizar o Rechazar para autorizar o rechazar al prospecto, así como un campo de observaciones 
de rechazo que será obligatorio.
Obligatorio
1. Utilizar conexión con alguna Base de datos para el guardado de la información.
2. Entrega de código fuente al terminar el ejercicio.
3. Se cuenta como máximo una semana para el desarrollo del ejercicio.
Deseables más no obligatorio.
1. Desarrollar el ejercicio por medio de una aplicación para dispositivos Android o en su defecto un 
sistema web.
2. Utilizar base de datos MySQL o Mongo.
3. Utilizar lenguaje de programación Java, Node.js, Spring Framework o TypeScript
4. Utilizar peticiones Rest.