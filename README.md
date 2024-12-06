# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details *open*>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Anouk de Groot (vervangen door jouw naam)

  #### Je startniveau:
  blauw (kies uit zwart, rood óf blauw)

  #### Je focus:
  ik ga de focus leggen op de surface plane, uit de 5 onderwerpen kies ik: custom themes, lettergrootte kunnen instellen, animaties, svg en scroll animatie (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.sanrio.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage
  <img src="/images/homepagina-sanrio.png" width="375px" alt="hello kitty characters in cowboy outfits met rode achtergrond">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="/images/artikelpagina-allcharacters.png" width="375px" alt="artikelpagina met verschillende items van hello kitty">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
  <img src="/images/blz1_wcagchecklist.jpg" width="375px" alt="bladzijde 1 wcag checklist">
  <img src="/images/blz2-wcagchecklist.jpg" width="375px" alt="bladzijde 2 wcag checklist">
  <img src="/images/blz3-wcagchecklist.jpg" width="375px" alt="bladzijde 3 wcag checklist">
  <img src="/images/blz4-wcagchecklist.jpg" width="375px" alt="bladzijde 4 wcag checklist">
  <img src="/images/blz5-wcagchecklist.jpg" width="375px" alt="bladzijde 5 wcag checklist">
  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Bladzijde 1: 
  Content: Alle buttons hebben dezelfde beschrijving en zegt niet heel veel over het product. De informatie staat alleen erboven.
  Global code: De webpagina heeft heeel veel fouten, verder wat errors. Schrik er wel een beetje van. Niet elke pagina heeft zijn eigen titel.
  Bladzijde 2:
  Keyboard: De tab toets werkt alleen maar van onder naar boven?
  Mobile en Touch: Website was te gebruiken op telefoon.
  Bladzijde 3:
  Headings: Op sommige pagina's wordt er geen H1 gebruikt, wat mij is opvallen dat dit alleen op de homepagina is? Verder alleen H2's, de website is NIET semantisch.
  Lists: Geen gebruik gemaakt van list items, alleen div elementen.
  Images: De website gebruikt een div om de img heen. De alt text wordt beschreven in die div en niet op de afbeelding. 
  Bladzijde 4:
  Media Video en Audio: Er wordt gebruikt gemaakt van slideshows met animatie, niet per se video's. Daarop zit ook geen alt text.
  Controls: Op de artikelpagina zijn er buttons, sommige daarvan zijn niet klikbaar. De tekst boven de buttons zijn klikbaar? Die tekst is een a element de button niet.
  Bladzijde 5:
  Appearance: Er is geen sprake van dark & lightmode op deze website. 
  Animation: De slideshow kan niet gepauzeerd worden.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="/images/breakdownschets 1:1.png" width="559px" alt="breakdown van de hele pagina1.1">
  <img src="/images/breakdownschets1:2.png" width="559px" alt="breakdown van de hele pagina1.2">
  <img src="/images/breakdownschets1:3.png" width="559px" alt="breakdown van de hele pagina1.3">
  <img src="/images/breakdownschets1:4.png" width="559px" alt="breakdown van de hele pagina1.4">
  <img src="/images/breakdownschets1:5.png" width="559px" alt="breakdown van de hele pagina1.5">
  <img src="/images/breakdownschets1:6.png" width="559px" alt="breakdown van de hele pagina1.6">
  <img src="/images/breakdownschets1:7.png" width="559px" alt="breakdown van de hele pagina1.7">
 

  ### dynamisch deel (bijv menu): 
  <img src="/images/breakdownschets 2:1.png" width="559px" alt="breakdown van een dynamisch deel menu van de hele pagina2.1">
  <img src="/images/breakdownschets2:2.png" width="559px" alt="breakdown van een dynamisch deel menuvan de hele pagina2.2">
  <img src="/images/breakdownschets2:3.png" width="559px" alt="breakdown van een dynamisch deel menuvan de hele pagina2.3">
  <img src="/images/breakdownschets2:4.png" width="559px" alt="breakdown van een dynamisch deel menuvan de hele pagina2.4">
  <img src="/images/breakdownschets2:5.png" width="559px" alt="breakdown van een dynamisch deel menuvan de hele pagina2.5">
  <img src="/images/breakdownschets2:6.png" width="559px" alt="breakdown van een dynamisch deel menu van de hele pagina2.6">


  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="/images/breakdownschetsalles-03.png" width="559px" alt="breakdown van nog een dynamisch deel filter">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

### Stand van zaken
Toen ik ging zitten aan de tafel met de docent wist ik niet dat we zo fijn en uitgebreid de code gingen bespreken. Ik vond het zelf eerst een beetje lastig om te begrijpen waarom je nou een ul gebruikt en bijv geen article? Nu weet ik wat het verschil is doordat de docent dat heeft uitgelegd. Wat het nu voor mij wat makkelijker maakt om de code te schrijven. Ik denk dat ik na de les de stof meer begrijp van html.

Ik had voordat de les begon een section gemaakt met daarin articles. Nu heb ik begrepen van de docent dat het voor een screenreader vervelend is als hij de h2 continue op blijft noemen. Dus daarom is dan een ul de betere optie. 

De buttons die iets toevoegen aan de pagina, bijv een 1 die naar de winkelmand gaat is een button en geen A. Een button/element die naar de andere pagina gaat is wel een A.


Hier een voorbeeld van de opzet:  <img src="/images/les1-progres.png" width="375px" alt="code van aangepaste code"> <!--Voeg plaatje toe van Figma>

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Jayden         |
  | ---            | 
  | Jayden en ik hebben na de les nog even besproken over de sections / ul items | 
 


  ### Verslag van meeting
- punt 1 Uitleg over het verschil tussen <sections> & <article> <!--<section> = container & <article> = Thema's of contet dat verplaatst kan worden op de website>
  - punt 2 H1 maken van het logo (homepage) alt"Sanrio" <!--De H1 op de landingspagina is in mijn geval het logo omdat mensen met een screenreader dat dan lezen of horen>
  - punt 3 In de footer aanmelden <Form> (button geen link) <!--Een link verwijst naar een ander pagina & een butten verstuurd data>

  - punt 1 section article
  - punt 2 H1 maken van het logo (homepage) alt"Sanrio"
  - punt 3 in de footer aanmeld email: button
  - articles is een link geen button

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
Ik ben nu bijna klaar met de index, alleen de footer moet nog gebeuren. Weet niet zo goed hoe ik iets moet positiioneren (dacht dat het position relative/absolute was). Maar dat was niet. Loop vast bij de footer, ga morgen 29nov even verder.

  ### Agenda voor meeting
Ik wilde graag met de studenten assistent bespreken waarom mijn website niet wilde uploaden op Github. Daar heb ik op dit moment wat vraagtekens over, ook wil ik even bevestiging of ik mijn 2e pagina goed kan cssen. 

  ### Verslag van meeting
  We hebben er samen naar gekeken, maar zij wist het ook niet. We hebben van alles geprobeerd, de app downloaden en het op Github meerdere malen upgeload. Ze heeft ook uitgelegd dat het beter is om van de main een class te maken en niet van de body. 
</details>


## Toegankelijkheidstest 2/2 (week 4)

<details>
<summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  k ben er achter gekomen dat ik bij sommige p's wel een heading moet gebruiken, want nu kan de screenreader die niet lezen. Ook moet ik de a tussen de elementen zetten en er niet in. Verder moet ik er over nadenken of ik de skiplink erin wil zetten. (als ik nog tijd over heb). Verder moet ik bij de nav die komt te voorschijn als ik met de screenreader ga werken, daaro pmoet ik dan een aria-hidden plaatsen. Daar ga ik later op de middag naar kijken. Verder is het ook een idee om de nav aan de onderkant te zetten, maar ik moet nog even begrijpen hoe dat werkt. Verder moet ik ook alle dubbele P's vervangen met de h3. Ik heb in de middag even de punten aangepast
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is)
</details>

