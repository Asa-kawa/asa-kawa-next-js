"use client";

import "./web.css";

export default function Home() {
  return (
    <div>
      <p className="blue">next-js</p>
      <button
        className="red"
        onClick={() => {
          alert("next-js");
        }}
        >
        ???
      </button>
    </div>
  );
}