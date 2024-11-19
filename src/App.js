import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TabButton from "./TabButton";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const handleClick = (index) => {
    setActiveContentIndex(index);
  };
  return (
    <div className="App">
      <Header />
      <div id="tabs">
        <menu>
          {/* <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button> */}
          <TabButton
            isSelected={activeContentIndex === 0}
            onSelect={() => handleClick(0)}
          >
            Why React?
          </TabButton>
          <TabButton
            isSelected={activeContentIndex === 1}
            onSelect={() => handleClick(1)}
          >
            Core Features
          </TabButton>
          <TabButton
            isSelected={activeContentIndex === 2}
            onSelect={() => handleClick(2)}
          >
            Related Resources
          </TabButton>
          <TabButton
            isSelected={activeContentIndex === 3}
            onSelect={() => handleClick(3)}
          >
            React vs JS
          </TabButton>
        </menu>
        <div id="tab-contents">
          <ul>
            {content[activeContentIndex].map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
