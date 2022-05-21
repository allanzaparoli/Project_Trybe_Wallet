function fetchWallet() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => (data))
    .catch((error) => console.log(error));
  return result;
}

export default fetchWallet;
