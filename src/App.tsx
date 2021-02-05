import React, {ReactNode, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import { Trans } from 'react-i18next'

function Link(props: { to: string, children: ReactNode }) {
  return <a href={props.to} >{props.children}</a>;
}

function App() {
    const name = "Greg"
    const [count, setCount] = useState(0);
    const { t, i18n } = useTranslation();

    function changeLang() {
        console.log(i18n.language)
        if (i18n.language === 'en'){
            i18n.changeLanguage('es');
        }else {
            i18n.changeLanguage('en');
        }
    }

    return (
    <div className="App">
        <h1>{t('title')}</h1>

        <br />
        <br />

        <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
        </Trans>

        <button onClick={ () => setCount(count + 1)}>Inc Count</button>

        <br />
        <br />

        <button onClick={changeLang}>Change Lang</button>

    </div>
  );
}

export default App;
