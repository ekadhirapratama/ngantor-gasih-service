# USER STORIES
- As a user, I want to convert spreadsheet into a JSON file.
- As a user, I want to consume data from a JSON file as a REST API.

# SCOPES & ASSUMPTIONS
- using environment and plugins from google-script and will be imported to https://script.google.com/
- sheet name is September (constant that maybe changed in the future)
- json format using @/sample-data.json
- all constants are defined in @/src/constants.gs

# ARCHITECTURES
```
/src
  main.gs            // entry point
  sheetService.gs    // urusan baca/olah spreadsheet
  driveService.gs    // simpan file JSON ke Google Drive
  api.gs             // endpoint Web App (doGet/doPost)
  constants.gs       // kumpulan konstanta yang bisa diubah
```

# TASKS
- [x] make a function in @/src/sheetService.gs to handle logic generating list data from the spreadsheet then make a format data using @/src/sample-data.json
- [x] make a function to handle logic saving JSON file to Google Drive in @/src/driveService.gs
- [x] make a function to calling generate data and save to Google Drive in @/src/main.gs (will be auto triggered daily)
- [x] make a function to handle logic getting data from JSON file from Google Drive in @/src/driveService.gs
- [x] endpoint GET '/api/v1/schedule?q={$name}' in @/src/api.gs by calling function getData in @/src/driveService.gs and find the data by name and return JSON, also handle if the data not found.