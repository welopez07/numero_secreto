# Juego del Número Secreto

Este es un juego interactivo creado con HTML, CSS y JavaScript en el que el jugador debe adivinar un número secreto entre 1 y 10. El jugador introduce un número y recibe pistas sobre si el número secreto es mayor o menor hasta que adivine correctamente.

## Descripción

El juego genera un número secreto al azar entre 1 y 10. El jugador debe intentar adivinar el número introduciendo su suposición en un campo de texto y haciendo clic en el botón "Intentar". Si el número introducido es incorrecto, el juego da una pista ("El número secreto es menor" o "El número secreto es mayor") y permite intentar de nuevo hasta adivinar el número secreto. Al acertar, el juego muestra la cantidad de intentos realizados y permite reiniciar el juego.

## Tecnologías Utilizadas

- **HTML**: Para estructurar la interfaz del juego.
- **CSS**: Para dar estilo y hacer que el juego sea visualmente atractivo.
- **JavaScript**: Para gestionar la lógica del juego, generar el número secreto, y manejar la interacción con el usuario.

## Instrucciones para Jugar

1. Al abrir el juego, se muestra una instrucción para adivinar un número del 1 al 10.
2. Ingresa un número en el campo de texto y presiona el botón "Intentar".
3. Si el número es incorrecto, aparecerá una pista indicando si el número secreto es mayor o menor.
4. Sigue intentando hasta que aciertes el número secreto. El juego mostrará el número de intentos realizados.
5. Una vez que aciertes, puedes hacer clic en "Nuevo juego" para reiniciar.

## Archivos del Proyecto

- **index.html**: Contiene la estructura principal de la interfaz del juego.
- **style.css**: Define el estilo y la apariencia del juego.
- **app.js**: Contiene la lógica del juego, incluida la generación del número secreto, la verificación de intentos y el reinicio del juego.

## Estructura del Código

### HTML

El archivo `index.html` contiene:
- Un campo de entrada para el número.
- Dos botones: "Intentar" y "Nuevo juego".
- Un contenedor para mostrar mensajes y pistas.

### CSS

El archivo `style.css` da formato a los elementos de la interfaz y aplica un fondo gradiente. También contiene estilos para el campo de entrada y los botones para que tengan una apariencia moderna.

### JavaScript

El archivo `app.js` controla la lógica del juego:
- **Funciones principales**:
  - `verificarIntento()`: Verifica si el número ingresado coincide con el número secreto.
  - `generarNumeroSecreto()`: Genera un número aleatorio entre 1 y 10 que será el número secreto.
  - `reiniciarJuego()`: Reinicia el juego a sus condiciones iniciales.
  - `asignarTextoElemento()`: Asigna texto a elementos HTML específicos.
  - `condicionesIniciales()`: Configura las condiciones al inicio o al reiniciar el juego.

## Ejecución

Para ejecutar el juego:
1. Abre el archivo `index.html` en tu navegador.
2. Comienza a jugar siguiendo las instrucciones en pantalla.


## Notas adicionales

Este proyecto fue realizado como práctica de JavaScript y se puede expandir para aceptar diferentes rangos de números, agregar niveles de dificultad, o incorporar mejoras visuales y animaciones.
