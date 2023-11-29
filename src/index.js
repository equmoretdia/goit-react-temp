import ReactDom from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(<App />);
