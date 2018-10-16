import React, {Component} from 'react';
import InputField from '../../molecules/InputField';
import Button from '../../atoms/Button';
import TextAreaField from '../../molecules/TextAreaField';
import styled from 'styled-components';

const FlexDisplay = styled.div`
  display: flex;
`;

class PairingFrom extends Component {
  render() {
    return (
      <div>
        <FlexDisplay>
          <InputField 
            name='name'
            title='Name'
            inputType='text'
            value='name'
          />
          <InputField 
            name='partner'
            title='Partner'
            inputType='text'
            value='Partner'
          />
        </FlexDisplay>
        <FlexDisplay>
          <InputField 
            name='team'
            title='Team'
            inputType='text'
            value='Team'
          />
          <InputField 
            name='length'
            title='Session Length'
            inputType='text'
            value='Session Length'
          />
        </FlexDisplay>
        <InputField 
          name='options'
          title='Healthy conflict and mutual respect'
          inputType='checkbox'
          value='Partner'
        />
        <InputField 
          name='options'
          title='Did you learn something'
          inputType='checkbox'
          value='Partner'
        />
        <TextAreaField
          name='comments'
          title='Comments'
        />
        <Button name="submit" value="Submit" color="primary" />
      </div>
    );
  }
}

export default PairingFrom;