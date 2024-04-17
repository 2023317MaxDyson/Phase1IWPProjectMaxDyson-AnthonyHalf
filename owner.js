
// Listens for the Add Properties button when its clicked 

document.getElementById("addProperties").addEventListener('click', function (){
    

    let Name  = document.getElementById("Name").value
    let propertyAddress = document.getElementById("propertyAddress").value
    let Neighbourhood = document.getElementById("Neighbourhood").value
    let AvailibiltyDate = document.getElementById("AvailibiltyDate").value
    let LeaseTerm = document.getElementById("leaseTerm").value
    let Price = document.getElementById("Price").value
    let Preferredwork = document.getElementById("Preferredwork").value
   let Parking = document.getElementById("Parking").value 
   let Transportation = document.getElementById("Transportation").value
   let Smoking = document.getElementById("Smoking").value
   let Number =  document.getElementById("Number").value


   // Fetch the workspace data with the post method 

 fetch('http://localhost:5000/workspace', {

 
 method :'POST',


 // Lists all the workspace properties 

body: JSON.stringify({

propertyName: Name,
propertyAddress: propertyAddress,
Neighbourhood: Neighbourhood,
AvailibiltyDate: AvailibiltyDate,
LeaseTerm: LeaseTerm,
Price : Price,
Preferredwork: Preferredwork,
Parking: Parking,
Transportation: Transportation,
Smoking : Smoking,
Capacity: Number

}),

 headers: {
    'Content-type': 'application/json', charset: 'UTF-8',
 },

})

// Send the request back to the server 
 .then((res) => res.json())


})







