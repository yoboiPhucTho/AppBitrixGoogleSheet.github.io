//GET DATA FROM GOOGLE SHEET VIA API: SECTION START
function getData() {
    gapi.client.init({
      apiKey: 'AIzaSyAjSVfwp6v41Yw6EM3xxZo9GrupraMZAoM',  // Replace with your API key
      clientId: '106255217177064575479',
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      scope: 'https://www.googleapis.com/auth/spreadsheets',
    });

    gapi.client.load('sheets', 'v4', function() {
      var spreadsheetId = '1K9Jsf2i7Iw-yWIziGvlQoJ-s_22wHHCSQaIzhM7Us94';  // Replace with your spreadsheet ID
      var range = 'Invoice Beliy';  // Replace with your sheet and range
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then(function(response) {
        var values = response.result.values;
        displayDataInTable(values);
      }, function(error) {
        console.error('Error: ' + error.result.error.message);
      });
    });
  }
  //displaying dataTable
function displayDataInTable(data) {
    var table = document.getElementById('dataTable');
    
    // Clear existing table data
    table.innerHTML = "";

    // Add headers
    var headers = data.shift(); // Remove and get the first array (headers)
    var headerRow = table.insertRow(0);
    for (var i = 0; i < headers.length; i++) {
      var headerCell = headerRow.insertCell(i);
      headerCell.textContent = headers[i];
    }

    // Add data rows
    for (var i = 0; i < data.length; i++) {
      var row = table.insertRow(i + 1);
      for (var j = 0; j < data[i].length; j++) {
        var cell = row.insertCell(j);
        cell.textContent = data[i][j];
      }
    }
}

//GET DATA FROM GOOGLE SHEET VIA API: SECTION END