export default function Container() {
  const data = [
    {
      id: 1,
      name: "amine",
    },
    {
      id: 2,
      name: "madis",
    },
    {
      id: 3,
      name: "polo",
    },
  ];
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
