import React, {useState} from 'react';

const AdicionarRegistro = ({ onSubmit }) => {

  const [registro, setRegistro] = useState('');

  function adicionarRegistro({target}) {
    setRegistro(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(registro);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          className="field"
          placeholder="Digite o Registro..."
          onChange={adicionarRegistro}
        />

        <button type="submit">
          Adicionar
        </button>

      </form>
    </div>
  )
};

export default AdicionarRegistro;