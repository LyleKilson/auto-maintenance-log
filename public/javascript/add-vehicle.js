// front end js for adding a vehicle

async function createVehicleHandler(event) {
  event.preventDefault();

    const make = document.querySelector('#make').value.trim();
    const model = document.querySelector('#model').value.trim();
    const year = document.querySelector('#year').value.trim();
    
    
    
    if(make && model && year) {
        const response =  await fetch('/api/vehicle/', {
            method: 'post',
            body: JSON.stringify({
                make,
                model,
                year 
            }),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.ok) {
            console.log(response);
        }else{
            alert(response.statusText);
        }
    
        

    




   };

}


document.querySelector('.new-vehicle-form').addEventListener('submit', createVehicleHandler);
