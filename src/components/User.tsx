import { UserProps } from "../types/user"

import {MdLocationPin} from 'react-icons/md'

import classes from './User.module.css'

import {Link} from 'react-router-dom' //Link = componente para criar links para outras rotas.

export default function User({login, avatar_url, location, followers, following, public_repos}: UserProps) {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt="{login}" /> {/*renderiza a imagem do usuário.*/}
      <h2>{login}</h2> {/*renderiza o nome do usuário.*/}
      {location && ( //se o usuário tiver localização, renderiza o local.
        <p className={classes.location}>
        <MdLocationPin/>
        <span>{location}</span> 
      </p>
      )}
      <div className={classes.stats}>
       
          <div>
          <p>Followers</p> 
          <p className={classes.number}>{followers}</p>
          {/*renderiza a quantidade de seguidores do usuário.*/}
          </div>

          <div>
            <p>Following:</p> 
            <p className={classes.number}>{following}</p>
            {/*renderiza a quantidade de pessoas que o usuário segue.*/}
          </div>

          <div>
            <p>Repositories:</p> 
            <p className={classes.number}>{public_repos}</p>
            {/*renderiza a quantidade de repositórios do usuário.*/}
          </div>
      </div>
    </div>
  )
}
