const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('grafico-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectados em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`

  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

visualizarinformacoesGlobais()