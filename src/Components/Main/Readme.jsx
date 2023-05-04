import React, { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";

function Readme() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const md = new MarkdownIt();

    fetch("https://api.github.com/repos/sidjain0503/sidjain0503/readme")
      .then((response) => response.json())
      .then((data) => {
        setContent(md.render(atob(data.content)));
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default Readme;
