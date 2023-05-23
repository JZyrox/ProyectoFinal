"use client"
import { useState } from "react"

const Page = () => {
  const [nombre, setNombre] = useState('Daniela  Guadalupe Hernandez Guzman');
  const [contador, SetContador] = useState(0); 

function contar(){
  SetContador(contador + 1)//Va contar el numero de clics
}

function limpiar(){
  SetContador(0)
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
     <button
     onClick={limpiar}>
      Borrar
     </button>
    </div>
    )
  }

export default Page