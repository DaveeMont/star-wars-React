import './App.css';
import React, {useEffect, useState} from 'react';
import Characters from './components/Characters';
import {BrowserRouter, Switch, Route, Link, Routes} from 'react-router-dom';
import Favoritos from "./pages/Favoritos";
import ListCharacters from './pages/ListCharacters';

export default function App() {
  return (

    <div>
      <h1>Home</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/favoritos">Favoritos</Link> |{" "}
        <ListCharacters />

      </nav>
    </div>
  );
}