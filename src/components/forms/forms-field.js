import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {leasingDataActions} from '../../store/store';

import Form from './form';
import FormPercent from './form-percent';
import Modal from '../ui/modal';

import classes from '../../styles/general/sections.module.css';

const FormsField = () => {
    const leasingData = useSelector(state => state.leasingData);
    const dispatch = useDispatch();

    const changeCostHandler = (value) => {
        dispatch(leasingDataActions.changeCost(value));
    };

    const changePercentHandler = (value) => {
        dispatch(leasingDataActions.changePercent(value));
    };

    const changeTermHandler = (value) => {
        dispatch(leasingDataActions.changeTerm(value));
    };

    return (
        <section className={classes['section-forms']}>
            <Modal/>
            <Form
                changeFunction={changeCostHandler}
                title='Стоимость автомобиля'
                min={1000000}
                max={6000000}
                value={leasingData.cost}
                currency={'₽'}/>
            <FormPercent
                changeFunction={changePercentHandler}
                title='Первоначальный взнос'
                min={10}
                max={60}
                value={leasingData.percent}
                currency={`${leasingData.initialPayment.toLocaleString()}`}/>
            <Form 
                changeFunction={changeTermHandler}
                title='Срок лизинга'
                min={1}
                max={60}
                value={leasingData.term}
                currency={'мес.'}/>
        </section>
    );
};

export default FormsField;