# autoDesign
Vetrina responsive per un salone auto, sviluppata in JavaScript con React, Vite e GSAP.

## Sviluppo
Node.js 22.12+.

```sh
npm ci
npm run dev
npm run build
```

## GitHub Pages
Creare una repository pubblica `autoDesign`, caricare questo progetto sul branch `main` e selezionare **Settings → Pages → Source → GitHub Actions**. Il workflow pubblica automaticamente ogni push su main. URL previsto per Anto287: https://anto287.github.io/autoDesign/.

Il base path in `vite.config.js` è `/autoDesign/`; cambiarlo se si rinomina la repository.

## Personalizzazione
Modificare categorie e testi in `src/main.jsx`, colori e layout in `src/style.css`. Le immagini sono illustrative, caricate da Unsplash; i font sono serviti da Google Fonts. Non viene raccolto alcun dato tramite form. Prima dell'utilizzo commerciale aggiungere recapiti reali, inventario, dati societari e informazioni privacy appropriate al salone. Nessun prezzo, disponibilità o contatto inventato è presentato come reale.

Animazioni GSAP con ScrollTrigger, cleanup React e rispetto di prefers-reduced-motion. Menu mobile accessibile, filtri per categoria e navigazione interna.
