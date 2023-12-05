import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home'
import {Route, Routes, useNavigate} from 'react-router-dom'
import tech from './mockData/mockTech'
import Results from './components/Results';
import comments from './mockData/comments';
import LearnAT from './LearnAT/LearnAT';
import About from './components/About';
import Error from './components/Error';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);
  const [techResults, setTechResults] = useState(null);
  const [techComments, setTechComments] = useState(null);

  const navigate = useNavigate();

    const handleFormSubmit = () => {
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Tech Parameter:', selectedTechParam);
      setTechResults(tech);
      setTechComments(comments);
      console.log('bump', comments);
      console.log('SNAPPLE', techComments)
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
        <Route path='/results' element={<Results tech={techResults} techComments={techComments}/>}/>
        <Route path='/results' element={<Results tech={techResults}/>}/>
        <Route path='/learnat' element={<LearnAT/>}/>
        <Route path='/about' element={<About/>}/>
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
