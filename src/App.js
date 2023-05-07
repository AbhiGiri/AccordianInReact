import { useState } from "react";
import { MultipleAccordian } from "./components/MultipleAccordian";
import SingleAccordian from "./components/SingleAccordian";
import "./styles.css";

const data = [
  {
    title: "Title 1",
    content: "Content 1"
  },
  {
    title: "Title 2",
    content: "Content 2"
  }
];
export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="App">
      <h1>Single Open Accordian </h1>
      {data.map((item, i) => (
        <SingleAccordian
          key={i}
          item={item}
          isOpen={openIndex === i}
          toggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
        />
      ))}
      <hr />
      <h1>Multiple Open Accordian </h1>
      {data.map((item, i) => (
        <MultipleAccordian key={i} item={item} />
      ))}
    </div>
  );
}
