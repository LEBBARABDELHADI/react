console.log("hello");

function Title() {
  return React.createElement("h1", 
  {className : "title"},
  "Hello world");
}

ReactDOM.createRoot(document.getElementById("root"))
.render(Title())
