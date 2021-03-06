const fetchAccount = () =>
  fetch("http://localhost:8080/account")
    .then(res => res.json())
    .catch(err => console.error(err));

const postMovement = async value =>
  fetch("http://localhost:8080/account/movement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ value: Number(value) })
  }).then(r => {
    if (r.status === 200) {
      return r.json();
    }

    if (r.status === 403) {
      return Promise.reject("Can't add movement");
    }
  });

const fetchBalance = async () =>
  fetch("http://localhost:8080/account/balance")
    .then(r => r.json())
    .catch(err => console.error(err));

    
export { fetchAccount, postMovement, fetchBalance };
