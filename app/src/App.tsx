import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const ENROLEMENT_QUERIE = gql`
{  enrollment {
    id
    email
    fullName
    dept
    enrolled
  }}
`

const App = () => {
  const { data: { enrollment }, loading, error } = useQuery(ENROLEMENT_QUERIE);

  return (
    <div className="App">
      <header className="App-header">
        App loaded
        {loading
          ? <div>...loading</div>
          : enrollment && !error
            ? <Students {...{ enrollment }} />
            : <div> not loaded yet </div>
        }
      </header>
    </div>
  );
}

const Students = ({ enrollment }: {
  enrollment: {
    fullName: string;
    email: string;
    id: string;
    dept: string;
    enrolled: boolean;
  }[]
}) => {
  console.log(enrollment)
  return (
    <ul>
      {
        enrollment.map((item, index) => (
          <li key={item.id + item}>
            {item.fullName} {item.email}
          </li>
        ))}

    </ul>
  )
}

export default App;
