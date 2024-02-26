async function fetchQuote() {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/' + 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
      const data = await response.json();   
  
      const quoteText = data.quoteText;
      const quoteAuthor = data.quoteAuthor;
      document.getElementById('quote').innerText = 'Quote: ' + quoteText + ' Author: ' + quoteAuthor;
      
    } catch (error) {
      console.error('Error fetching Quote:', error);
      document.getElementById('quote').innerText = 'Something went wrong! Check your internet connection...';
    }
}