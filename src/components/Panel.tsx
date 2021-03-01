import { ReactNode } from "react";

const React = require('react');

interface IProps {
  children: ReactNode
}
const Panel = ({children}:IProps) => {
  return(
    <div className="panel">
      {children}
    </div>
  )
}

export default Panel;