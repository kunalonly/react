import logo from './logo.svg';
import Todo from './componets/Todo';
import './App.css';
import Heading from './componets/Heading';

function App() {
  return (
    <div className="class__header"> <h1 > Hello Kunal </h1>
    
    <Heading />
<Todo
title="Finish Code Simplified"
paragraph="Do Code step by step"
/>
<Todo
title="Attempt All Interview Questions"
paragraph="Do All interview Question"
/>
<Todo
title="Land 100K $ Job"
paragraph="Apply for 100 jobs"
/>
 
    </div>
  );   
}

export default App;
