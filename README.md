# Account Management System (Bank1)

Dette er en moderne webapplikasjon for kontohåndtering, migrert fra JavaScript til **TypeScript** med **Vite** som byggverktøy. Prosjektet følger en modulær MVC-struktur (Model-View-Controller) med et klart skille mellom kildekode og genererte filer.

## 🚀 Teknologistakk

- **Frontend:** HTML5, CSS3, TypeScript
- **Byggverktøy:** [Vite](https://vitejs.dev/)
- **Språk:** [TypeScript](https://www.typescript.org/)
- **Arkitektur:** MVC (Model-View-Controller)

## 📋 Beskrivelse

Applikasjonen simulerer en banktjeneste (Sparebank1) hvor brukere kan:
- Registrere seg med personnummer, navn og e-post.
- Logge inn sikkert.
- Se oversikt over brukskontoer og sparekontoer (Dashboard).
- Utføre overføringer mellom kontoer.
- Håndtere profilinformasjon.

Prosjektet er nå fullstendig type-sikkert, som reduserer sjansen for "runtime"-feil og gjør koden lettere å vedlikeholde. Kildekoden skrives i TypeScript og kompileres automatisk til JavaScript.

## 🛠 Installasjon og Oppstart

### Forutsetninger
- [Node.js](https://nodejs.org/) (versjon 18 eller nyere anbefales)
- npm (følger med Node.js)

### Steg for steg

1.  **Klone prosjektet:**
    ```bash
    git clone https://github.com/krigjo25/webapp-AccountManagement_System-js.git
    cd webapp-AccountManagement_System-js
    ```

2.  **Installere avhengigheter:**
    ```bash
    npm install
    ```
    *Merk: Hvis du jobber på et filsystem som ikke støtter symlinks (f.eks. Google Drive via WSL), bruk `npm install --no-bin-links`.*

3.  **Kjøre utviklingsserver:**
    ```bash
    npm run dev
    ```
    Applikasjonen vil være tilgjengelig på `http://localhost:5173`. Vite vil automatisk håndtere TypeScript-filene dine under utvikling.

4.  **Kompilere TypeScript manuelt:**
    Hvis du ønsker å generere JavaScript-filene i `statics/js`:
    ```bash
    npx tsc
    ```

5.  **Bygge for produksjon:**
    ```bash
    npm run build
    ```
    Dette vil kjøre type-sjekking og bygge en optimalisert versjon i `dist/`-mappen.

## 📂 Prosjektstruktur

- `index.html`: Inngangspunkt for applikasjonen.
- `statics/ts/`: **Kildekode (TypeScript)**
    - `main.ts`: Hovedlogikk og ruting (Inngangspunkt for JS).
    - `model.ts`: Datamodellen og tilstandshåndtering.
    - `types.ts`: TypeScript-grensesnitt (interfaces).
    - `controller.ts`: Universelle kontrollere.
    - `login/`, `register/`, `dashboard/`: Modulspesifikke views og kontrollere.
- `statics/js/`: **Generert kode (JavaScript)**
    - Denne mappen er ignorert av Git og inneholder filene generert av TypeScript-kompilatoren.
- `tsconfig.json`: Konfigurasjon for TypeScript.
- `package.json`: Prosjektinformasjon og skript.

---
Utviklet som en del av Sparebank1 konsept-demo.
