// Write code here to communicate with Github
window.onload = getRepos;

function getListofRepos(user = "hheiress") {
  return fetch("https://api.github.com/users/" + user + "/repos")
    .then(function(responce) {
      //can replace it into ES6: responce=>{return responce.json()}
      return responce.json();
    })
    .then(data => {
      return data.map(item => {
        return item.name;
      });
    });
}

function getRepos() {
  let getList = document.querySelector("#repos-list");
  getList.innerHTML = "";
  let listOfRepo = getListofRepos("hheiress");
  listOfRepo.then(resp => {
    resp.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      getList.appendChild(li);
    });
  });
}
