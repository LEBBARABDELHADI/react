export default function Container() {
  const islogged = true;

  if (islogged) {
    return (
      <div>
        <h1>Rendu conditionnel avec if </h1>
        <p>user is logged</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Rendu conditionnel avec if else</h1>
        <p>user not logged</p>
      </div>
    );
  }
}
