function Card(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      price={props.price}
      title={props.title}
      description={props.description}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable="true"
    >
      {props.children}
    </div>
  );
}
export default Card;
