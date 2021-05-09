// front end js for deletind a maintenace log

async function deleteLog(event) {
    event.preventDefault();

     const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/maintlogs/${id}`, {
          method: 'DELETE'
      })

      if(response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText)
      }

};

document.querySelector('.delete').addEventListener('click', deleteLog);