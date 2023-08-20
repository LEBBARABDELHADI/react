import { useParams } from "react-router-dom";

export default function Contact() {
  const pa = useParams();
  console.log(pa);
  return (
    <div className=" text-center pt-10  text-4xl ">Your profile :{pa.id}</div>
  );
}
