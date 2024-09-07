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
      </button><br />
      <button
        id="website-list-button"
        onClick={() => {
          location.href = ("https://asa-kawa.github.io/Asa-kawaWebsitelist/");
        }}>
          ウェブサイト一覧
      </button><br />
      <audio src="./next js.mp3" controls>next-js</audio>
    </div>
  );
}