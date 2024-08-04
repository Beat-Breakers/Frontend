import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BotProvider } from '../Context/BotContext.jsx';
import Bot from '../Components/Bot.jsx';
import Home from '../Pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BotProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Bot />
    </BotProvider>
  </React.StrictMode>,
)
