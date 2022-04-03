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
      '<td><button type="button" class="btn btn-secondary" onclick="showUserEditBox(' +
      obj.jId +
      ')">Edit</button>';
    trHTML +=
      '<button type="button" class="btn btn-danger" onclick="userDelete(' +
      obj.jId +
      ')">Del</button></td>';
    trHTML += "</tr>";
  }
  document.getElementById("mytable").innerHTML = trHTML;
}

loadTable();

function showUserCreateBox() {
  Swal.fire({
    title: "Create New Listing",
    html:
      '<input id="createiid" class="swal2-input" placeholder="Id">' +
      '<input id="createiname" class="swal2-input" placeholder="Name">' +
      '<input id="createimaterial" class="swal2-input" placeholder="Material">' +
      '<input id="createisku" class="swal2-input" placeholder="SKU">' +
      '<input id="createiprice" class="swal2-input" placeholder="Price">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    },
  });
}

async function userCreate() {
  const id = document.getElementById("createiid").value;
  const name = document.getElementById("createiname").value;
  const material = document.getElementById("createimaterial").value;
  const sku = document.getElementById("createisku").value;
  const price = document.getElementById("createiprice").value;

  // const xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "https://www.mecallapi.com/api/users/create");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(
  //   JSON.stringify({
  //     fname: fname,
  //     lname: lname,
  //     username: username,
  //     email: email,
  //     avatar: "https://www.mecallapi.com/users/cat.png",
  //   })w
  // );
  const jewelObj = {
    jId: id,
    jName: name,
    jMaterial: material,
    jSKU: sku,
    jPrice: price,
  };

  const url = "http://" + basehost + "/api/jewellery";
  const data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jewelObj),
  };
  console.log("done with stringify");
  console.log(data);
  const rawResponse = await fetch(url, data);
  console.log(rawResponse);
  const content = await rawResponse.json();
  console.log(content);
  const message = `Record ${jewelObj.jId} added succesfully!! `;
  Swal.fire(message);
  loadTable();
}
// async function userEdit() {
//   const id = document.getElementById("iid").value;
//   const name = document.getElementById("iname").value;
//   const material = document.getElementById("imaterial").value;
//   const sku = document.getElementById("isku").value;
//   const price = document.getElementById("iprice").value;

//   const jewelObj = {
//     jId: id,
//     jName: name,
//     jMaterial: material,
//     jSKU: sku,
//     jPrice: price,
//   };

//   const url = "http://"+basehost+"/jewellery";

//   // const data = {
//   //   method: "PUT",
//   //   headers: {
//   //     Accept: "application/json",
//   //     "Content-Type": "application/json",
//   //     "Access-Control-Allow-Origin": null,
//   //     "Access-Control-Allow-Methods": "*",
//   //   },
//   //   body: JSON.stringify(jewelObj),
//   // };

//   const data = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jewelObj),
//   };
//   const rawResponse = await fetch(url, data);
//   const content = await rawResponse.json();
//   userDelete(id);

//   // const xhttp = new XMLHttpRequest();
//   // xhttp.open("PUT", "https://www.mecallapi.com/api/users/update");
//   // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   // xhttp.send(
//   //   JSON.stringify({
//   //     id: id,
//   //     fname: fname,
//   //     lname: lname,
//   //     username: username,
//   //     email: email,
//   //     avatar: "https://www.mecallapi.com/users/cat.png",
//   //   })
//   // );

//   // xhttp.onreadystatechange = function () {
//   // if (this.readyState == 4 && this.status == 200) {
//   // const objects = JSON.parse(this.responseText);
//   Swal.fire("Record edited successfully!!");
//   loadTable();
//   // }
// }
async function showUserEditBox(id) {
  console.log(id);

  const url = "http://" + basehost + "/api/jewellery/" + id;

  // const xhttp = new XMLHttpRequest();
  // xhttp.open("GET", "https://www.mecallapi.com/api/users/" + id);
  // xhttp.send();
  // xhttp.onreadystatechange = function () {
  const data = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  const rawResponse = await fetch(url, data);
  console.log(rawResponse);
  let content = await rawResponse.text();
  console.log(content);
  const jsonObj = JSON.parse(content);
  console.log(jsonObj);
  let obj = jsonObj;

  // const objects = JSON.parse(this.responseText);
  // const user = objects["user"];
  // console.log(user);
  Swal.fire({
    title: "Edit Listing",
    html:
      // '<input id="editiid" class="swal2-input" placeholder="Id" value="' +
      // obj.jId +
      // '">' +
      '<input id="editiname" class="swal2-input" placeholder="Name" value="' +
      obj.jName +
      '">' +
      '<input id="editimaterial" class="swal2-input" placeholder="Material" value="' +
      obj.jMaterial +
      '">' +
      '<input id="editisku" class="swal2-input" placeholder="SKU" value="' +
      obj.jSKU +
      '">' +
      '<input id="editiprice" class="swal2-input" placeholder="Price" value="' +
      obj.jPrice +
      '">',
    focusConfirm: false,
    preConfirm: () => {
      async function deleteput() {
        const url = "http://" + basehost + "/api/jewellery/" + id;
        const data = {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: null,
        };
        const rawResponse = await fetch(url, data);
      }
      userEdit(id);
    },
  });
}

async function userEdit(id) {
  // const id = document.getElementById("editiid").value;
  const name = document.getElementById("editiname").value;
  const material = document.getElementById("editimaterial").value;
  const sku = document.getElementById("editisku").value;
  const price = document.getElementById("editiprice").value;

  // const xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "https://www.mecallapi.com/api/users/create");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(
  //   JSON.stringify({
  //     fname: fname,
  //     lname: lname,
  //     username: username,
  //     email: email,
  //     avatar: "https://www.mecallapi.com/users/cat.png",
  //   })w
  // );
  const jewelObj = {
    jId: id,
    jName: name,
    jMaterial: material,
    jSKU: sku,
    jPrice: price,
  };

  const url = "http://" + basehost + "/api/jewellery";
  const data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jewelObj),
  };
  console.log("done with stringify");
  console.log(data);
  const rawResponse = await fetch(url, data);
  console.log(rawResponse);
  const content = await rawResponse.json();
  console.log(content);
  const message = `Record ${jewelObj.jId} edited succesfully!! `;
  Swal.fire(message);

  loadTable();
}

async function userDelete(id) {
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("DELETE", "https://www.mecallapi.com/api/users/delete");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(
  //   JSON.stringify({
  //     id: id,
  //   })
  const url = "http://" + basehost + "/api/jewellery/" + id;
  const data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: null,
  };
  const rawResponse = await fetch(url, data);

  const message = "Record " + id + " deleted!! ";
  Swal.fire(message);
  loadTable();
}
