import Chai from "./chai";
function App() {
// JSX code : it has a rule that we have to only writ or 
// return only html tag but we have a right to write as 
// many as we want tags inside one tag there is no 
// boundation
const username = "chai aur code"
  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </>
    
  )
}
// to denote variable we 
    //use {} ,,  here username is not a javascript it is 
    //evaluated javascript or we can say it is final form 
    //of javasscript
export default App
