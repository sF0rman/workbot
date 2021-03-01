import React, {useRef, useState} from "react";
import './Input.css';

export enum InputType {
  text = 'text',
  combo = 'combo',
  email = 'email'
}

interface InputOptions {
  text: string,
  value: string
}

interface IProps {
  label: string,
  type?: InputType,
  options?: Array<InputOptions>
}

const Input = ({ label, type, options }: IProps) => {

  const [isComboOpen, setIsComboOpen] = useState(false);
  const comboDrawer = useRef<HTMLDivElement>(null);
  const comboBox = useRef<HTMLDivElement>(null);
  const [comboSelection, setComboSelection] = useState(null);

  const openCombo = (): any => {
    if(isComboOpen && comboDrawer && comboDrawer.current) {
      comboDrawer.current.style.display = 'none';
      setIsComboOpen(false);
    } else if(comboDrawer && comboDrawer.current) {
      const width = comboBox.current?.clientWidth;
      comboDrawer.current.style.width = width + 'px';
      comboDrawer.current.style.display = 'block';
      setIsComboOpen(true);
    }
  }

  const makeSelection = (e:any) => {
    const value = e.target.dataset.value;
    setComboSelection(value);
    openCombo();
  }

  const returnInput = (): any => {
    switch (type) {
      case InputType.combo:
        return (
          <>
            <div style={{color: comboSelection ? '#000000' : '#444444'}}
              ref={comboBox}
              className="input"
              placeholder={label && label}
              onClick={openCombo}>
              {comboSelection ? comboSelection : label}
            </div>
            <div className="input-combo-drawer" ref={comboDrawer}>
              {options?.map((el, i) => <div key={i} className="input-combo-option" data-value={el.value} onClick={makeSelection}>{el.text}</div>)}
            </div>
          </>)
        break;
      case InputType.email:
        return (
          <div className="input"><input type="email" placeholder={label && label}></input></div>
        )
      default:
        return (<div className="input"><input placeholder={label && label}></input></div>)
    }
  }

  return (
    returnInput()
  )
}

export default Input;