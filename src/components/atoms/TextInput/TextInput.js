import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextInput = styled.input`
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 200px;
  height: 30px;
`;

const TextInput = (props) => (
  <StyledTextInput
    className={`form-input ${props.name}`}
    id={props.name}
    name={props.name}
    type={props.inputType}
    defaultValue={props.content}
    placeholder={props.placeholder}
  />
);

TextInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: null,
};

export default TextInput;