
import React from 'react';
import Button from "../Button/Button";
import './Header.css';

const Header = () => {
    const tg = window.Telegram.WebApp
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};
//go

export default Header;