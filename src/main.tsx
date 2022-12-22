import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/* 
RouterProvider = Todos os objetos das rotas são passados para esse componente
para renderizar seu aplicativo e habilitar o restante das APIs.

CreateBwoserRouter = Este é o roteador recomendado para todos os projetos da Web
do React Router. Ele usa a API de histórico do DOM para atualizar a URL e gerenciar a pilha de histórico.
Ele também habilita as APIs de dados v6.4, como carregadores, ações, buscadores e muito mais.
*/
 //Pages
import Home from './routes/Home'
const router = createBrowserRouter([ //criando o router.
  {
    path: '/', //caminho da pagina principal.
    element: <App />, //componente principal da aplicação. o que vai ser renderizado em todas as paginas.
    children: [ //filhos do componente principal. todas as paginas.
      {
        path: '/', //caminho da pagina barra. componente interno.
        element: <Home />, //componente da pagina.
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/*passando o router para o componente principal.*/}
  </React.StrictMode>,
)
