import { model } from '../model';

export function dashboardView() {
    const appElement = document.getElementById("app");
    if (!appElement) return;

    const currentUser = model.data.users.find(u => u.id === model.data.session.userid);

    if (!currentUser) {
        appElement.innerHTML = "<h1>Feil</h1><p>Bruker ikke funnet. Vennligst logg inn på nytt.</p>";
        return;
    }

    let accountsHtml = "";
    
    // Vis brukskontoer
    currentUser.brukskonto.forEach(acc => {
        accountsHtml += `
            <div class="account-card">
                <h3>${acc.name}</h3>
                <p>Kontonummer: ${acc.id}</p>
                <p>Saldo: <strong>${acc.sum} kr</strong></p>
            </div>
        `;
    });

    // Vis sparekontoer
    currentUser.savings.forEach(acc => {
        accountsHtml += `
            <div class="account-card saving">
                <h3>${acc.name}</h3>
                <p>Kontonummer: ${acc.id}</p>
                <p>Saldo: <strong>${acc.sum} kr</strong></p>
                <p><small>Rente: ${acc.rent}%</small></p>
            </div>
        `;
    });

    appElement.innerHTML = /*HTML*/`
        <div class="dashboard-container">
            <div class="header-actions">
                <h2>Velkommen, ${currentUser.name}!</h2>
                <button onclick="logout()" class="btn">Logg ut</button>
            </div>
            <div class="accounts-grid">
                ${accountsHtml}
            </div>
        </div>
        
        <style>
            .dashboard-container { max-width: 800px; margin: 0 auto; }
            .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
            .accounts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .account-card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #f9f9f9; }
            .account-card.saving { border-left: 5px solid #4CAF50; }
            .account-card h3 { margin-top: 0; }
        </style>
    `;
}
