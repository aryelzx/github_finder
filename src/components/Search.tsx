type SearchProps = {
  loadUser: (userName: string) => Promise<void> //função que recebe uma string e retorna uma promise vazia. 
};
import {BsSearch} from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react' //useState = hook que permite criar estados. KeyboardEvent = evento de teclado.

import classes from './Search.module.css'

export default function Search({loadUser}: SearchProps) { //função que recebe um objeto do tipo SearchProps.
  const [userName, setUserName] = useState('') //estado inicial do usuário.
  
  const handleKeyDown = (e: KeyboardEvent) =>{
    if(e.key === "Enter") { //se o usuário apertar enter, a função loadUser é chamada passando o valor do estado userName.
      loadUser(userName) //chama a função loadUser passando o valor do estado userName.
    }
  }
  return (
    <div className={classes.search}>
      <h2>Search for a user: </h2>
      <p>know your best repositories</p>
      <div className={classes.search_container}>
         {/*quando o usuário digitar algo no input, o estado userName recebe o valor digitado.*/}
        <input type="text" placeholder="Username..."
         onChange={(e) => setUserName(e.target.value)} 
        onKeyDown={handleKeyDown}/> {/*quando o usuário apertar enter, a função .*/ }
        <button onClick={() => loadUser(userName)}> {/*quando o usuário clicar no botão, a função loadUser é chamada passando o valor do estado userName.*/}
          <BsSearch/>
        </button>
      </div>
    </div>
  );
};
