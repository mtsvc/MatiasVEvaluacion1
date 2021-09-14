const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

function validateForm(){
    const username = document.getElementById("username").value; 
	const password = document.getElementById("password").value; 

	console.log("testing")


	if(username == "juanito" && password == "123")
    {
		location.href = 'page1.html';
	
	}
	else

	{
	alert("Credenciales incorrectas");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
