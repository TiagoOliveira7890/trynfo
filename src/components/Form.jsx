import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
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
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="description-input">
            Descrição da carta:
            <br />
            <br />
            <input
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr1-input">
            Inserir primeiro atributo carta:
            <br />
            <br />
            <input
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr2-input">
            Inserir segundo atributo carta:
            <br />
            <br />
            <input
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr3-input">
            Inserir terceiro atributo carta:
            <br />
            <br />
            <input
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="image-input">
            Caminho para imagem da carta:
            <br />
            <br />
            <input
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="rare-input">
            Raridade da Carta:
            <br />
            <br />
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
