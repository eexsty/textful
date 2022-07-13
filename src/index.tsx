import { Component } from 'solid-js';
import { render } from 'solid-js/web';

import logo from './logo.svg';
import styles from './App.module.css';
import './index.css';

const App: Component = () => (
    <div class={styles.App}>
        <header class={styles.header}>
            <img src={logo} class={styles.logo} alt="logo" />
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            <a class={styles.link} href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a>
        </header>
    </div >
);

render(() => <App />, document.getElementById('root') as HTMLElement);

