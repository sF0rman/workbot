import React from 'react';
import './Window.css';

import Panel from '../Panel';

interface IProps {
  children?: any;
  title: string,
  completeHandler?: () => void,
  cancelHandler: () => void
}

const Window = ({children, title, completeHandler, cancelHandler}:IProps) => {
  return(
    <div className="window-wrapper">
      <Panel>
        <div className="window-title"><h1>{title}</h1><button onClick={cancelHandler} className="window-close-btn">X</button></div>
        {children}
      </Panel>
    </div>
  )
}

export default Window;