import MyChannel from "./Components/MyChannel/MyChannel";
function App() {
  //Variables
  const a = 60;
  const firstName="Hansini"
  const middleName="Devindi"
  const lastName="Vithanage"
  //Function
  const getFullName = (f,m,l) => {
    return `${f} ${m} ${l}`;
  }
  // array
  const arr=["Apple","Orange","Banana"]
 //we can assing ui li set for a variable
 const lang=<ui>
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT</li>
              </ui>;

  // Object creation 
  const pobj ={
    fname: "hansini",
    age : 60
  }
  return (
    <>
      <h1 className="heading">Hi Bro</h1>
      <dev className="const">
        <h1>React</h1>
        <p> Hi I'm Vindi This is my first react app </p>
        <p>{10*10}% for JSX</p>
        {/* If Else */}
        <p>{a>50 ? "Greater" : "Lesser"}</p>

        <h1>Employee Details</h1>
        <p>Full Name : {firstName},{middleName},{lastName}</p>
        {/* Callin a Function */}
        <p>full name: { getFullName (firstName,middleName,lastName)}</p>
        {/* Array Assingments */}
        <p>{firstName} Likes To Eat {arr[0]}</p>
{/* 
        <ui>
          <li>HTML</li>
          <li>CSS</li>
          <li>REACT</li>
        </ui> */}
        {/* call ui li set  */}
        <p> Programing Languages Are {lang}</p>

        {/* calling a obj */}
        <p>My age is {pobj.age}</p>  

        
        <MyChannel/>
      </dev>
      
    </>
    
  )
}

export default App
