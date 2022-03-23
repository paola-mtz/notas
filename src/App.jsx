


function App() {
  //TODOS: PRESENTAR EL CONCEPTO DE STATE
  let varprueba ="hola"
  const handleChangePrueba = (event) => { 
    varprueba=event.target.value
    
   }
  


  return (
    <div className="App" >
     <h3>Notas</h3>
     <label htmlFor="PruebaID"> Input de Prueba</label>
     <input
     id="PuebaID"
     name="Prueba"
     type="text"
     value={varprueba}
     onChange={handleChangePrueba}/>
    </div>
  );
}

export default App;
