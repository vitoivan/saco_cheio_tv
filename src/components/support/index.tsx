import React from 'react'
import { Container } from './containerStyle';
import { Link } from 'react-router-dom';

export const SupportComponent = () => {
  return (
    <Container>
      <h2>Apoie o Saco Cheio TV</h2>

      <div className="container">
        <p>
          Processos, delegacia, problemas, advogados, brigas, exclusão social e reputação queimada. Chegou a hora de fechar as portas do esgoto e cobrar entrada VIP. Você sente que todos parecem ter as respostas pra os problemas do Brasil e do mundo, mas você não faz a menor ideia de como resolver nada? Está de saco cheio de ver YouTubers, comediantes e pessoas do entretenimento cagando regra sobre como tudo deve ser? Você se sente extremamente burro e perdido? Você procura um conteúdo cru, orgulhosamente ignorante e sem nenhum compromisso com a verdade? Então assine o SacoCheioTV e nos ajude a criar o maior esgoto da comunicação brasileira.
        </p>
        <Link to="/support">
          <img src={"https://www.sacocheio.tv/static/media/acessoCompleto.3ff37e6f.jpg"} alt="Support us" />
        </Link>
      </div>
    </Container>
  )
}
