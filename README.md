# portfolio_app
# Beskrivning av systemet
## Gulp
Innehåller följande paket:
* Gulp Imagemin - Komprimerar bilder 
* Gulp Uglifyjs - Komprimerar filer 
* Gulp Sass + Compiler - Omvandlar SCSS till CSS
* Babel - Omvandlar ECMAScript till JavaScript
* Browsersync - Live server

#### Funktioner
**copyPHP-funktionen** hämtar alla PHP-filer som finns i src-katalogen med ett anrop innehållandes objektet från files-arrayen med rätt sökväg. När filerna är hämtade skickas dem till pub-katalogen utan att att konkateneras eller reducera filstorleken.

**jsTask-funktionen** hämtar alla JavaScript-filer som finns i src-katalogen med ett anrop innehållandes objektet från files-arrayen med rätt sökväg. Med hjälp av Babel kan filerna konverteras till en tidigare version av ECMAScript. Filen reduceras sedan i storlek med hjälp av Gulp-uglify-es, för att tillföra en snabbare laddningstid av webbsidan. De nya filerna skickas sedan till pub-katalogen.

**sassTask-funktionen** hämtar alla SCSS-filer som finns i src-katalogen, kompilerar all syntax till CSS med hjälp av ett npm paket som heter node-sass. När filerna har konverterats till rätt format skickas de till pub-katalogen.

**imageTask-funktionen** hämtar alla bilder som finns i src-katalogen med ett anrop innehållandes objektet från files-arrayen med rätt sökväg. Bilderna komprimeras i filstorlek med hjälp av gulp-imagemin och skickas sedan till pub-katalogen.

**watchTask-funktionen** följer arrayen med sökvägar för att kontrollera om någon fil förändras, och om en förändring skulle uppstå anropas jsTask, sassTask och imageTask för att filerna skulle uppdateras och sedan publicerade i pub-katalogen. Efter att filerna har publicerats i katalogen skickas dem till en lokal statisk server som uppdateras varje gång någon fil i pub-katalogen förändras.

#### Användning
* Installera Gulp lokalt/globalt på datorn
* Installera paketen från package.json med kommandot npm install
* Automatisering och optimering startas genom att anropa Gulp i terminalen ståendes i projektets mapp.

Den färdiga webbsidan skickas till mappen pub och kan användas för publicering på lokal server.

## Webbsida
Konsumerar data från ett REST-API, repot https://github.com/alicialundberg/portfolio_rest

Innehåller flera sidor som visar dynamisk data som konsumeras från REST-API. Detta utförs med hjälp av funktioner som skriver ut data från databasen med olika specifikationer genom Fetch API. 

## Admingränssnitt
Inloggningsuppgifter krävs för att starta en session och få tillgång till sidan. 

**Admin.class** - En klass innehållandes ett databasobjekt som kopplar upp mot databasen. Klassen består av en metod som kontrollerar om medskickade datan är befintlig i databasen och returnerar respons i typen boolean, true eller false.

**Admin.php** - Enkelt gränssnitt som kommunicerar med REST-API, och innehåller funktioner som kan lägga till, uppdatera eller radera data med hjälp av Fetch API. 
