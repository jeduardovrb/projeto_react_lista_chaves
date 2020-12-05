import React from 'react';

const RegistroNaLista = ({ onChange, onDelete, value }) => {
  return (
    <div className="lista">
      <input type="checkbox" id="teste" name="teste"/> 

      <input className={value.includes("ler") || value.includes("estudar") ? "field-item" : "field"}
        value={value} onChange={onChange} />

      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default RegistroNaLista;