import axios from 'axios';

function Board(props) {
  const API_KEY =
    'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaUxDSndjbTltYVd4bFgzQnJJam94TVRBM09URjkudUhtRW0wbm5ZVkREOHVzWGNrLUlDWG9yUjhCWW1fVVQ2SlYzY1VTX2RfZTJLd2RQX0R4RFFVM3VFd1JUYVFRSkgxV1dmUzB3WDVwUzhJU2JDSFhJelE=';
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    e.target.appendChild(card);
    const status = e.target.getAttribute('name');
    const id = card.id;
    const price = card.getAttribute('price');
    const title = card.getAttribute('title');
    const description = card.getAttribute('description');
    var token = '';
    axios.patch(`http://localhost:4000/tasks/alter-task/${id}/${status}`);

    if (e.target.getAttribute('name') == 'paid') {
      // to authenticate request before dealing with api
      axios
        .post('https://accept.paymob.com/api/auth/tokens', { api_key: API_KEY })
        .then((res) => {
          token = res.data.token;
        });

      // order transaction
      axios
        .post('https://accept.paymob.com/api/ecommerce/orders', {
          auth_token: token,
          delivery_needed: 'true',
          amount_cents: price,
          currency: 'EGP',
          items: [
            {
              id: id,
              price: price,
              title: title,
              description: description,
            },
          ],
        })
        .then((res) => {
          console.log(res);
        });

      // key to authenticate the payment request
      axios
        .post('https://accept.paymob.com/api/acceptance/payment_keys', {
          auth_token: token,
          amount_cents: price,
          expiration: 3600,
          order_id: id,
          billing_data: {
            apartment: '803',
            email: 'nelshohat@gmail.com',
            floor: '42',
            first_name: 'Nora',
            street: 'Egypt',
            building: '8028',
            phone_number: '01022604877',
            shipping_method: 'PKG',
            postal_code: '31511',
            city: 'tanta',
            country: 'egypt',
            last_name: 'elshahat',
            state: 'Utah',
          },
          currency: 'EGP',
          integration_id: 1,
        })
        .then((res) => {
          console.log(res);
        });
    }
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
