import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar Nova carta</h1>
        <form action="" method="get">
          <label htmlFor="name-input">
            Nome da carta:
            <br />
            <br />
            <input
              data-testid="name-input"
              type="text"
              placeholder="Digite o nome"
            />
          </label>
          <br />
          <br />
          <label htmlFor="description-input">
            Descrição da carta:
            <br />
            <br />
            <input data-testid="description-input" type="textarea" />
          </label>
          <br />
          <br />
          <label htmlFor="attr1-input">
            Inserir primeiro atributo carta:
            <br />
            <br />
            <input data-testid="attr1-input" type="number" />
          </label>
          <br />
          <br />
          <label htmlFor="attr2-input">
            Inserir segundo atributo carta:
            <br />
            <br />
            <input data-testid="attr2-input" type="number" />
          </label>
          <br />
          <br />
          <label htmlFor="attr3-input">
            Inserir terceiro atributo carta:
            <br />
            <br />
            <input data-testid="attr3-input" type="number" />
          </label>
          <br />
          <br />
          <label htmlFor="image-input">
            Caminho para imagem da carta:
            <br />
            <br />
            <input data-testid="image-input" type="text" />
          </label>
          <br />
          <br />
          <label htmlFor="rare-input">
            Raridade da Carta:
            <br />
            <br />
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input data-testid="trunfo-input" type="checkbox" />
          </label>
          <br />
          <br />
          <button type="button" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
