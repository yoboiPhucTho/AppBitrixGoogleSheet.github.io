function addData() {
    const scope = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'];
    gapi.client.init({
        apiKey: 'AIzaSyAjSVfwp6v41Yw6EM3xxZo9GrupraMZAoM',  // Replace with your API key
        clientId: '106255217177064575479',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: scope,
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
    //test chuc nang nhap du lieu
    const id = "1";
    const name = "Tho";
    const invoice_num = "1"; 
    const created_by = "Tho";
    const responsible = "Tho";
    const invoice_date = "27/02/2003";
    const pay_before = "27/01/2003";
    const stage = "Mới";

    // Build values array
    const values = [
    [id, name, invoice_num, created_by, responsible, invoice_date, pay_before, stage]
    ];

    // Append data to sheet
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1K9Jsf2i7Iw-yWIziGvlQoJ-s_22wHHCSQaIzhM7Us94',
        range: 'Invoice Beliy', // Update range as needed
        majorDimension: 'ROWS',
        valueInputOption: 'RAW', // Use RAW for unformatted data
        insertDataOption: 'INSERT_ROWS',  
        resource: { values },
    }).then(function(response) {
        console.log('Data added successfully!');
    // Clear form fields and show confirmation message
    }, function(error) {
        console.error('Error adding data:', error.result.error.message);
    });
    }
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


// function addData (){
//   const scope = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'];
// gapi.load('client', function() {
//   gapi.auth2.init({
//     apiKey: 'AIzaSyAjSVfwp6v41Yw6EM3xxZo9GrupraMZAoM',
//     clientId: '106255217177064575479',
//     discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//     scope: scope,
//   }).then(function () {
//     // Define spreadsheet ID and range
//     const spreadsheetId = '1K9Jsf2i7Iw-yWIziGvlQoJ-s_22wHHCSQaIzhM7Us94D';
//     const rangeName = 'Invoice Beliy';

//     // Prepare data to update
//     const values = [['New value 1', 'New value 2'], ['Another new value', 'Another new value']];

//     // Build the request body
//     const body = {
//       values: values,
//       };

//     // Send append request
//     gapi.client.sheets.spreadsheets.values.append({
//       spreadsheetId: spreadsheetId,
//       range: rangeName,
//       valueInputOption: 'USER_ENTERED',
//       resource: body,
//     }).then(function(response) {
//       // Check for errors
//       if (response.error) {
//         console.error(response.error.message);
//       } else {
//         console.log(`Successfully updated cells at range: ${rangeName}`);
//       }
//     });
//   });
// });
// }
