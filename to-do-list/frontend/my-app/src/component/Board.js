import axios from 'axios';

function Board(props) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    e.target.appendChild(card);
    const status = e.target.getAttribute('name');
    const id = card.id;
    axios
      .patch(`http://localhost:4000/tasks/alter-task/${id}/${status}`)
      .then((res) => {
        console.log(res.data, 'updated');
      });
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div id={props.id} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
}
export default Board;
