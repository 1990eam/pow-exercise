const fetchCovid = () => {

  const date = document.getElementById("covid-date")
  const newConfirmed = document.getElementById("covid-new-confirmed")
  const totalConfirmed = document.getElementById("covid-total-confirmed")
  const newDeaths = document.getElementById("covid-new-deaths")
  const totalDeaths = document.getElementById("covid-total-deaths")
  const newRecovered = document.getElementById("covid-new-recovered")
  const totalRecovered = document.getElementById("covid-total-recovered")

  date.innerHTML = "Fetching data..";
  newConfirmed.innerHTML = "Fetching data..";
  totalConfirmed.innerHTML = "Fetching data..";
  newDeaths.innerHTML = "Fetching data..";
  totalDeaths.innerHTML = "Fetching data..";
  newRecovered.innerHTML = "Fetching data..";
  totalRecovered.innerHTML = "Fetching data..";

  // data fetch

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 5cf9dfd5-3449-485e-b5ae-70a60e997864");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.json())
    .then((data) => { console.log(data["Global"]);
    date.innerHTML = new Date(Date.now());
    newConfirmed.innerHTML = data["Global"]["NewConfirmed"];
    totalConfirmed.innerHTML = data["Global"]["TotalConfirmed"];
    newDeaths.innerHTML = data["Global"]["NewDeaths"];
    totalDeaths.innerHTML = data["Global"]["TotalDeaths"];
    newRecovered.innerHTML = data["Global"]["NewRecovered"];
    totalRecovered.innerHTML = data["Global"]["TotalRecovered"];
      });
};

export { fetchCovid };
