import './Form.css'
import needs from '../mockData/needs'
import CategoryCard from './CategoryCard';

function Form () {
  
  console.log(needs)
  const categories = Object.keys(needs);

  return (
    <div>
      {categories.map(category => (
        <CategoryCard key={category} category={category} data={needs[category]} />
      ))}
    </div>
  )
}

export default Form