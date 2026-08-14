import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const authenticateWordpress = () => {
    const username = "Developer";
    const appPassword = "LLfM PNoU 1JP0 mTz1 Yu6U JrWx";

    return (btoa(`${username}:${appPassword}`));
}

export const wordpressCredentials = authenticateWordpress();

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
