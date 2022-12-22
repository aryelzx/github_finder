import { UserProps } from '../types/user' 

import User from '../components/User'
import Search from '../components/Search'
import Error from '../components/Error'

import { useState } from 'react'

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null) //estado inicial do usuário. Pode ser nulo ou um objeto do tipo UserProps.
  
  const [error, setError] = useState(false) //estado inicial do erro. Pode ser falso ou verdadeiro.
  
  const loadUser = async(userName: string) => { //função para carregar o usuário.
    setError(false) //seta o estado do erro como falso.
    setUser(null) //seta o estado do usuário como nulo.
    const res = await fetch(`https://api.github.com/users/${userName}`) //fazendo a requisição para a api do github.
    const data = await res.json(); //transformando a resposta em json.
    
    if(res.status === 404){
      setError(true) //se o usuário não existir, seta o estado do erro como true.
      return;
    }

    const {avatar_url, login, location, followers, following, public_repos} = data; //pegando os dados que serão usados.
    
    const userData: UserProps = { //criando um objeto com os dados que serão usados.
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
  }
  setUser(userData)//setando o estado do usuário com o objeto criado.
};
    return (
    <div>
      <Search loadUser={loadUser}/> {/*passando a função para o componente Search.*/}
      {user && <User {...user}/>} {/*se o usuário existir, renderiza o componente User passando as props do usuário.*/}
      {error && <Error/>} {/*se o erro existir, renderiza o componente Error.*/}
    </div>
  )
}
