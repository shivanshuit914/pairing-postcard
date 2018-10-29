import React, {Component} from 'react';
import InputField from '../../molecules/InputField';
import Button from '../../atoms/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../../actions/AuthActions';
import {signin} from '../../../actions/AuthActions';

class LoginForm extends Component {

  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <InputField 
          name='username'
          title='username'
          inputType='text'
          value='username'
        />
        <InputField 
          name='password'
          title='Password'
          inputType='password'
          value='password'
        />
        <div>{this.props.errorMessage}</div>
        <Button name="submit" value="Submit" color="primary" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  { signin }
)(LoginForm);