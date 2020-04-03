fetch("https://api.covid19api.com/country/croatia/status/confirmed/live")
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log("Countries available")
  console.log(data);
  document.getElementById("confirmed").innerHTML = data[data.length - 1].Cases;
})

fetch("https://api.covid19api.com/country/croatia/status/recovered/live")
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data);
  document.getElementById("recovered").innerHTML = data[data.length - 1].Cases;
})

fetch("https://api.covid19api.com/country/croatia/status/deaths/live")
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data);
  document.getElementById("deaths").innerHTML = data[data.length - 1].Cases;
  let newDeaths = (parseInt(data[data.length - 1].Cases) - parseInt(data[data.length - 2].Cases));
  console.log(newDeaths);
})

