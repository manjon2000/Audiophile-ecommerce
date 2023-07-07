import {useRef, useState} from 'react';

interface RadioButtonInterface {
    radioButtonId: string,
    inputName: string,
    label: string,
}

export const RadioButton = ( { radioButtonId, inputName, label }:RadioButtonInterface ):JSX.Element => {
    const radioButton = useRef<HTMLDivElement | undefined>(null);
    const radioButtonInput = useRef<HTMLDivElement | undefined>(null);
    const [isChecked, setIsChecked] = useState(false);
    const radioButtonHandler = ():void => {
        !radioButtonInput.current.checked ? setIsChecked(false) : setIsChecked(true)        
    }
    return(
        <div className={`radio-button ${isChecked ? "radio-button--active": ""}`} ref={radioButton}>
            <input ref={radioButtonInput} className='radio-button__input' type="checkbox" name={inputName} id={radioButtonId} onChange={radioButtonHandler} />
            <label className='radio-button__label' htmlFor={radioButtonId}>{ label }</label>
        </div>
    )
}