//https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#63fda84a-6b43-4506-9cc7-2172561d5c16

fetch("https://api.covid19api.com/country/croatia/status/confirmed/live")
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log("Countries available")
  console.log(data);
  document.getElementById("confirmed").innerHTML = data[data.length - 1].Cases;
  const casesArr = data.map((el) => {
    return el.Cases
  })

  const casesData = [];

  for (let i = 0; i < casesArr.length; i++) {
    if(i > 0){
      casesData.push(casesArr[i] - casesArr[i-1]);
    }else{
      casesData.push(casesArr[i])
    }
  }
  console.log(casesData);
  const length = casesArr.length;
  document.getElementById("new_confirmed").innerHTML = casesArr[length-1] - casesArr[length-2];

  const root = document.getElementById("root");

  const div = d3.create("div")
  .style("font", "10px sans-serif")
  .style("text-align", "right")
  .style("color", "white")
  .attr("class", "barChart");

  div.selectAll("div")
    .data(casesData)
    .enter()
    .append("div")
    .text(casesData.forEach(el => el))
    .attr("class", "bar")
    .style("height", (d) => {
        let barHeight = d * 3;
        return barHeight + "px";
    });
  
  root.appendChild(div.node());  
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

