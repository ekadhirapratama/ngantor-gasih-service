# Ngantor Gasih Service

This project provides a service for automating various tasks, likely integrated with Google Workspace services such as Google Sheets and Google Drive. It's designed to streamline office-related workflows and data management.

## Features

*   **Google Sheets Integration:** Interact with Google Sheets for data reading, writing, and manipulation.
*   **Google Drive Management:** Automate file and folder operations within Google Drive.
*   **API Endpoints:** Expose functionality through custom API endpoints for external access (if applicable).
*   **Scheduled Tasks:** Potentially run automated tasks on a schedule.

## Project Structure

The core logic of the service resides in the `src/` directory, containing Google Apps Script (`.gs`) files:

*   `src/main.gs`: Entry point or main logic of the application.
*   `src/api.gs`: Handles API-related functions and endpoints.
*   `src/constants.gs`: Defines constants used throughout the project.
*   `src/driveService.gs`: Contains functions for interacting with Google Drive.
*   `src/sheetService.gs`: Contains functions for interacting with Google Sheets.

Other files include:

*   `CONTEXT.md`: Provides additional context or documentation.
*   `references.ts`: Likely contains type definitions or references for development.
*   `sample-data.json`: Example data in JSON format.
*   `sample-data.xlsx`: Example data in Excel format.

## Setup

This project is intended to be deployed as a Google Apps Script. The setup typically involves:

1.  **Creating a new Google Apps Script project:** Go to `script.google.com/home/start` and create a new project.
2.  **Copying source files:** Copy the contents of the `.gs` files from the `src/` directory into your Google Apps Script project.
3.  **Enabling necessary services:** Enable Google Sheets API, Google Drive API, and any other required Google services in the Google Apps Script project's "Services" section.

## Usage

Once deployed, the service can be used to automate tasks. Specific usage will depend on the implemented functions and how they are exposed (e.g., via web app, API calls, or triggered events).

## Contributing

Contributions are welcome! Please ensure your code adheres to the existing style and practices.
