// Methode pour insérer les informations d'un participant dans la base de données

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
        .then((response) => response.json())
       .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }

  // methode pour afficher la nourriture favorite des femmes agées de plus de 30 ans

  async function getfoods(){
    const rep = await fetch('http://localhost:3000/api/foods/women/foods', { method: 'GET' })
    .then((rep) => rep.json())
    .then((data) => {
      console.log('Success:', data);
  })
       
    .catch((error) => {
        console.error('Error:', error);
    });
}

  
  
  /*postData('http://localhost:3000/api/foods', { Timestamp: '04/01/2023 19:54:24', age:'45', city: 'Thiès',
weight:'56', height:'170', BMI:'13.3', salary: '10000', gender:'Female', qualification:'Master',
employment_status:'Employment', covid_vaccine:'No', marital_status:'Single',
copilot_user:'Yes', favourite_dish:'Salade' })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });*/

    
    getfoods();

  