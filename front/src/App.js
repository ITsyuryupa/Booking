
import './App.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./actions/auth";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
