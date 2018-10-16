import React from 'react';
import TextArea from './../../atoms/TextArea';
import Label from './../../atoms/Label';

const TextAreaField = (props) => {
  return (
    <div>
      <Label name={props.name} title={props.title} inputType="text">
      </Label>
      <TextArea 
        className={props.name}
        id={props.name}
        name={props.name}
        value={props.content}
      />
    </div>
  );
};

export default TextAreaField;