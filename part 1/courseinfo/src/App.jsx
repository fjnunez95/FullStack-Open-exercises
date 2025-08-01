const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
const Part = ({ part, exercise }) => {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  );
};
const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts.reduce((acum, part) => {
          acum += part.exercises;
          return acum;
        }, 0)}
      </p>
    </div>
  );
};

const App = () => {
  /* const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass props", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ]; */

  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass props", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
