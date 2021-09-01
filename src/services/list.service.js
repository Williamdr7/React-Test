import axios from "axios";
const apiKey = "vWev33vqQ1kDHrbiu4yjXpghB3jEvApN";

const DataService = {
  getNames,
  getLists,
};

export default DataService;

function getNames() {
  return axios.get(
    `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`
  );
}

function getLists() {
  return axios.get(
    `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${apiKey}&list=hardcover-fiction`
  );
}
