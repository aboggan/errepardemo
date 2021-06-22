import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  
  return (
    <Router  >
      <main>
        {routes}
      </main>
    </Router>
  );
}

export default App;
