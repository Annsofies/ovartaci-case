# Museum Ovartaci – Interaktiv Quizoplevelse

### Indhold i README.md 
1. Projektbeskrivelse
2. Hvad er projektet er udviklet i 
3. Fokusområder
4. W3C-validering
5. Mappestruktur + Strukturforklaring
6. Web conventions
7. OOUX og ORCA-tabel
8. JavaScript datastruktur
9. Eksempel på JavaScript-kode

10. Anvendelse af localStorage
11. Dynamisk feedback
12. Kodeeksempel – DOM manipulation
13. Kommentarer i koden
14. GitHub-samarbejde
15. JavaScript-biblioteker
16. Centrale designvalg
17. Refleksion
18. Konklution

<br></br>

## 1. Projektbeskrivelse
Dette projekts mål er, at skabe en interaktiv digital museumsoplevelse for Museum Ovartaci.

Vores løsningen består af en quizbaseret prototype, som skal engagere unge museumsbesøgende gennem aktiv deltagelse, læring og interaktion i det fysiske museumsrum.



### 2. Projektet er udviklet i:
* HTML
* CSS
* JavaScript

### 3. Fokusområder:
* Interaktionsdesign
* UX/UI
* Storytelling
* Dynamisk feedback
* localStorage
* Immersive experiences
* OOUX
* Informationsarkitektur

<br></br>

## 4. W3C-validering
Projektets HTML- og CSS-filer er begge valideret. Validering blev brugt løbende for at bla. mindske fejl.

#### index.html <p>valideret igennem: W3C HTML</p> Validator
    
#### style.css <p>valideret igennem: W3C CSS Validator </p>

<br></br>

## 5. Mappestruktur
![billede af mappestruktur](/img/mappestruktur.png)

### Strukturforklaring
Vi har valgt denne struktur hvor hele quizen er samlet i én ```index.html``` med flere sektioner (screens), fordi vi syndes det gør det nemmere at styre navigationen med ```js``` efterfølgende. 

Hver section repræsenterer en “side” i quizzen, som vises og skjules dynamisk. På den måde har vi sluppet for at skulle oprette og skifte mellem flere html-filer.

Vi har valgt at opdele ```js``` i 2 filer, hvor keyboardet har fået sin egen side, da vi syndes det gav et bedre overblik for os.


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
| ooux.png         | Billede                        |
| orca.png         | Billede                        |
| ovi-hehe.png     | Billede                        |
| ovi-smile.png    | Billede                        |
| ovi.png          | Billede                        |
| scorreboard.png  | Billede                        |

<br></br>

## 6. Web conventions
Projektet følger almindelige web conventions:
* Alle filer navngives med lowercase
* Ingen danske bogstaver (æ, ø, å)
* camelCase og Kebab-case bruges konsekvent
* Mapper er organiseret

<br></br>

## 7. OOUX og ORCA-tabel
Vi anvendte OOUX og ORCA-metoden til at identificere centrale objekter i løsningen.


#### OOUX - Object Mapping
![billede af OOUX mapping-tabal](/img/ooux.png)


#### ORCA-TABEL
![billede af ORCA-tabal](/img/orca.png)

<br></br>

## 8. JavaScript datastruktur
For at vise vores datastruktur har vi valgt at vise et array fra vores ```script.js```- her har vi brugt et array af objekter til at gemme alle quiz-spørgsmål. 

Hvert objekt indeholder spørgsmål, svarmuligheder, korrekt svar, billede og feedback.  
Datastrukturen gør det nemt at styre quizzen dynamisk i JavaScript. 

(under ser man koden for de første 3 ud af 10)  

``` const questions = [
  {
    question: "Hvad betyder navnet ‘Ovartaci’?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Navnet Ovartaci forbindes med ordet ‘overtosse’ og indgår som en del af kunstnerens særlige identitet og fortælling.",
  },
  {
    question: "Hvor mange år var Ovartaci indlagt?",
    answers: ["12 år", "24 år", "56 år"],
    correctIndex: 2,
    image:
      "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov.",
  },
  {
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis univers.",
  },
]; 
```


<br></br>

## 9. Eksempel på JavaScript-kode
**Hvad vil vi vise:** Denne funktion indsætter bogstav i inputfeltet dér, hvor cursoren står.

``` // Indsætter tekst dér hvor cursoren står
function insertAtCursor(text) {
  const currentText = input.value;

  // Stopper hvis alias er på max længde
  if (currentText.length >= input.maxLength) return;

  const beforeCursor = currentText.slice(0, cursorPosition);
  const afterCursor = currentText.slice(cursorPosition);

  input.value = beforeCursor + text + afterCursor;
  cursorPosition += text.length;
} 
```


#### Hvad går koden ud på?
1. ```insertAtCursor``` og tager ét input: ```(text)``` / det, vi vil indsætte af bogatav
2. Funktionen starter med at hente den nuværende tekst fra inputfeltet ```input.value```.
3. Tjekker max længde, hvis teksten allerede er for lang (rammer max længde)
Så stopper funktionen med ```return```
4. Finder cursor-positionen, enten ```beforeCursor``` eller ```afterCursor```
5. ```input.value = beforeCursor + text + afterCursor;``` betyder før cursor + ny tekst + efter cursor.
6. Opdaterer cursor-position, cursoren flyttes frem
Fordi vi har indsat noget tekst

>**Hvilke data bruges?** 
>* Der bruges den nuværende tekst i inputfeltet
```cursorPosition```
>* Den tekst brugeren trykker på ```text```

> **Hvilken funktion bliver kaldt?**
>* Funktionen kaldes, når brugeren trykker på en tast på det virtuelle keyboard.

> **Hvordan påvirker koden HTML-siden? & Hvorfor er koden vigtig?**
>* Den er vigtig fordi den opdaterer inputfeltet dynamisk og placerer bogstaver korrekt, så brugeren kan skrive et alias på skærmen med et touch keyboard uden fysisk tastatur.
