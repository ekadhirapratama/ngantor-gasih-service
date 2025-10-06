function doGet(e) {
  var path = e.parameter.path;
  // Example path: api/v1/schedule/full%20name
  if (path.includes('api/v1/schedule')) {
    var slug = path.split('/');
    if (slug.length !== 4) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid path format.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var name = slug[3].replaceAll('%20', ' ');
    var scheduleData = getJsonFromDrive();

    if (!scheduleData) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Schedule data not found.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (name) {
      var filteredData = scheduleData.filter(function(item) {
        return item.nama_lengkap.toLowerCase().includes(name.toLowerCase());
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
