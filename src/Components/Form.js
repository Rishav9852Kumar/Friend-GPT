import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the submitted data
    console.log('Name:', name);
    console.log('Text:', text);
    // Set the response
    setResponse(`Thank you, ${name}! Your message "${text}" has been received.`);
    // Reset the form
    setName('');
    setText('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Text:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-textarea"
          ></textarea>
        </label>
        <button type="submit" className="form-submit">Submit</button>
      </form>
      {response && <div className="response-box">{response}</div>}
    </div>
  );
};

export default Form;
