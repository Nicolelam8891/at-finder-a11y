
import React, { useState } from 'react';
// import Form from './Form';
import Header from './components/Header';
import Home from './components/Home';

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
    <main className="App">
      <Header />
      <Home />
      {/* <Form onTechParamsSelection={handleTechParamsSelection} /> */}
    </main>
  );
};

export default App;
