const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old{" "}
      </p>
    </div>
  );
};

const Footer = (props) =>{
  return(
    <div>
      <p>Elaborado por {props.name}. Todos los derechos reservados. </p>
    </div>
  )
}

const Friends = () =>{
  const friends = [
    {name:"Fernando", age: 23},
    {name:"Ivan", age: 33}
  ]
  const pets = ['cat','dog']
  return(
    <>
      <p>Mi nombre es {friends[0].name} y tengo {friends[0].age} </p>
      <p>Mi nombre es {friends[1].name} y tengo {friends[1].age} </p>

      <p>{pets} </p>
    </>
  )
}

const App = () => {
  const name = "Pedro";
  const age = 15;

  return (
    < >
      {/* <h1>Greetings</h1>
      <Hello name="Fabri" age={21 + 2} />
      <Hello name={name} age={age} />
      <Footer name='Fabrizio'/> */}
      <Friends />
    </>
  );
};

export default App;
