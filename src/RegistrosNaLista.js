import React from 'react';

const RegistroNaLista = ({ onChange, onDelete, value }) => {
  return (
    <div className="lista">
      <input type="checkbox" id="teste" name="teste"/> 

      <input
        className="field-item"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default RegistroNaLista;