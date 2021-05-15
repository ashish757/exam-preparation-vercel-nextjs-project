import { useReducer } from 'react';
import "./Globals.scss";
// DATALAYER
import DataLayer from "../DataLayer";
import {initialData} from "../DataLayer/data/";
import Reducer from "../DataLayer/Reducer/reducer"
// COMPONENTS
import Nav from "../components/Nav"

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(Reducer, initialData);

  return (
    <DataLayer.Provider value={{ state, dispatch }}>     
      
      <Nav />
      <Component {...pageProps} />
      
    </DataLayer.Provider>
  );
}

export default MyApp;