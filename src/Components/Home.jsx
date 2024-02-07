/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Favorite Color?', type: 'multiple-choice', options: ['Red', 'Blue', 'Green'], selectedOption: '' },
    { id: 2, question: 'Best Programming Language?', type: 'multiple-choice', options: ['JavaScript', 'Python', 'Java'], selectedOption: '' },
    { id: 3, question: 'Feedback on our service?', type: 'open-ended', response: '' },
  ]);

  const handleOptionChange = (pollId, option) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, selectedOption: option } : poll
      )
    );
  };

  const handleOpenEndedChange = (pollId, response) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, response } : poll
      )
    );
  };

  const handleSurveySubmit = () => {
    // Implement logic to submit survey responses
    console.log('Survey responses submitted:', polls);
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Polling App</h1>
      <p className="subtitle">Explore and share your opinions!</p>

      <div className="poll-list">
        {polls.map((poll) => (
          <div key={poll.id} className="poll-item">
            <h3>{poll.question}</h3>
            {poll.type === 'multiple-choice' ? (
              <div className="options-list">
                {poll.options.map((option) => (
                  <label key={option} className="option">
                    <input
                      type="radio"
                      name={`poll-${poll.id}`}
                      value={option}
                      checked={poll.selectedOption === option}
                      onChange={() => handleOptionChange(poll.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  className="open-ended-input"
                  value={poll.response}
                  onChange={(e) => handleOpenEndedChange(poll.id, e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSurveySubmit}>Submit Survey</button>
    </div>
  );
};

export default Home;*/
// Home.jsx




// Home.jsx
// Home.jsx
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Favorite Color?', type: 'multiple-choice', options: ['Red', 'Blue', 'Green'], selectedOption: '' },
    { id: 2, question: 'Best Programming Language?', type: 'multiple-choice', options: ['C++', 'Python', 'Java'], selectedOption: '' },
    { id: 3, question: 'Feedback on our service?', type: 'open-ended', response: '' },
  ]);

  const handleOptionChange = (pollId, option) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, selectedOption: option } : poll
      )
    );
  };

  const handleOpenEndedChange = (pollId, response) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, response } : poll
      )
    );
  };

  const handleSurveySubmit = () => {
    // Implement logic to submit survey responses
    console.log('Survey responses submitted:', polls);
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Polling App</h1>
      <p className="subtitle">Explore and share your opinions!</p>

      <div className="poll-list">
        {polls.map((poll) => (
          <div key={poll.id} className="poll-item">
            <h3>{poll.question}</h3>
            {poll.type === 'multiple-choice' ? (
              <div className="options-list">
                {poll.options.map((option) => (
                  <label key={option} className="option">
                    <input
                      type="radio"
                      name={`poll-${poll.id}`}
                      value={option}
                      checked={poll.selectedOption === option}
                      onChange={() => handleOptionChange(poll.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  className="open-ended-input"
                  value={poll.response}
                  onChange={(e) => handleOpenEndedChange(poll.id, e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSurveySubmit}>
        Submit Survey
      </button>
    </div>
  );
};

export default Home;

*/

/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Favorite Color?', type: 'multiple-choice', options: ['Red', 'Blue', 'Green'], selectedOption: '' },
    { id: 2, question: 'Best Programming Language?', type: 'multiple-choice', options: ['C++', 'Python', 'Java'], selectedOption: '' },
    { id: 3, question: 'Feedback on our service?', type: 'open-ended', response: '' },
  ]);

  const handleOptionChange = (pollId, option) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, selectedOption: option } : poll
      )
    );
  };

  const handleOpenEndedChange = (pollId, response) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId ? { ...poll, response } : poll
      )
    );
  };

  const handleSurveySubmit = () => {
    // Implement logic to submit survey responses
    console.log('Survey responses submitted:', polls);
    
    // Display a pop-up message
    alert('Submitted successfully!');
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Polling App</h1>
      <p className="subtitle">Explore and share your opinions!</p>

      <div className="poll-list">
        {polls.map((poll) => (
          <div key={poll.id} className="poll-item">
            <h3>{poll.question}</h3>
            {poll.type === 'multiple-choice' ? (
              <div className="options-list">
                {poll.options.map((option) => (
                  <label key={option} className="option">
                    <input
                      type="radio"
                      name={`poll-${poll.id}`}
                      value={option}
                      checked={poll.selectedOption === option}
                      onChange={() => handleOptionChange(poll.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  className="open-ended-input"
                  value={poll.response}
                  onChange={(e) => handleOpenEndedChange(poll.id, e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSurveySubmit}>
        Submit Survey
      </button>
    </div>
  );
};

export default Home;*/

// Home.jsx
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [option1Count, setOption1Count] = useState(0);
  const [option2Count, setOption2Count] = useState(0);

  const handleVote = (option) => {
    if (option === 1) {
      setOption1Count(option1Count + 1);
    } else if (option === 2) {
      setOption2Count(option2Count + 1);
    }
  };

  const determineWinner = () => {
    if (option1Count > option2Count) {
      return 'Option 1 is the winner!';
    } else if (option2Count > option1Count) {
      return 'Option 2 is the winner!';
    } else {
      return 'It\'s a tie!';
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Polling App</h1>

      <div className="options-container">
        <div className="option">
          <button onClick={() => handleVote(1)}>Vote for Option 1</button>
          <p>Count: {option1Count}</p>
        </div>

        <div className="option">
          <button onClick={() => handleVote(2)}>Vote for Option 2</button>
          <p>Count: {option2Count}</p>
        </div>
      </div>

      <div className="winner-container">
        <h2>{determineWinner()}</h2>
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [option1Count, setOption1Count] = useState(0);
  const [option2Count, setOption2Count] = useState(0);

  const handleVote = (option) => {
    if (option === 1) {
      setOption1Count(option1Count + 1);
    } else if (option === 2) {
      setOption2Count(option2Count + 1);
    }
  };

  const determineWinner = () => {
    if (option1Count > option2Count) {
      return 'Option 1 is the winner!';
    } else if (option2Count > option1Count) {
      return 'Option 2 is the winner!';
    } else {
      return 'It\'s a tie!';
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Polling App</h1>

      <div className="options-container">
        <div className="option">
          <button onClick={() => handleVote(1)}>Vote for Option 1</button>
          <p>Count: {option1Count}</p>
        </div>

        <div className="option">
          <button onClick={() => handleVote(2)}>Vote for Option 2</button>
          <p>Count: {option2Count}</p>
        </div>
      </div>

      <div className="winner-container">
        <h2>{determineWinner()}</h2>
      </div>
    </div>
  );
};

export default Home;*/
import React, { useState } from 'react';
import './Home.css';

const Polling = () => {
  const [vegCount, setVegCount] = useState(0);
  const [nonVegCount, setNonVegCount] = useState(0);

  const handleVote = (foodType) => {
    if (foodType === 'veg') {
      setVegCount(vegCount + 1);
    } else if (foodType === 'non-veg') {
      setNonVegCount(nonVegCount + 1);
    }
  };

  const determineWinner = () => {
    if (vegCount > nonVegCount) {
      return 'Veg is the winner!';
    } else if (nonVegCount > vegCount) {
      return 'Non-Veg is the winner!';
    } else {
      return 'It\'s a tie!';
    }
  };

  return (
    <div className="polling-container">
      <h1 className="title">Food Polling</h1>

      <div className="options-container">
        <div className="option">
          <button onClick={() => handleVote('veg')}>Veg</button>
          <p>Count: {vegCount}</p>
        </div>

        <div className="option">
          <button onClick={() => handleVote('non-veg')}>NVeg</button>
          <p>Count: {nonVegCount}</p>
        </div>
      </div>

      <div className="winner-container">
        <h2>{determineWinner()}</h2>
      </div>
    </div>
  );
};

export default Polling;


