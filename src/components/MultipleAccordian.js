import { useState } from "react";

export const MultipleAccordian = ({ item: { title, content } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordianContianter" onClick={() => setIsOpen(!isOpen)}>
      <h2>{title}</h2>
      {isOpen && <h5>{content}</h5>}
    </div>
  );
};
