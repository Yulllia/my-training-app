import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarsList from './cars-list/carslist';
import './cars-list/carslist.css';
import './display-car/car.css';

function App() {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path='' exact element={<CarsList/>} />
                </Routes>
            </div>
        </Router>
    );
}
export default App
