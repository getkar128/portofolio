import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PortfolioProvider from './context/PortfolioContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <PortfolioProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PortfolioProvider>
)
