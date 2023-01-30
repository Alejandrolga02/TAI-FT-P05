const results = document.querySelector("#results");

document.querySelector("#btnBuscar").addEventListener("click", async () => {
	const id = document.querySelector("#idUsuario").value;
	const url = "https://jsonplaceholder.typicode.com/users";

	try {
		let res = await axios.get(url);

		for (const datos of res.data) {
			if (id == datos.id) {
				document.querySelector("#txtNombre").value = datos.name;
				document.querySelector("#txtUsuario").value = datos.username;
				document.querySelector("#txtEmail").value = datos.email;
				document.querySelector("#txtCalle").value = datos.address.street;
				document.querySelector("#txtNumero").value = datos.address.suite;
				document.querySelector("#txtCiudad").value = datos.address.city;
				return;
			}
		}

		document.querySelector("#txtNombre").value = "";
		document.querySelector("#txtUsuario").value = "";
		document.querySelector("#txtEmail").value = "";
		document.querySelector("#txtCalle").value = "";
		document.querySelector("#txtNumero").value = "";
		document.querySelector("#txtCiudad").value = "";
		alert("No se encontró el registro");
	} catch (error) {
		console.error("Surgio un error" + error);
	}
});