// front end js for adding a maintenance log

async function maintHandler(event) {
    event.preventDefault()
        const oil = document.querySelector('input[name="oil"]').value;
        const tire = document.querySelector('input[name="tire"]').value;
        const plugz = document.querySelector('input[name="spark"]').value;
        const filter = document.querySelector('input[name="air"]').value;
        const notes = document.querySelector('input[name="notes"]').value;
    
        if(oil && tire && plugz && filter && notes) {
            const response = await fetch('/api/maintlogs/', {
                method: 'post',
               
                body:  JSON.stringify({ notes,   
                    oil,
                    tire,
                    plugz,
                    filter, 
                   
                }),
                headers: {'Content-Type': 'application/json'}
              
                
            })
            if(response.ok) {
                console.log(response);
            }else{
                alert(response.statusText)
            }
        
        }
    };

    document.querySelector('.log').addEventListener('submit', maintHandler)