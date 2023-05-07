const SingleAccordian = ({ item: { title, content }, isOpen, toggle }) => {
  return (
    <div class="accordianContainter" onClick={toggle}>
      <h3>{title}</h3>
      {isOpen && <h5>{content}</h5>}
    </div>
  );
};

export default SingleAccordian;
