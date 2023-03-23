
import './App.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./actions/auth";
import {store} from "./reducers";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <Provider store={store}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
        </Provider>
  );
}

export default App;
