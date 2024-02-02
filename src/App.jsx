import Contador from "./components/Contador";
import CardPokemon from "./components/CardPokemon";
import CardEstudantes from "./components/CardEstudantes";
import Botao from "./components/Botao";
import CaixaDeTexto from "./components/CaixaDeTexto";
import SobreMim from "./components/SobreMim";
import Rodape from "./components/Rodape";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import ListaCargos from "./components/ListaCargos";
import Formulario from "./components/Formulario";
import Header from "./components/Header";


function App() {
  return (<> <Header />
    <Formulario />
    <ListaCargos />
    <Contador />
    <CardPokemon />
    <Botao />
    <CaixaDeTexto />
    <CardEstudantes />
    <SobreMim />
    <Rodape/>
    <ListaDeEstudantes/>
    <ListaCargos/>
    
  </>)
}
export default App
