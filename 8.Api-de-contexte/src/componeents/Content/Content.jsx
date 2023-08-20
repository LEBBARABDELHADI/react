import React from "react";
import "../Content.css";
import { ThemeContext } from "../../context/ThemeProvider.jsx";
import { useContext } from "react";
export default function Content() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="containerContent">
      <h1> {darkMode ? "Dark" : "Light"} app</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at
        corporis rerum repudiandae, veritatis a inventore, nobis odio ipsa ipsum
        sint aperiam, culpa facilis! Sunt quam mollitia nam reiciendis natus non
        ab, debitis enim eaque dolorum fugiat veniam repudiandae at libero
        excepturi velit perspiciatis numquam quos. Facilis delectus porro
        facere, mollitia eligendi esse dicta labore unde omnis accusamus
        quibusdam repudiandae. Facilis placeat omnis dolore nobis voluptas,
        tenetur sapiente cupiditate nulla possimus sit eaque aut rem?
      </p>
    </div>
  );
}
