import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Products from './pages/Products';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
