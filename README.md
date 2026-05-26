# Museum Ovartaci – Interaktiv Quizoplevelse

### Indhold i README.md 
1. Projektbeskrivelse
2. Hvad er projektet er udviklet i 
3. Fokusområder
4. W3C-validering
5. Projektstruktur + Strukturforklaring
6. Web conventions
7. Navngivning af variabler og funktioner
8. ORCA-tabel og data mapping
9. Mapping til JavaScript datastruktur
10. JavaScript-teknologier
11. Anvendelse af localStorage
12. Dynamisk feedback
13. Kodeeksempel – DOM manipulation
14. Kommentarer i koden
15. GitHub-samarbejde
16. JavaScript-biblioteker
17. Centrale designvalg
18. Refleksion
19. Konklution

<br></br>

## Projektbeskrivelse
Dette projekts mål er, at skabe en interaktiv digital museumsoplevelse for Museum Ovartaci.

Vores løsningen består af en quizbaseret prototype, som skal engagere unge museumsbesøgende gennem aktiv deltagelse, læring og interaktion i det fysiske museumsrum.

##### **Projektet er udviklet i:**
* HTML
* CSS
* JavaScript

##### **Fokusområder:**
* Interaktionsdesign
* UX/UI
* Storytelling
* Dynamisk feedback
* localStorage
* Immersive experiences
* OOUX
* Informationsarkitektur

<br></br>

### W3C-validering
Projektets HTML- og CSS-filer er begge valideret. Validering blev brugt løbende for at bla. mindske fejl.

#### index.html <p>valideret igennem: W3C HTML</p> Validator
    
#### style.css <p>valideret igennem: W3C CSS Validator </p>

<br></br>

### Projektstruktur
![billede af mappestruktur](/img/mappestruktur.png)

##### Strukturforklaring


Hvad indeholder din htmlfil?
Hvad bruger du dit csskort til?
Hvad bruger du dit jskort til?
Hvor ligger dine billeder?
Hvorfor har du valgt denne struktur?

| Mappe/File       | Funktion                                                   |
| ---------------- | ---------------------------------------------------------- |
| **ovartaci-case**          | Rodemappe, indeholder undermapper og filer derunder. <br></br>    |
|                  |                                |
| ```index.html```   | Vores ```index.html``` er delt op i flere sections, som hver fungerer som en “skærm” i quizzen. <br></br> Den første section er forsiden, hvor brugeren kan starte quizzen. <br></br> Derefter kommer en section til alias-siden, hvor brugeren indtaster et alias. Her findes også divs til keyboard-knapperne. <br></br> Herefter kommer quiz-sectionen, som indeholder spørgsmål, billeder og svar samt en topbar med progress bar og spørgsmåls-tæller. <br></br> Dernæst er der en feedback-section, som viser om svaret er rigtigt eller forkert samt en forklaring. <br></br> Til sidst er der en score-section, hvor brugeren kan se sit resultat og scoreboard. <br></br> Alle skærme er samlet i én HTML-fil og vises/skjules dynamisk uden at skifte side. <br></br>                |
|                  |                                |
| ```css``` mappe indeholder 1 css fil        |     |
| ```style.css```  | Vores ```style.css``` bruger vi til at styre designet og layoutet på vores quizsider. <br></br> Det bruges til at gøre siderne visuelt overskuelig med farver, skrifttyper, baggrunde og placering af elementer. <br></br> Derudover bruger vi det til at vise og skjule de forskellige screens og tilføje animationer og interaktioner som fx knap-effekter og transitions. <br></br>             |
|                  |                                |  
| ```js``` mappe, indeholder 2 js filer          |   |
| ```script.js```  | ```script.js``` styrer hele quiz  funktionaliteten og er vores primær quizlogik. Den indeholder spørgsmålene, håndterer navigation mellem skærme og registrerer brugerens svar og score. <br></br> Derudover bruges ```script.js``` til at opdatere progress bar, vise feedback, gemme og hente data fra localStorage samt generere scoreboardet dynamisk.                |
| ```alias.js```   | ```alias.js``` styrer alias-siden og tastaturert. Den håndterer indtastning af tekst i inputfeltet, inklusive bogstaver, mellemrum og backspace. Derudover kan brugeren skifte mellem store og små bogstaver med shift-knappen. <br></br> Filen gør det muligt at taste på et bogstav og så kommer det frem i indputfeltet - da tasteturert skal være på en touchskærm og ikke skal bruges som et almindeligt tastatur. <br></br>              |
|                  |                                |
| ```img``` mappe som indeholder alle vores billeder       |              |
| alias.png        | Billede                        |
| baggrund.png     | Billede                        |
| forside.png      | Billede                        |
| mappestruktur.png| Billede                        |
| ovi-hehe.png     | Billede                        |
| ovi-smile.png    | Billede                        |
| ovi.png          | Billede                        |
| scorreboard.png  | Billede                        |