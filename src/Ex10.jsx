import React, { useState } from "react";

function Ex10() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        name=""
        id=""
        style={{ resize: "none" }}
        placeholder="enter text"
        onChange={(e) => setText(e.target.value)}
      >
        {text}
      </textarea>
      <p>{text.length} ky tu</p>
    </div>
  );
}

export default Ex10;
