import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserForm from './components/UserForm';
import Users from './components/Users';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<UserForm />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
