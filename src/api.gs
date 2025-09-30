function doGet(e) {
  var path = e.pathInfo;
  if (path === 'api/v1/schedule') {
    var name = e.parameter.q;
    var scheduleData = getJsonFromDrive();

    if (!scheduleData) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Schedule data not found.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (name) {
      var filteredData = scheduleData.filter(function(item) {
        return item.Nama.toLowerCase().includes(name.toLowerCase());
      });
      if (filteredData.length > 0) {
        return ContentService.createTextOutput(JSON.stringify(filteredData))
          .setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({ error: 'No schedule found for name: ' + name }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    } else {
      return ContentService.createTextOutput(JSON.stringify(scheduleData))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } else {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid endpoint.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
