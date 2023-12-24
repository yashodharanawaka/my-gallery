import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Lightbox from './components/Lightbox';
import MyProfile from "./components/MyProfile";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/photo/:id" element={<Lightbox/>}/>
                <Route path="/profile" element={<MyProfile/>}/>
                <Route path="/*" element={<PhotoGallery/>}/>
            </Routes>
        </Router>
    );
}

export default App;
