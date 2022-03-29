import { useState } from "react";


function App() {
  //TODOS: PRESENTAR EL CONCEPTO DE STATE

  //hooks
  const [inputState, setinputState]= useState({
    Titulo:"",
    Fecha:"",
    Nota:""
  });
  

  const handleInputChange = (event) => { 
    setinputState({
      ...inputState,
      [event.target.name]:event.target.value,
    });
   }
   

  return (
    <div  className="App" >
  
     <h3>Notas</h3>
     <label htmlFor="Titulo"> Titulo</label>
     <input
     id="Titulo"
     name="Titulo"
     type="text"
     value={inputState.titulo}
     onChange={handleInputChange}/>


      <br />
      <br />

     <label htmlFor="Fecha"> Fecha</label>
     <input
     id="Fecha"
     name="Fecha"
     type="text"
     value={inputState.fecha}
     onChange={handleInputChange}/>

      <br />
     <br />

     <label htmlFor="Nota"> Nota</label>
     <input
     id="Nota"
     name="Nota"
     type="text"
     value={inputState.nota}
     onChange={handleInputChange}/>
    </div>
  );
}

export default App;
