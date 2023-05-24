"use client"
import { useState } from "react"

const Page = () => {
  const [nombre, setNombre] = useState('Daniela  Guadalupe Hernandez Guzman');
  const [contador, SetContador] = useState(0);
  const [edad, setEdad] = useState(0); 
  const [mensaje, setMensaje] = useState('');

function contar(){
  SetContador(contador + 1)//Va contar el numero de clics
}

function limpiar(){
  SetContador(0)
}

const manejadorFormulario = (e:any) => {
  e.preventDefault();
console.log('Se hizo clic')

if (edad >= 18) {
 setMensaje('Es mayor de edad');
} else {
  setMensaje('Es menor de edad');
}

}

  return (
    <div> 
   <h1>Proyecto Final</h1>
     <h2>Estructura de datos</h2>
     <h3>{nombre}</h3>
     <button
     onClick={contar}>
      Contar
     </button>
     <p>{contador} numero de clics</p>
          <form
          onSubmit={manejadorFormulario}
          >
      <input 
        type="text" 
        placeholder = "Nombre"
        value = {nombre}
        onChange={(event)=> setNombre(event.target.value)}
        />
      <input type="submit" />

      <input 
        type="number" 
        placeholder = "Edad"
        value = {edad}
        onChange={(event)=> setEdad(parseInt(event.target.value))}
        />

      <input type="submit" />
          </form>
    
     <button
     onClick={limpiar}>
      Borrar
     </button>
     {mensaje}
    </div>
    )
  }

export default Page