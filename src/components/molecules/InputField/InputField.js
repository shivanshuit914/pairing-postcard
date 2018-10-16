import React from 'react';
import TextInput from './../../atoms/TextInput';
import Label from './../../atoms/Label';

const InputField = (props) => {
  return (
    <div>
      <Label name={props.name} title={props.title} inputType={props.inputType}>
      </Label>
      <TextInput 
        className={props.name}
        id={props.name}
        name={props.name}
        inputType={props.inputType}
        value={props.content}
        />
    </div>
  );
};

export default InputField;