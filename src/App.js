import { useState } from 'react'

const App= ()=>{
//Componente controlado:se le ha de pasar el valor que va mostrar
const [value, setValue] = useState ({normal: 'valor inicial normal',texto: 'valor inicial de texto', select: 'chanchofelix', check: false, estado: ''})
const handleChange=({target})=>{
    setValue((state)=> ({
        ...state, 
        [target.name]: target.type ==='checkbox'
         ? target.checked 
         : target.value 
    }))
}
   console.log(value)
    return(
        <div>
            {value.length <=5 ? <span> Longitud mínima 5 caracteres</span> : null}
            <p> Prueba formulario controlado </p>
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            <hr/>
            <textarea name='texto' onChange={handleChange} value={value.texto} />
            <hr/>
            <select value ={value.select} name="select" onChange={handleChange}>
               <option value='Seleccione'>--Seleccione</option>
                <option value='Chanchazofelix'>Chanchazofelix</option>
                <option value='Chanchofelix'>Chanchofelix</option>
                <option value='Chanchitofelix'>Chanchitofelix</option>
                <option value='Chanchitotriste'>Chanchitotriste</option>
            </select>
            <hr/>
            <input type ="checkbox"
            name="check"
            onChange={handleChange}
            checked={value.check}
            />
            <hr/>
            <div> 

                <label> Chancho</label>
                <input   onChange={handleChange} type="radio" value="feliz" name="estado" checked={value.estado ==='feliz' }/>Feliz
                <input   onChange={handleChange}  type="radio" value="triste" name="estado" checked={value.estado ==='triste'}  />Triste
                <input    onChange={handleChange} type="radio" value="asustado"  name="estado" checked={value.estado ==='asustado'} />Asustado

            </div>
        </div>

    )
}

export default App
