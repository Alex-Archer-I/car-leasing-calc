import React from 'react';
import {useSelector} from 'react-redux';

import DisplayItem from './display-item';
import Button from './button';

import classes from '../../styles/general/sections.module.css';

const DisplayField = () => {
    const leasingData = useSelector(state => state.leasingData);

    return (
        <section className={classes['section-display']}>
            <DisplayItem title={'Сумма договора лизинга'} number={leasingData.totalSum.toLocaleString()}/>
            <DisplayItem title={'Ежемесячный платеж от'} number={leasingData.monthPay.toLocaleString()}/>
            <Button/>
        </section>
    );
};

export default DisplayField;