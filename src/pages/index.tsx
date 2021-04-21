// SPA - Carregados somente no momento que usuário acessar a aplicação
// SSR - Quando o conteúdo é exibido, os dados ja estão disponíveis. A requisição é feita na camada do Next
// SSG - Gera uma versão estática da página e é servido para todos os usuários que acessarem a página depois da primeira 

export default function Home(props) {
  console.log(props.episodes)
  return (
  <h1>oi</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
