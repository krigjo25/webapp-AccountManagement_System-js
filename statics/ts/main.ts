import { model } from './model';
import { loginView } from './login/view';
import { signupView } from './register/view';
import { dashboardView } from './dashboard/view';
import { handlelogin } from './login/controller';
import { registeration } from './register/controller';

export function updateView() {
    let page = model.app.page;
    // console.log("Updating view for page:", page);

    if (page === "signup") {
        signupView();
    } else if (page === 'dashboard') {
        dashboardView();
    } else {
        loginView();
    }
}

export function logout() {
    model.data.session.userid = null;
    model.app.page = "login";
    updateView();
}

// Attach functions to window for HTML onsubmit/onclick handlers
(window as any).handlelogin = handlelogin;
(window as any).registeration = registeration;
(window as any).updateView = updateView;
(window as any).logout = logout;

// Initial call
document.addEventListener('DOMContentLoaded', () => {
    updateView();
});
