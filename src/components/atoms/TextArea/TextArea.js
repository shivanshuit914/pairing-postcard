import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  display: flex;
  width: 400px;
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  height: 100px;
`

const TextArea = () => {
  return (
    <StyledTextArea />
  )
}

export default TextArea;