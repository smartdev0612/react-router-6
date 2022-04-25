import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>} />
        <Route 
          path='about' 
          element={
            <div>
              <h2>About page</h2>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
