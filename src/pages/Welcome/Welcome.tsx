import React, { useEffect, useState } from 'react';

import Window from '../../components/Window/Window';

import './Welcome.css';

import Button from '../../components/Button/Button';
import Panel from '../../components/Panel';
import Input, { InputType } from '../../components/Input/Input';

import Register from '../Register/Register';

const Welcome = () => {

  const [isWindowOpen, setWindowOpen] = useState(false);
  useEffect(() => {

  }, [isWindowOpen]);

  const accountTypes: Array<any> = [
    {
      text: 'Personal',
      value: 'Personal'
    },
    {
      text: 'Business',
      value: 'Business'
    }
  ]

  const getRegisterWindow = ():any => {
      return (<><Window title='Register' cancelHandler={closeRegisterWindow}><Register></Register></Window></>)
  }

  const openRegisterWindow = ():void => {
    setWindowOpen(true);
  }
  const closeRegisterWindow = ():void => {
    setWindowOpen(false);
  }

  return (
    <div className="welcome">
      {isWindowOpen && getRegisterWindow()}
      <div className="welcome_left">
        <h3>Welcome to a new employment experience: "Workbot"</h3>
        <h1>The smarter way to find work!</h1>
        <p>Watch how it works</p>
        <Button></Button>
      </div>
      <Panel>
        <h1>TRY IT FOR FREE</h1>
        <span>
          <Input label="Email" type={InputType.email}></Input>
          <Input label="Account Type" type={InputType.combo} options={accountTypes}></Input>
        </span>
        <p>Lorem ipsum dolor amet.</p>
        <Button useSecondary={true} handleClick={openRegisterWindow}>REGISTER</Button>
      </Panel>
    </div>
  )
}

export default Welcome;