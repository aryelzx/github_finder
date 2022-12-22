import { Outlet } from 'react-router-dom';
/* Outlet = deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho.
 Isso permite que a interface do usuário aninhada apareça quando as rotas filhas são renderizadas.
Se a rota pai corresponder exatamente, ela renderizará uma rota de índice filho ou nada se não houver nenhuma rota de índice. */
import classes from './App.module.css';
// acessa o css atraves de classes criadas no module.css
function App() {

  return (
    <div className={classes.app}>
     <h1>GitHub Finder</h1>
     <Outlet /> {/* renderiza o componente da pagina Home. */}
    </div>
  );
}

export default App;
