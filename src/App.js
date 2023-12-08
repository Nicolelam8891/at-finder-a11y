import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home'
import {Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import tech from './mockData/mockTech'
import Results from './components/Results';
import comments from './mockData/comments';
import LearnAT from './LearnAT/LearnAT';
import UserPage from './components/UserPage/UserPage';
import About from './components/About';
import Error from './components/Error';
import needs from './mockData/needs';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);
  const [techResults, setTechResults] = useState(null);
  const [techComments, setTechComments] = useState(null);

  const navigate = useNavigate();

  console.log('afsdfas', selectedTechParam)

  const handleTechParamsSelection = (category, techParam) => {
    return new Promise((resolve, reject) => {
      setSelectedCategory(category);
      setSelectedTechParam(techParam);
      const techArr = [techParam]; // Use an array directly
      const disabilityArr = [needs[category]['disability parameter']];
  
      fetch('https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          needs: {
            [category]: {
              tech_needs: techArr,
              disability_description: disabilityArr,
            },
          },
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('here is the data', data.data);
        setTechResults(data.data);
        resolve(); 
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      });
    });
  };
  

  const handleFormSubmit = async () => {
    try {
      // Call the asynchronous function using await
      await handleTechParamsSelection(selectedCategory, selectedTechParam);
      console.log('THIS IS YOUR PROMISE RETURNING')
      navigate('/results');
      setTechComments(comments);
    } catch (error) {
      console.error('Error:', error);
    }
    };

    const handleButtonClick = (route) => {
      navigate(route);
    };

    const location = useLocation();

  return (
    <main className="App">
      {/* {location.pathname !== '/' && <Header handleButtonClick={handleButtonClick}/>} */}
      <Header handleButtonClick={handleButtonClick}/>
      <Routes>
        <Route
          path='/'
          element={<Home
            handleButtonClick={handleButtonClick}
          />}/>

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
        <Route path='/results' element={<Results tech={techResults} techComments={techComments} category={selectedCategory}/>}/>
        <Route path='/learnat' element={<LearnAT/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/userpage' element={<UserPage/>}/>
        <Route path='/*' element={<Error
              errorRoute={"Oh no, you have gone down the wrong path. Find your path back home by clicking on the home button!"}
            />}></Route>
      </Routes>
    </main>
  );
};

export default App;

{
  /* <Form onTechParamsSelection={handleTechParamsSelection} /> */
}
