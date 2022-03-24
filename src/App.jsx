import { useState } from "react";


function App() {
  //TODOS: PRESENTAR EL CONCEPTO DE STATE

  //hooks
  const [tituloState, settituloState]= useState("");
  const [fechaState, setfechaState]= useState("");
  const [notaState, setnotaState]= useState("");

  const handleChangeTitulo = (event) => { 
    settituloState(event.target.value);
   }
   const handleChangeFecha = (event) => { 
    setfechaState(event.target.value);
   }
   const handleChangeNota = (event) => { 
    setnotaState(event.target.value);
   }

  return (
    <div  className="App" >
  
     <h3>Notas</h3>
     <label htmlFor="Titulo"> Titulo</label>
     <input
     id="Titulo"
     name="Titulo"
     type="text"
     value={tituloState}
     onChange={handleChangeTitulo}/>
     <label htmlFor="Fecha"> Fecha</label>
     <input
     id="Fecha"
     name="Fecha"
     type="text"
     value={fechaState}
     onChange={handleChangeFecha}/>
     <label htmlFor="Nota"> Nota</label>
     <input
     id="Nota"
     name="Nota"
     type="text"
     value={notaState}
     onChange={handleChangeNota}/>
    </div>
  );
}

export default App;
