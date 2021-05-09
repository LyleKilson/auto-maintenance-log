// front end js for editing a maintenance log
async function editMaint(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

    const oil = document.querySelector('input[name="oil"]').value.trim();
    const tire = document.querySelector('input[name="tire"]').value.trim();
    const plugz = document.querySelector('input[name="spark"]').value.trim();
    const filter = document.querySelector('input[name="air"]').value.trim();
    const notes = document.querySelector('input[name="notes"]').value.trim();

    const response = await fetch('/api/maintlogs/${id}', {
        method: 'PUT', 

        body:  JSON.stringify({ notes,   
            oil,
            tire,
            plugz,
            filter, 
           
        }),
        headers: {'Content-Type': 'application/json'}
});

    if(response.ok) {
    console.log(response);
    }else{
        alert('Error!' + response.statusText);
    }

    }
 

document.querySelector('.log').addEventListener('submit', editMaint);
