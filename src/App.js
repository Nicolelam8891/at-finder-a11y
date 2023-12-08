import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home'
import TestComments from './components/TestComments/TestComments';
import {Route, Routes, useNavigate} from 'react-router-dom'
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
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleTechParamsSelection = (category, techParam) => {
    setSelectedCategory(category);
    setSelectedTechParam(techParam);
    fetch('https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        needs: {
          [category]: {
            tech_needs: techParam,
            disability_category: needs[category]['disability parameter'],
          },
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('here is the data', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


    const handleFormSubmit = () => {
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Tech Parameter:', selectedTechParam);
      handleTechParamsSelection(selectedCategory, selectedTechParam);
      setTechResults(tech);
      setTechComments(comments);
      console.log('bump', comments);
      console.log('SNAPPLE', techComments)
      navigate('/results');
    };

    const handleButtonClick = (route) => {
      navigate(route);
    };

  return (
    <main className="App">
      <Header setCurrentUser={setCurrentUser} handleButtonClick={handleButtonClick}/>
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
        <Route path='/userpage' element={<UserPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/testcomments' element={<TestComments handleButtonClick={handleButtonClick} />}/>
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
