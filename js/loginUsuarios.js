const usuarios = [
    { username: 'administrador1@duocuc.cl', password: 'admin', role: 'admin' },
    { username: 'josa.morales@duocuc.cl', password: '123456', role: 'alumno' },
    // Otros usuarios...
];

// Obtener el formulario de inicio de sesión y el contenedor de mensajes de error
const loginForm = document.getElementById('login-form');
const errorContainer = document.getElementById('login-error');

// Escuchar el evento de envío del formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de usuario y contraseña ingresados
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Buscar el usuario en la estructura de datos
    const usuario = usuarios.find((user) => user.username === username && user.password === password);

    if (usuario) {
        // Inicio de sesión exitoso
        errorContainer.textContent = ''; // Limpiar el mensaje de error

        // Guardar el rol del usuario en el almacenamiento local (local storage)
        localStorage.setItem('role', usuario.role);

        // Redireccionar a la página correspondiente según el rol del usuario
        if (usuario.role === 'admin') {
            window.location.href = 'inicio.html'; // Redireccionar al panel del administrador
        } else {
            window.location.href = 'inicio.html'; // Redireccionar a la página del alumno
        }
    } else {
        // Inicio de sesión fallido
        errorContainer.textContent = 'Credenciales inválidas'; // Mostrar mensaje de error
    }
});

// Verificar el rol del usuario almacenado en el almacenamiento local
const userRole = localStorage.getItem('role');

// Verificar si el usuario es un administrador
// if (userRole === 'admin') {
//     // Mostrar contenido exclusivo para el administrador
//     // Por ejemplo, los elementos de administración de hechizos, cursos, etc.
// } else if (userRole === 'alumno') {
//     // Mostrar contenido exclusivo para el alumno
//     // Por ejemplo, los elementos de hechizos, cursos del alumno, etc.
// } else {
//     // El usuario no ha iniciado sesión o no tiene un rol válido
//     // Redireccionar al formulario de inicio de sesión u otra página adecuada
//     window.location.href = 'login.html';
// }