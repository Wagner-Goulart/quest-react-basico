import './App.css';
import Paragrafo from './compponents/paragrafo/paragrafo';
import Button from './compponents/button/button'

function App() {
  return (
   <>
    <Paragrafo text = "quest react basico" color={'blue'}/>
    <Button label='Baixe aqui' />
   </>
  );
}

export default App;
