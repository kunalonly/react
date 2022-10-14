import '../App.css';

function Todo({title,paragraph})
{
return(
    <>
    <div className="titleoftodo"><h3 >{title}</h3></div>
    <span> <h3>{paragraph}</h3></span>
    <button> Delete</button>
    </>
)

}
export default Todo