function saveJsonToDrive(jsonData) {
  var folder = getOrCreateFolder(FOLDER_NAME);
  var file = folder.getFilesByName(FILE_NAME);
  var content = JSON.stringify(jsonData, null, 2);

  if (file.hasNext()) {
    file.next().setContent(content);
  } else {
    folder.createFile(FILE_NAME, content, MimeType.JSON);
  }
}

function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return DriveApp.createFolder(folderName);
  }
}

function getJsonFromDrive() {
  var folder = getOrCreateFolder(FOLDER_NAME);
  var file = folder.getFilesByName(FILE_NAME);

  if (file.hasNext()) {
    var content = file.next().getBlob().getDataAsString();
    return JSON.parse(content);
  } else {
    return null;
  }
}
