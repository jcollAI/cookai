# CookAI 1.2 — receptes reals i eines de cuina

HTML/CSS/JavaScript amb una funció Node a Vercel (`api/search.js`). Sense dependències de producció.

## Funcions
- Cerca de receptes reals a TheMealDB, ingredients, preparació, fotos, vídeo i font.
- Cerca per nom, ingredients, coincidència parcial/total i rànquing per despensa.
- Equivalències de termes habituals català/castellà/anglès (no és una traducció completa).
- Favorits amb còpia local de la recepta, perfil, exclusió d'ingredients i filtres.
- Cuina pas a pas, temporitzador persistent, quantitats proporcionals i adaptacions locals orientatives.
- Llista de compra independent: afegir, editar, eliminar, marcar i netejar comprats.
- Importació de `cookai2_*` i `cookai_real_*` sense esborrar les claus originals.

## Informació absent i límits
No inventem temps, dificultat, nutrició ni racions. L'usuari pot anotar temps, dificultat, racions originals i etiqueta pròpia d'alta proteïna. El filtre vegetarià utilitza la categoria Vegetarian/Vegan de la font; no verifica al·lèrgens. Els filtres de temps només inclouen receptes amb dades anotades. Sense racions originals s'ofereix un multiplicador de quantitats.

Les referències als favorits de les sis receptes fictícies antigues es preserven, però no es mostren com a receptes reals. La nova app no inclou receptes de demostració.

Les instruccions originals es divideixen per paràgrafs per al mode de cuina; no es generen passos. Les alternatives d'ingredients són regles locals orientatives, no una IA ni garanties alimentàries.

TheMealDB té cobertura limitada, principalment en anglès. Les consultes per ingredients utilitzen fins a sis ingredients per recuperar un màxim de 24 candidats; la coincidència es calcula amb la llista completa. No és una cerca exhaustiva. Les equivalències són literals, no un detector semàntic.

## Brave
Configura `BRAVE_API_KEY` com a variable privada/Secret a Vercel, en Production (i Preview si cal), i torna a desplegar. No la posis al frontend ni al repositori. Brave aporta enllaços web, no ingredients estructurats; els filtres locals no s'apliquen a aquests enllaços. La UI diferencia absència de configuració, error i límit de consultes. TheMealDB funciona sense Brave.

## Desenvolupament
Node 22 o superior. `npm start` obre el servidor a http://localhost:3000. `npm test` executa les proves. Si necessites Brave localment, proporciona la variable mitjançant el teu gestor de secrets o l'entorn.

## Publicació
Projecte existent Vercel: `cookai-receptes`. Repositori: `jcollAI/cookai`, branca `main`. Framework Other, arrel del repositori, sense build command ni output directory. No crear un projecte nou.

Les dades es guarden només al navegador i al domini actual; no hi ha comptes ni sincronització. El canvi de domini no trasllada localStorage.
