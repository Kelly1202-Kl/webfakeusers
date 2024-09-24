async function gerarUsuario(){
    var inputsRadio = document.getElementsByTagName("input");
    var gender = "";
    var inputSelect = document.querySelector("select");

    inputSelect.value;

    if (inputsRadio[0].checked) {
    gender = inputsRadio[0].value;
} 
   else if (inputsRadio[1].checked) {
    gender = inputsRadio[1].value;
}
  else if (inputsRadio[2].checked) {
    gender = inputsRadio[2].value;
}
  var valueSelect = document.querySelector("select").value;
   //https://randomuser.me/api/?results=1&gender=&nat=br
   var resposta = await fetch("https://randomuser.me/api/?results=" + valueSelect + "&nat=br&gender= + gender" + gender);
   var dados = await resposta.json();
   var allUsers = dados.results;
   var name;

   var allFakeUsers = document.querySelector(".allFakeUsers");
   allFakeUsers.innerHTML = "";

   for(i=0; i < allUsers.length; i++){
    name = allUsers[i].name;
    console.log(name.first + " " + name.last);

    var fakeUser = document.createElement("div");
    fakeUser.classList.add("fakeuser");

    fakeUser.innerHTML = `<center><img  width="170" src="${allUsers[i].picture.large}"></center>

            <p><b>Nome:</b> <span>${name.first + " " +name.last}</span></p>
			<p><b>Email:</b> <span>${allUsers[i].email}</span></p>
			<p><b>Nascimento:</b> <span>${allUsers[i].dob.date}</span></p>
			<p><b>Endrereço:</b> <span>${allUsers[i].location.city}</span></p>
		</div>`;
    allFakeUsers.appendChild(fakeUser);

   }
}