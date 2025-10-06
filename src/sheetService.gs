function generateScheduleData() {
  var spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error('Sheet "' + SHEET_NAME + '" not found.');
  }

  var values = sheet.getDataRange().getValues();

  var dataArray = [];
  var dateRow = values[2]; // Row 3 (0-indexed) contains dates (01, 02, ...)

  var month = SHEET_NAME_MONTH;
  var year = "2025"; // Assuming the year is 2025 based on sample data

  if (!month) {
    Logger.log("Could not determine month from sheet name: " + SHEET_NAME);
    return [];
  }

  var yearMonth = year + "-" + month;

  for (var i = 5; i < 56; i++) { // Rows 6 to 57 (0-indexed)
    var row = values[i];
    if (!row || !row[1]) continue; // Skip if row is empty or nama_lengkap is missing

    var nama_lengkap = row[1]; // Column B (0-indexed)

    var wfoDates = [];
    var dwaDates = [];
    var lncbDates = [];

    for (var j = 13; j < 43; j++) { // Columns M to AP (0-indexed)
      var cellValue = row[j];
      var dateCell = dateRow[j]; // Get the date cell from the date row

      if (cellValue && dateCell !== undefined) {
        var day = null;

        if (dateCell instanceof Date) {
          day = dateCell.getDate();
        } else if (typeof dateCell === 'number') {
          // Assuming it's just the day number if it's a number
          day = dateCell;
        } else if (typeof dateCell === 'string') {
          // Attempt to parse as string, assuming it's just the day number
          day = parseInt(dateCell, 10);
        }

        if (day && !isNaN(day)) {
          var formattedDay = String(day).padStart(2, '0');
          var fullDate = yearMonth + "-" + formattedDay;

          if (cellValue === "WFO") {
            wfoDates.push(fullDate);
          } else if (cellValue === "DWA") {
            dwaDates.push(fullDate);
          } else if (cellValue === "LN" || cellValue === "CB") {
            lncbDates.push(fullDate);
          }
        } else if (dateCell !== undefined) {
          Logger.log("Could not parse day from date cell: " + dateCell);
        }
      }
    }

    dataArray.push({
      nama_lengkap: nama_lengkap,
      WFO: wfoDates,
      DWA: dwaDates,
      "LN/CB": lncbDates,
    });
  }
  return dataArray;
}
