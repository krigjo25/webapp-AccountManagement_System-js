# Sparebank1 Web Application
A functional banking application interface featuring secure login, fund transfers, and profile management within a modular MVC framework.

---

## Overview
This project is a prototype for a secure banking platform, developed to handle essential financial workflows. It provides a structured environment for users to manage their accounts, execute currency transfers, and update personal profiles. The application relies on a robust MVC (Model-View-Controller) architecture, ensuring that sensitive financial logic is strictly separated from the user interface.

## Core Features
* **Secure Authentication**: Dedicated modules for user login and registration to ensure data privacy.
* **Transaction Management**: A specialized transfer view for managing and executing movements between accounts.
* **Dashboard Overview**: A centralized hub providing a snapshot of account status and quick access to banking tools.
* **Modular Controller Logic**: Independent controllers for login, registration, and dashboard operations to maintain high code quality.
* **Profile Administration**: Interface for users to view and edit their personal banking credentials and settings.

## Installation and Technical Setup
The application is built using a decoupled JavaScript structure and can be hosted on any standard web server.

### Prerequisites
* A modern web browser.
* Access to the `statics/js/` directory containing the core logic.

### Deployment Steps
1.  **Extract Components**: Unzip the `js.tar.gz` and ensure the directory structure matches the references in `index.html`.
2.  **Initialize Environment**: Ensure `model.js` is loaded first to establish the global banking state.
3.  **Launch**: Open `index.html` to start the application at the default login gateway.

## Architecture
The system utilizes a granular MVC approach:
* **Global Model (model.js)**: Stores account balances, user data, and the current application state.
* **Feature Controllers**: Specialized files (e.g., `login/controller.js`, `transfer/controller.js`) manage specific user actions.
* **Dynamic Views**: View-specific scripts generate the HTML for the dashboard, signup, and profile screens.

## Contributors
Developed as a professional-grade financial interface focusing on modularity and user security.

---
*Building secure and intuitive digital banking experiences.*


Sincerely,
@krigjo25
