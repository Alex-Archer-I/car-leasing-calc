import React, {useState, useRef, useEffect} from 'react';

import classes from '../../styles/forms/form.module.css';
import inputRangeClass from '../../styles/ui/range-input.module.css';
import inputNumberClass from '../../styles/ui/number-input.module.css';

const FormPercent = (props) => {
    const [inputFocus, setInputFocus] = useState(false);

    useEffect(() => {
        if (inputFocus === true) {
            number.current.focus();
        };
    }, [inputFocus]);

    useEffect(() => {
        rangeProgressMove(props.value);
    }, [props.value]);

    const range = useRef(null);
    const number = useRef(null);

    const changeRange = () => {
        props.changeFunction(+range.current.value);
    };

    const rangeProgressMove = (num) => {
        const percent = (num - props.min) / ((props.max - props.min) / 100);
        range.current.style.setProperty('--progress-bar', `${percent}%`);
    };

    const changeNumber = () => {
        if (number.current.value > props.max) {
            props.changeFunction(props.max);
            return;
        };

        if (number.current.value < props.min) {
            props.changeFunction(props.min);
            return;
        }

        props.changeFunction(+number.current.value);
    };

    const inputToggler = (status) => {
        setInputFocus(status);
    };

    const classesText = inputFocus ? `${inputNumberClass['number-input-percent']} ${classes.active}` : `${inputNumberClass['number-input-percent']}`;

    return (
        <form onSubmit={(event) => {event.preventDefault(); changeNumber();}} className={classes.form}>
            <p>{props.title}</p>
            <div className={classes['form-inputs']}>
                <div className={classes['form-currency']}>{`${props.currency} ₽`}</div>
                {inputFocus ? 
                    <input
                        onBlur={() => {
                            inputToggler(false);
                            changeNumber();
                        }}
                        ref={number}
                        type='number'
                        defaultValue={props.value}
                        className={classesText}/>
                    : <div
                        onClick={() => inputToggler(true)}
                        className={inputNumberClass['number-input-percent']}>{`${props.value}%`}</div>}
                <input
                    type='range'
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    ref={range}
                    onChange={changeRange}
                    className={inputRangeClass.range}/>
            </div>
        </form>
    );
};

export default FormPercent;