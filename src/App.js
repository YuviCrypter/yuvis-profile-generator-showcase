// Importing necessary modules and components
import "./App.css";
import { useState } from "react";
import { Profile, randomColor, randomValue } from "yuvis-profile-generator";

// Array of background colors
const bgColors = [
  { first: "#9f1d35", second: "#440001" },
  { first: "rgb(127, 62, 211)", second: "rgb(0, 23, 70)" },
  { first: "#008662", second: "#001d00" },
  { first: "#0047AB", second: "#061148" },
];

// Main App component
function App() {
  // State variables using the useState hook
  const [selectedBG, setSelectedBG] = useState(1);
  const [selectedBorder, setSelectedBorder] = useState(1);
  const [resolution, setResolution] = useState(5);
  const [hidden, setHidden] = useState(false);
  const [shape, setShape] = useState(1);
  const [code, setCode] = useState("");
  const [color, setColor] = useState("white");

  // Rendering the main container with dynamic styles based on selected background
  return (
    <div
      id="logo-container"
      className="App"
      style={{
        backgroundImage: `radial-gradient(circle at center center,${bgColors[selectedBG].first},${bgColors[selectedBG].second})`,
      }}
    >
      {/* Profile container */}
      <div
        className="profile"
        onClick={() => {
          setColor(randomColor());
          setCode(randomValue(resolution));
        }}
      >
        {/* Rendering the Profile component with various props */}
        <Profile
          length={400}
          resolution={resolution}
          borderColor={selectedBorder}
          shape={shape}
          setValue={setCode}
          value={code}
          color={color}
          setColor={setColor}
        />
      </div>

      {/* Toggle button for hiding/showing tools */}
      <div className="hide">
        <button
          onClick={() => {
            setHidden(!hidden);
          }}
          style={!hidden ? { outline: "2px solid #ffffff75" } : {}}
        >
          {hidden ? (
            <span class="material-symbols-outlined">image</span>
          ) : (
            <>
              Hide Tools
              <span class="material-symbols-outlined">hide_image</span>
            </>
          )}
        </button>
      </div>

      {/* Conditional rendering of tools based on 'hidden' state */}
      {hidden ? (
        <></>
      ) : (
        <>
          {/* Credits section */}
          <div className="credits">
            <div>
              Profile Generator package used
              <a
                href="https://github.com/YuviCrypter/yuvis-profile-generator"
                target="_blank"
              >
                yuvis-profile-generator
              </a>
            </div>
            <a href="https://github.com/YuviCrypter" target="_blank">
              <Profile
                length={36}
                borderColor={selectedBorder}
                resolution={resolution}
                shape={0}
                setValue={setCode}
                value={code}
                color={color}
                setColor={setColor}
              />
              YuviCrypter
            </a>
          </div>

          {/* Contribution link */}
          <div className="contribute">
            You can contribute to this Showcase on GitHub{" "}
            <a
              href="https://github.com/YuviCrypter/yuvis-profile-generator-showcase"
              target="_blank"
            >
              here
            </a>
          </div>

          {/* Input field for code */}
          <div className="code">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              style={{ color: bgColors[selectedBG].first }}
            ></input>
          </div>

          {/* Slider for selecting resolution */}
          <div className="lengthSelector">
            <p>{resolution}</p>
            <input
              type="range"
              min={3}
              max={10}
              value={resolution}
              onChange={(e) => {
                setResolution(parseInt(e.target.value));
              }}
            ></input>
          </div>

          {/* Shape selector */}
          <div className="shapeSelector">
            <p>Shape : </p>
            <div
              onClick={() => {
                setShape(0);
              }}
            >
              <span class="material-symbols-outlined">circle</span>
            </div>
            <div
              onClick={() => {
                setShape(1);
              }}
            >
              <span class="material-symbols-outlined">square</span>
            </div>
          </div>

          {/* Border selector */}
          <div className="borderSelector">
            <p>Border:</p>
            <div
              onClick={() => {
                setSelectedBorder(0);
              }}
            ></div>
            <div
              onClick={() => {
                setSelectedBorder(1);
              }}
            ></div>
            <div
              onClick={() => {
                setSelectedBorder(2);
              }}
            >
              <span className="material-symbols-outlined">block</span>
            </div>
          </div>

          {/* Color picker */}
          <div className="colorPicker">
            <p>Select Logo Color:</p>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></input>
          </div>

          {/* Background selector */}
          <div className="bgselector">
            <p>Set Background</p>
            <div>
              {bgColors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedBG(index)}
                  style={{
                    border: `2px solid ${color.first}`,
                    backgroundImage: `linear-gradient(${color.first},${color.second})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
