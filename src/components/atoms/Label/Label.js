import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
`;

const StyledLabelForCheckBox = styled.label`
  display: flex;
  position: relative;
  top: 30px;
  left: 30px;
  font-size: 20px;
`;

const Label = (props) => {
  return (
    props.inputType === 'checkbox' ?
      <StyledLabelForCheckBox htmlFor={props.name} className="form-label">
        {props.title}
      </StyledLabelForCheckBox>
    : <StyledLabel htmlFor={props.name} className="form-label">
        {props.title}
      </StyledLabel>
  );
};

Label.PropTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Label;