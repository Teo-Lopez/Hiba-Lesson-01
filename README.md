# Repaso de hooks

## Hooks mas comunes por orden de importancia:

useState -> gestiona el estado de un componente
useEffect -> gestiona las acciones que se disparan en respuesta a algun cambio
useContext -> gestiona informacion disponible desde cualquier componente

---

useCallback -> memoriza una funcion
useMemo -> memoriza un valor
useRef -> crea una referencia inmutable entre renderizados

## UseStateExample.js

Muestra un minicaso de uso del useState cambiando el color de un texto.
También tiene un botón que cambia el color a mano cuando es clickado

## UseEffectExample.js

Muestra varios casos de uso del useEffect y su array de dependencias.
Recuerda que useEffect ejecuta la función que le pasas cuando detecta un cambio en cualquier valor de su array de dependencias.

## context/UserContext.js

- Archivo dónde creamos el contexto para el usuario, el nombre lo hemos decidido nosotros, es irrelevante.
- En App.js encontrarás el primer uso del Contexto, usamos Context.Provider para envolver la aplicación y comunicarle el valor del contexto. En este caso el objeto de usuario {name, gender}
- En UserProfile.js encontrarás un ejemplo de como sacar información del contexto. Llamamos a useContext y le pasamos el contexto del que queramos obtener la información.

### Ciclo de vida de un componente

![](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

### Links

[Referencia de hooks](https://reactjs.org/docs/hooks-reference.html#usecontext)
[Create context](https://reactjs.org/docs/context.html#reactcreatecontext)
