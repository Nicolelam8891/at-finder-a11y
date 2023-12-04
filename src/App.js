import React, { useState } from "react";
// import Form from './Form';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);

  // const handleTechParamsSelection = (category, techParam) => {
  //   setSelectedCategory(category);
  //   setSelectedTechParam(techParam);
  //   fetch('your-api-endpoint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       needs: {
  //         [category]: {
  //           tech_needs: techParam,
  //           disability_category: needs[category]['disability parameter'],
  //         },
  //       },
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <Router>
      <main className='App'>
        <Header />
        <Home />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

{
  /* <Form onTechParamsSelection={handleTechParamsSelection} /> */
}
