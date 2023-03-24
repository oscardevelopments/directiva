import './App.css';
import Directiva from './componentes/Directiva';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Perfiles Directiva</h1>
        <Directiva
          nombre='Rebeca Lopez'
          pais='Colombia'
          imagen='rebeca'
          cargo='Desarrolladora de Software'
          empresa='Netflix'
          directiva='Es capaz de concebir y elaborar sistemas informáticos o paquetes de software, así como de implementarlos y ponerlos a punto, utilizando uno o varios lenguajes de programación.'
        />
        <Directiva
          nombre='Maria Perez'
          pais='Venezuela'
          imagen='maria'
          cargo='Desarrolladora de Software'
          empresa='Disney+'
          directiva='Es capaz de concebir y elaborar sistemas informáticos o paquetes de software, así como de implementarlos y ponerlos a punto, utilizando uno o varios lenguajes de programación.'
        />
        <Directiva
          nombre='Jose Gutierrez'
          pais='Mexico'
          imagen='jose'
          cargo='Desarrollador de Software'
          empresa='Amazon'
          directiva='Es capaz de concebir y elaborar sistemas informáticos o paquetes de software, así como de implementarlos y ponerlos a punto, utilizando uno o varios lenguajes de programación.'
        />
      </div>
    </div>
  );
}

export default App;
