async function loadTable() {
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("GET", "https://www.mecallapi.com/api/users");
  const url = "http://localhost:8080/api/jewelleryall";

  let response = await fetch(url);
  let jsonStr = await response.text();
  console.log(jsonStr);
  const jsonObj = JSON.parse(jsonStr);
  const data = jsonObj;

  // xhttp.send();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {

  var trHTML = "";
  // const objects = JSON.parse(this.responseText);
  for (let x in data) {
    let obj = data[x];
    trHTML += "<tr>";
    trHTML += "<td>" + obj.jId + "</td>";
    trHTML +=
      '<td><img width="100px" src="https://i.kym-cdn.com/entries/icons/mobile/000/021/703/smiley-face-thumbs-up-thank-you-clipart-panda-free-clipart-images-4eZHzt-clipart.jpg" class="avatar"></td>';
    trHTML += "<td>" + obj.jName + "</td>";
    trHTML += "<td>" + obj.jMaterial + "</td>";
    trHTML += "<td>" + obj.jSKU + "</td>";
    trHTML += "<td>" + obj.jPrice + "</td>";
    trHTML +=
      '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' +
      obj.jId +
      ')">Edit</button>';
    trHTML +=
      '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' +
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
      '<input id="iid" class="swal2-input" placeholder="Id">' +
      '<input id="iname" class="swal2-input" placeholder="Name">' +
      '<input id="imaterial" class="swal2-input" placeholder="Material">' +
      '<input id="isku" class="swal2-input" placeholder="SKU">' +
      '<input id="iprice" class="swal2-input" placeholder="Price">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    },
  });
}

async function userCreate() {
  const id = document.getElementById("iid").value;
  const name = document.getElementById("iname").value;
  const material = document.getElementById("imaterial").value;
  const sku = document.getElementById("isku").value;
  const price = document.getElementById("iprice").value;

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

  const url = "http://localhost:8080/api/jewellery";
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
  const content = await rawResponse.json();
  Swal.fire("Record added succesfully!!");
  loadTable();
}

async function showUserEditBox(id) {
  console.log(id);

  const url = "http://localhost:8080/api/jewellery/" + id;

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
  const jsonObj = JSON.parse(content);
  let obj = jsonObj;

  // const objects = JSON.parse(this.responseText);
  // const user = objects["user"];
  // console.log(user);
  Swal.fire({
    title: "Edit Listing",
    html:
      '<input id="iid" type="hidden" value=' +
      obj.jId +
      ">" +
      '<input id="iname" class="swal2-input" placeholder="Name" value="' +
      obj.jName +
      '">' +
      '<input id="imaterial" class="swal2-input" placeholder="Material" value="' +
      obj.jMaterial +
      '">' +
      '<input id="isku" class="swal2-input" placeholder="SKU" value="' +
      obj.jSKU +
      '">' +
      '<input id="iprice" class="swal2-input" placeholder="Price" value="' +
      obj.jPrice +
      '">',
    focusConfirm: false,
    preConfirm: () => {
      userEdit();
    },
  });
}

async function userEdit() {
  const id = document.getElementById("iid").value;
  const name = document.getElementById("iname").value;
  const material = document.getElementById("imaterial").value;
  const sku = document.getElementById("isku").value;
  const price = document.getElementById("iprice").value;

  const jewelObj = {
    jId: id,
    jName: name,
    jMaterial: material,
    jSKU: sku,
    jPrice: price,
  };

  const url = "http://localhost:8080/jewellery";

  const data = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify(jewelObj),
  };
  const rawResponse = await fetch(url, data);
  const content = await rawResponse.json();

  // const xhttp = new XMLHttpRequest();
  // xhttp.open("PUT", "https://www.mecallapi.com/api/users/update");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(
  //   JSON.stringify({
  //     id: id,
  //     fname: fname,
  //     lname: lname,
  //     username: username,
  //     email: email,
  //     avatar: "https://www.mecallapi.com/users/cat.png",
  //   })
  // );

  // xhttp.onreadystatechange = function () {
  // if (this.readyState == 4 && this.status == 200) {
  // const objects = JSON.parse(this.responseText);
  Swal.fire("Record edited successfully!!");
  loadTable();
  // }
}

async function userDelete(id) {
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("DELETE", "https://www.mecallapi.com/api/users/delete");
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhttp.send(
  //   JSON.stringify({
  //     id: id,
  //   })
  const url = "http://localhost:8080/api/jewellery/" + id;
  const data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: null,
  };
  const rawResponse = await fetch(url, data);

  Swal.fire("Record deleted!!");
  loadTable();
}
