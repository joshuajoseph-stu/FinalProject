const images = [
  "https://i.ibb.co/WvyhNs0/Blue-Stone-Earrings.jpg",
  "https://i.ibb.co/WWwb8jX/Chandelier-Earrings.webp",
  "https://i.ibb.co/L0cTfnm/Diamond-Necklace.jpg",
  "https://i.ibb.co/hVSHbJf/Diamond-Ring.jpg",
  "https://i.ibb.co/Yp4K5km/Drop-Earrings.jpg",
  "https://i.ibb.co/y4yXsLR/Jade-Ring.jpg",
  "https://i.ibb.co/p2FmfTF/Pearl-Necklace.jpg",
  "https://i.ibb.co/GdL8f6y/Platinum-Ring.jpg",
  "https://i.ibb.co/7XHhTnH/Sapphire-Ring.jpg",
  "https://i.ibb.co/48HjrNb/Silver-Necklace.jpg",
  "https://i.ibb.co/p3CYp0c/Soul-Capsule.jpg",
  "https://i.ibb.co/wr5XWVk/Tanjiro-Earrings.jpg",
];
const basehost = "localhost:8080";
async function loadTable() {
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("GET", "https://www.mecallapi.com/api/users");
  const url = "http://" + basehost + "/api/jewelleryall";

  let response = await fetch(url);
  let jsonStr = await response.text();
  console.log(jsonStr);
  const jsonObj = JSON.parse(jsonStr);
  const data = jsonObj;

  // xhttp.send();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  var trHTML = "";
  let counterx = 0;
  // const objects = JSON.parse(this.responseText);
  for (let x in data) {
    let obj = data[x];

    trHTML += "<tr>";
    trHTML += "<td>" + obj.jId + "</td>";
    trHTML +=
      '<td><img width="75px" src=' +
      images[counterx++] +
      ' class="avatar"></td>';
    trHTML += "<td>" + obj.jName + "</td>";
    trHTML += "<td>" + obj.jMaterial + "</td>";
    trHTML += "<td>" + obj.jSKU + "</td>";
    trHTML += "<td>" + obj.jPrice + "</td>";
    trHTML +=
      '<td><button type="button" class="btn btn-secondary"">Buy</button>';
    trHTML += "</tr>";
  }
  document.getElementById("mytable").innerHTML = trHTML;
}

loadTable();
