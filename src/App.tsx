import React from 'react';
import './App.css';
import {YMaps} from 'react-yandex-maps';
import CityMap from "./components/map/map";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <Provider store={store}>
            <YMaps query={{
                load: "package.full"
            }}>
                <CityMap/>
            </YMaps>
        </Provider>
    );
}

export default App;
