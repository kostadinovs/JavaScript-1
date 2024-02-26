
async function fetchJoke(){
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        document.getElementById('joke').innerText = data.value;
        
    } catch (error) {
        console.error(error);
        document.getElementById('joke').innerText = 'Something went wrong! Check your internet';
    }
}