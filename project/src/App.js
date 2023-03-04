import './App.css';
import { Route, Routes } from 'react-router-dom'
import { routes } from './components/helpers/routes';

function App() {
  return (
    <div>
      <Routes>
          {
            routes.map((item) => (
              <Route
                id={item.id}
                path={item.path}
                element={item.components} 
              />
            ))
          }
      </Routes>
    </div>
  );
}

export default App;
