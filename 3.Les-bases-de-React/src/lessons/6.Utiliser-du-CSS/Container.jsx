import "./sheets.css";
export default function Container() {
  const color = "red";
  return (
    <div>
      <h1>Utiliser du CSS</h1>
      <h2 style={{ color: color, backgroundColor: "black" }}> CSS module</h2>
      <p className="toto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quae
        sapiente quibusdam voluptatem ut possimus qui aperiam rerum, quo
        exercitationem quod atque dolores corporis eos, a dicta doloremque
        laboriosam doloribus.
      </p>
    </div>
  );
}
