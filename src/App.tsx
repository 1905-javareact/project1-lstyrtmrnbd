import React from 'react';
import './include';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { NavComponent } from './components/nav.component';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavComponent />
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
