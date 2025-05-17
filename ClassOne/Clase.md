# ¿Qué es una Variable?

Una **variable** es un espacio de almacenamiento en memoria que se utiliza para guardar un valor que puede cambiar durante la ejecución de un programa. Se le asigna un **nombre identificador** para poder referirse a ella y manipular su contenido.

## Definición       

> Una variable es un contenedor que almacena datos que pueden ser modificados durante la ejecución de un programa. Cada variable tiene un nombre, un tipo de dato y un valor.

## Características de una variable

- Tiene un **nombre** único dentro del ámbito donde se declara.
- Puede almacenar **valores de distintos tipos**, como números, texto, booleanos, etc.
- Su contenido puede **cambiar** a lo largo del programa.

---

## Ejemplos de Variables

### En javascript
```javascript
// Declaración con let (recomendado para variables que cambian)
let nombre = "Ana";
let edad = 30;
let activo = false;

// Declaración con const (cuando el valor no debe cambiar)
const PI = 3.1416;
const pais = "Colombia";

// Declaración con var (no recomendada, solo para casos muy específicos)
var ciudad = "Bogotá";
```
# Condicionales en JavaScript

Las **condicionales** permiten ejecutar diferentes bloques de código según si una condición es verdadera (`true`) o falsa (`false`).

---

## Estructuras Condicionales Básicas

### 1. `if`

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```
### 2. `if...else`

```javascript
let esEstudiante = false;

if (esEstudiante) {
  console.log("Tiene descuento de estudiante");
} else {
  console.log("Precio normal");
}

```
### 3. `if...else if...else`

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

```

# Operadores Relacionales (usados en condiciones)

Los **operadores relacionales** se utilizan para comparar dos valores. El resultado de la comparación siempre es un valor booleano: `true` o `false`.

| Operador | Significado         |
|----------|----------------------|
| `==`     | Igual a              |
| `!=`     | Distinto de          |
| `>`      | Mayor que            |
| `<`      | Menor que            |
| `>=`     | Mayor o igual        |
| `<=`     | Menor o igual        |
| `===`    | Igual estricto       |
| `!==`    | Distinto estricto    |

---

## Notas

- `==` compara valores, pero **no** tipos.  
  ```javascript
  "5" == 5 // true

# Ciclo `while` en JavaScript

El ciclo `while` permite ejecutar un bloque de código **mientras** se cumpla una condición. Es útil cuando no se sabe con certeza cuántas veces se debe repetir una acción.

---

## Sintaxis

```javascript
while (condición) {
  // código a ejecutar mientras la condición sea verdadera
}
```
### Ciclo `For` en Javascript 

El ciclo `for`

