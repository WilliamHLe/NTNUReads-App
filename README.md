# NTNUReads Native - IT2810 Prosjekt 4

## Introduksjon
NTNUReads Native er en applikasjon der du kan søke og finne din favorittbok. Brukeren har muligheten til å se vurderinger gjort av andre i tillegg til å legge til vurderinger selv. Videre så kan brukeren markere en bok som favoritt og se en oversikt over alle favorittbøkene på profilsiden. Brukeren kan også filtrere og sortere søkeresultat og få en detaljert visning av boka. Databasen inneholder over 10000 bøker som er hentet fra Goodreads.

Prosjektet er en native-versjon av prosjekt 3 i faget IT2810, så her har fokuset ligget på å oversette et eksisterende ReactJS prosjekt til React Native og utvikle en velfungerende applikasjon for mobile enheter. En god del av den tidligere koden kunne gjenbrukes, mens noe måtte utvikles på nytt. Vi har valgt å gjenbruke så mye som mulig og jobbet mot å få en applikasjon som likner på web-versjonen for å tydeliggjøre forskjellene mellom ReactJS og React Native.

## Installasjon av prosjektet
1. Installer Expo. Dette gjør du ved å kjøre kommandoen `npm install --global expo-cli`. For mer informasjon, sjekk ut [https://docs.expo.io/](https://docs.expo.io/).

2. Koble til NTNU-nettet med VPN. 
MERK: Dersom du tester på en mobil må denne også være koblet til NTNU-nettet.

3. Forandre på url.tsx

    Backend ligger lokalt og ikke på VM. For å hente data fra backenden på andre enheter enn den lokale maskinen må man endre IP-adresse.
    
    Dette gjør du slik:
    1. Åpne filen NTNUReads/url.tsx
    2. Endre 'const url' til IP-adressen din
    Se under for hvordan du finner IP-adresse
    MERK: Du finner både IP-adressen til det vanlige nettverket du er koblet til og NTNU VPN. Du må velge adressen til NTNU VPN-et. Disse starter med '10'.

    #### Windows
    1. Åpne CMD/command prompt
    2. Skriv `ipconfig`
    3. Finn linjen med 'IPv4 Address'
    4. Kopier adressen

    #### Mac
    1. Åpne terminalen
    2. Skriv `ifconfig |grep inet`
    3. Finn en linje med 'inet' og adresse som starter med 10
    4. Kopier adressen

    #### Linux
    1. Åpne terminalen
    2. Skriv `ip addr`
    3. Finn en linje med 'inet' og adresse som starter med 10
    4. Kopier adressen


3. Kjør `cd backend` deretter `npm install` og `npm start`
4. Åpne ny terminal og gå til `cd NTNUreads` og `npm install` deretter `expo start`
5. Skann QR-koden som dukker opp i terminalen med expo-appen på mobilen eller start en iOS-simulator.

## Innhold og funksjonalitet

### Backend
Backend ble gjenbrukt fra Prosjekt 3. Mer info [her](https://gitlab.stud.idi.ntnu.no/it2810-h20/team-13/it2810-prosjekt-3/-/blob/master/README.md#backend-implementasjon).

### UI-komponentbibliotek
Her er en oversikt over de ulike UI-komponentbibliotekene vi har brukt:
- [react-native-paper](https://callstack.github.io/react-native-paper/index.html)
- [react-native-elements](https://reactnativeelements.com/)
- [react-native-picker-select](https://www.npmjs.com/package/react-native-picker-select)

Vi har benyttet oss av flere komponentbibliotek fordi vi slet med å finne et bibliotek som tilbød all funksjonaliteten vi trengte. For eksempel hadde `react-native-paper` en tabellkomponent vi hadde behov for, men manglet komponent for rating.

### Søk
Søkefeltet er en komponent fra `react-native-paper`. Ved trykk på søk-knappen vil appen navigere til resultat-screen og sende med søkeordet som prop. Dette brukes for å fetche resultater fra databasen.


### Resultat og pagination
Resultatsettet vises i en tabell. Tabellen er en komponent fra `react-native-paper` som heter `DataTable`. Vi har også innført pagination slik at det er mulig for brukeren å bla mellom sidene. 10 resultater vil lastes om gangen, og skjermen har scroll-view slik at man kan scrolle nedover på mindre enheter.

### Sortering og filtrering
For sortering og filtrering så har vi brukt komponenter fra `react-native-elements` og `react-native-picker-select`.

### Profil-side
For innloggingsskjema og profilsiden har vi brukt komponenter fra `react-native-paper`.

### Detaljert visning
Denne siden viser mer informasjon om en valgt bok og gir en innlogget bruker mulighet til å lagre en bok som favoritt eller fjerne den. Listekomponenten fra `react-native-paper` har blitt brukt for å vise informasjonen.

### Anmeldelser
Det er funksjonalitet for å lage en anmeldelse for en bok på den detailjerte siden. Det er også mulighet å se på andre anmeldelser. Det er brukt komponenter fra `react-native-paper` for anmeldelsesskjemaet og Modal-komponenten som viser alle tilgjengelige anmeldelser.

## Teknologi

Vi har valgt å bruke MERN-stack for å lage applikasjonen. MERN-stack består av MongoDB, ExpressJS, React og NodeJS. I tillegg har vi brukt Redux for global state-håndtering. Dette er forklart nærmere i prosjekt 3, se [her](https://gitlab.stud.idi.ntnu.no/it2810-h20/team-13/it2810-prosjekt-3/-/blob/master/README.md#teknologier) for mer informasjon.

### Expo

Vi har brukt `expo-cli` og skriptet `expo init` for å komme i gang med prosjektet. Utviklingen har også foregått i expo, enten ved bruk av QR-kode for å få opp prosjektet på mobil eller ved bruk av iOS-simulator.

### React navigation

Vi har brukt [React Navigation](https://reactnavigation.org/) for å håndtere navigasjon i prosjektet. React Navigation legger til rette for en god navigasjonsopplevelse på mobil. Vi har tatt i bruk både Stack- og Tab-navigators. Tab-navigators brukes i navbaren, og hver side i navbaren (hjem, søk, profil) har sin egen stack som bestemmer hvilke sider man kan navigere til fra denne taben. Det er mulig å gå tilbake til forrige screen ved å sveipe eller trykke på tilbakeknappen som dukker opp i venstre hjørne i headeren. Hver screen kan aksessere en "navigation" prop for å navigere til andre sider i stacken. Hvilke sider som kan navigeres til fra den enkelte screenen må types. Der man trenger å aksessere "navigation"-propen fra andre komponenter enn en screen-komponent brukes `useNavigation` hooken (et eksempel på dette er i komponenten `LoginForm`).


### Redux i Native

I dette prosjektet har vi gjenbrukt Redux store fra prosjekt 3. Redux tok derfor veldig kort tid å sette opp. Redux blir brukt til å lagre en state "theme", som kan ha verdien "light" eller "dark".

Nytteverdien av å bruke Redux i dette prosjektet er svært lav. I prosjekt 3 hadde Redux heller ikke stor nytteverdi, men da hadde vi i hvert fall behov for å aksessere state for "theme" i flere komponenter. Her har vi kun behov for å aksessere state i `App.tsx`, ettersom vi bruker et default theme/dark theme fra `react-native-paper` og React Navigation. [Denne guiden](https://callstack.github.io/react-native-paper/theming-with-react-navigation.html) ble brukt for å lage dark theme, men vi brukte Redux i stedet for Context. Vi brukte Redux hovedsakelig for å gjenbruke funksjonalitet fra prosjekt 3.





## Testing

Vi har testet mobilappen på iPhone 11, iPhone X og Samsung Galaxy S9. I tillegg har vi testet på iOS simulator for iPhone 12 Pro Max og iPhone SE.

For manuell e2e testing så har vi testet alle funksjonene i hvert komponent. Hvis vi fikk en feilmelding leste vi den for å finne ut hva feilen var og hvor den eventuelt lå. Hvis feilmeldingen ikke sa om hvor feilen er så fant vi det ut basert på komponentene vi testet.

### iOS/iPhone X
<img src="https://i.imgur.com/5MI0KEq.png" alt="forsiden wordcloud" width="600" />

### Android/Samsung Galaxy S9
<img src="https://i.imgur.com/vaZvXnK.png" width="600"/>