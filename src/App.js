import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import gptFriendLogo from './gpt_friend1.jpg';

function App() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the submitted data
    console.log('Name:', name);
    console.log('Text:', text);
    // Reset the form
    setName('');
    setText('');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={gptFriendLogo} className="App-logo" alt="logo" />
        <Form/>
        <p>
          Enter the person you want to Talk with and the message you want to send
          and Press Submit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code <br/> Github
        </a>
      </header>
    </div>
  );
}

export default App;
