import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Modal from '../ui/modal';

import {modalActions} from '../../store/store';

import classes from '../../styles/ui/button.module.css';

const Button = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const leasingData = useSelector(state => state.leasingData);
    const leasingDataObj = {
        car_coast: leasingData.cost,
        initail_payment: leasingData.initialPayment,
        initail_payment_percent: leasingData.percent,
        lease_term: leasingData.term,
        total_sum: leasingData.totalSum,
        monthly_payment_from: leasingData.monthPay,
    };

    const request = () => {
        setIsLoading(true);
        dispatch(modalActions.modalOpen());
        fetch('/test', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(leasingDataObj),
        }).then(data => data.json()).then(data => {
            console.log(data);
            setIsLoading(false);
            dispatch(modalActions.modalClose());
        });
    };
    
    return (
        <div className={classes['button-holder']}>
            <Modal/>
            <button onClick={request} className={classes.button}>
                {isLoading ? <div className={classes.loader}></div> : 'Оставить заявку'}
            </button>
        </div>
    );
};

export default Button;