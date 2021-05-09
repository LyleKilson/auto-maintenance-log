async function editVehicle(event) {
    event.preventDefault();

    const make = document.querySelector('#make').value.trim();
    const model = document.querySelector('#model').value.trim();
    const year = document.querySelector('#year').value
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/vehicle/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
              make,
              model,
              year 
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if(response.ok) {
          document.location.replace('/dashboard');
      }else{
          alert(response.statusText);
      }

};

document.querySelector('.edit-vehicle').addEventListener('submit', editVehicle);