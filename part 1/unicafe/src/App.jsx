import { useState } from "react";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={average} />
          <StatisticLine text={"positive"} value={`${positive} %`} />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all
    ? Math.round(((good * 1 + bad * -1) / all) * 100) / 100
    : 0;
  const positive = all ? (good / all) * 100 : 0;

  return (
    <div>
      <Title title={"give feedback"} />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
