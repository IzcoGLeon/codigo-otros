//se cambian los nombres de las constantes a una convención camelToe para que sea mas entendible
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameRef = document.querySelector('.name'); //Se corrigen referencias al atributo de clase 
const blogRef = document.querySelector('.blog');
const locationRef = document.querySelector('.location');

//Se agregó la función apra solicitud async ya que await no puede funcionar sin una declaración con async

async function displayUser(username) {
  nameRef.textContent = 'cargando...';

  //Necesario manejar excepciones y la solicitud fetch con try-catch

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //Se convierte en objeto el texto plano
    console.log(data);
    nameRef.textContent = `${data.name}`;
    blogRef.textContent = `${data.blog}`; //Se corrige la apostrofe para uso de template literals
    locationRef.textContent = `${data.location}`;
  } catch (error) {
    handleError(error); //Se coloca función que manejara la excepción de error dentro del bloque catch
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameRef.textContent = `Algo salió mal: ${err}`
}

// displayUser('stolinski');

//Se crea una función para que se pueda ingresar cualquer otro usuario a través de un campo de texto, esta acción y recopilación de datos y referencias se genera a través de la acción onclick del elemento button en el documento HTML
const getUsername = user => {
  const userRef = document.getElementById('user').value;
  displayUser(userRef);
}