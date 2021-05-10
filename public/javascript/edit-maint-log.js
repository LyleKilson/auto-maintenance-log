// front end js for editing a maintenance log

async function editLog(event) {
    event.preventDefault();

         const oil = document.querySelector('input[name="oil"]').value;
        const tire = document.querySelector('input[name="tire"]').value;
        const plugz = document.querySelector('input[name="spark"]').value;
        const filter = document.querySelector('input[name="air"]').value;
        const notes = document.querySelector('input[name="notes"]').value;
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];

        const response = await fetch(`/api/maintlogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                oil,
                tire,
                plugz,
                filter,
                notes 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.replace('/maintlog');
        }else{
            alert(response.statusText);
            console.log(response);
        }
    
}

document.querySelector('.edit-log-form').addEventListener('submit', editLog);