<img src="/images/wcag checklist 2.1.JPG" width="375px" alt="wcag checklist 2.1">
<img src="/images/wcag checklist 2.2.JPG" width="375px" alt="wcag checklist 2.2">
<img src="/images/wcag checklist 2.3.JPG" width="375px" alt="wcag checklist 2.3">
<img src="/images/wcag checklist 2.4.JPG" width="375px" alt="wcag checklist 2.4">
<img src="/images/wcag checklist 2.5.JPG" width="375px" alt="wcag checklist 2.5">





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  Ik wil graag weten of mijn code klopt, dan heb ik het over ik wil weten of alles goed is genest. Of ik alle elementen goed heb aangesproken. Hoe je precies de screenreader gebruikt. Of mijn form goed staat? Wat voor animaties moeten er nog bij? Hoe moet je de credits geven

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  |      | ...                | ...          | ...              |
 

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Dat ik makkelijker de sections kan aanspreken. Er hoeft niet altijd gewerkt te worden met :nth-of-type maar gewoon alles aanspreken.
  - Dat ik nog wat animaties en of gradients erin moet zetten. 
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Label en input heb ik hulp gekregen van blackbox.ai prompt: hoe schrijf je een input label voor een email.
  2. Alle foto's en content van de website van: https://www.sanrio.com/	
  3. Het erinzetten van de @font-face heb k hulp code van: https://www.w3schools.com/CSSref/atrule_font-face.php gebruikt de font heb ik van: https://fontsgeek.com/fonts/Frankfurter-Std-Regular en van https://font.download/font/futura-pt  
  4. Voor de navigatie hulp gekregen van de studenten assistente en uit de codepen opdracht https://codepen.io/shooft/pen/JjQLVeB
  5. De iconen uit de navbar heb ik van: 
  6. De focus visble heb ik van https://codepen.io/shooft/live/yLdqVdP
  7.

</details>