import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("The element #root wasn't found");
}
const root = createRoot(rootElement);

root.render(<App />);