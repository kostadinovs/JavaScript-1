
// async function fetchJoke(){
//     try {
//         const response = await fetch('https://api.chucknorris.io/jokes/random');
//         const data = await response.json();
//         document.getElementById('joke').innerText = data.value;      
//     } catch (error) {
//         console.error(error);
//         document.getElementById('joke').innerText 
//              = 'Something went wrong! Check your internet connection...';
//     }
// }

function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke').innerText = data.value;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText 
            = 'Something went wrong! Check your internet connection...';
    });
}