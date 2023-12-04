import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home'
import {Route, Routes, useNavigate} from 'react-router-dom'
import tech from './mockData/mockTech'
import Results from './components/Results';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);
  const [techResults, setTechResults] = useState(null)

  const navigate = useNavigate();

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

      {/* <Form onTechParamsSelection={handleTechParamsSelection} /> */}

    const handleFormSubmit = () => {
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Tech Parameter:', selectedTechParam);
      setTechResults(tech);
      navigate('/results');
    };

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route 
          path='/findmyat' 
          element=
          {<Form
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTechParam={selectedTechParam}
            setSelectedTechParam={setSelectedTechParam}
            onFormSubmit={handleFormSubmit}
          />}/>
        <Route path='/results' element={<Results tech={techResults}/>}/>
      </Routes>
    </main>
  );
};

export default App;
