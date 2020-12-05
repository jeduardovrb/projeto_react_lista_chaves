import React, { useState } from 'react';
import './App.css';
import AdicionarRegistro from './AdicionarRegistroNaLista'
import RegistroNaLista from './RegistrosNaLista'

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  function Adicionar(task) {
    const registro = Array.from(tarefas);
    // push - adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
    registro.push({id: tarefas.length, value: task});
    setTarefas(registro);
  }

  function Atualizar({target}, index) {
    const registro = Array.from(tarefas);
    // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    // array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
    // Se o parâmetro deleteCount não é especificado, ou se é maior que o número de elementos restantes na lista 
    // iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.
    registro.splice(index, 1, { id: index, value: target.value });
    setTarefas(registro);
  }

  function Excluir(index) {
    const registro = Array.from(tarefas);
    registro.splice(index, 1);
    setTarefas(registro);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h4 className="top">Dashboard</h4>
        <AdicionarRegistro onSubmit={Adicionar} />
        {tarefas.map(({id, value}, index) => (
          <RegistroNaLista
            key={id}
            value={value}
            onChange={(event) => Atualizar(event, index)}
            onDelete={() => Excluir(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
