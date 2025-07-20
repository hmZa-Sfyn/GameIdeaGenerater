import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [idea, setIdea] = useState('');
  const [uselessSwitch, setUselessSwitch] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mood, setMood] = useState('happy');

  const fetchIdea = async () => {
    setShowConfetti(false); // Reset confetti
    try {
      const response = await fetch('http://localhost:4000/api/idea');
      const data = await response.json();
      setIdea(data.idea);
      setShowConfetti(true); // Trigger confetti
    } catch (error) {
      console.error("Failed to fetch idea:", error);
      setIdea("Couldn't fetch an idea. Is the server running?");
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="App">
      {showConfetti && Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="confetti" style={{
          left: `${Math.random() * 100}vw`,
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          animationDuration: `${Math.random() * 3 + 2}s`
        }}></div>
      ))}
      <header className="App-header">
        <h1>Game Idea Generator</h1>
        <button onClick={fetchIdea}>Generate Idea</button>
        {idea && <p className="idea-display">{idea}</p>}
        
        <div className="useless-feature">
          <label>
            <input type="checkbox" checked={uselessSwitch} onChange={() => setUselessSwitch(!uselessSwitch)} />
            A Useless Switch
          </label>
          {uselessSwitch && <p>This switch does absolutely nothing. Hope you enjoyed it!</p>}
        </div>

        <div className="useless-feature">
          <label>
            Current Mood:
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="creative">Creative</option>
              <option value="procrastinating">Procrastinating</option>
            </select>
          </label>
          <p>The generator's mood is now {mood}. This changes nothing.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
