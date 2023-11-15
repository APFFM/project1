document.getElementById('ticker-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var ticker = document.getElementById('ticker-input').value;
  fetchResults(ticker);
});

function fetchResults(ticker) {
  // Here you would call your server-side script to process the ticker and get the HTML
  var url = 'YOUR_SERVER_ENDPOINT' + ticker;

  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      // Open the HTML in a new tab
      var newWindow = window.open();
      newWindow.document.write(html);
      newWindow.document.close();
    })
    .catch(function(err) {
      console.error('Failed to fetch data', err);
    });
}
