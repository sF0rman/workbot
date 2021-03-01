import React from 'react';
import Input, { InputType } from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = () => {
  return(
    <div className="register-form">
      <Input label='First Name'></Input>
      <Input label='Surname'></Input>
      <Input label='Day'></Input>
      <Input label='Month'></Input>
      <Input label='Year'></Input>
      <Button useSecondary={true}>REGISTER</Button>
    </div>
  )
}

export default Register