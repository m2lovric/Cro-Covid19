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

  let w = casesData.length * 17;
  let h = 350;

  const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
  
  svg.selectAll("rect")
    .data(casesData)
    .enter()
    .append("rect")
    .attr("x", (d,i) => {
      return i * (w/casesData.length);
    })
    .attr("y", (d) => {
      return h - d*3;
    })
    .attr("width", 15)
    .attr("height", (d) => {
      return d * 3;
    })
    .attr("fill", "#ff1744");   
  
  svg.selectAll("text")
    .data(casesData)
    .enter()
    .append("text")
    .text((d) => {
      return d;
    })
    .attr("x", (d,i) => {
      return i * (w/casesData.length) + 7;
    })
    .attr("y", (d) => {
      return h - d*3 + 13;
    })
    .attr("font-family", 'Oswald')
    .attr("font-size", "12px")
    .attr("fill", "white")
    .attr("text-anchor", "middle");
  
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

