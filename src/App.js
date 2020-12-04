import React, { useState } from 'react';
import './App.css';
import AdicionarRegistro from './AdicionarRegistroNaLista'
import RegistroNaLista from './RegistrosNaLista'

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  function Adicionar(task) {
    const registro = Array.from(tarefas);
    registro.push({id: tarefas.length, value: task});
    setTarefas(registro);
  }

  function Atualizar({target}, index) {
    const registro = Array.from(tarefas);
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
      <div>
        <pre>
          {JSON.stringify(tarefas, null, 4)}
        </pre>
      </div>
    </div>
  )
}

export default App;
