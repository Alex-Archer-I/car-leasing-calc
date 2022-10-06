import React from 'react';
import {useSelector} from 'react-redux';

import classes from '../../styles/ui/modal.module.css';

const Modal = () => {
    const isOpen = useSelector(state => state.modal.isOpen);

    const classesText = isOpen ? `${classes.modal} ${classes.open}` : `${classes.modal}`;

    return (
        <aside className={classesText}></aside>
    );
};

export default Modal;