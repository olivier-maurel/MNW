terminal    = document.getElementById('terminal');
input       = document.getElementById('input');
input.focus();
inner.innerHTML = '\
<div class="window"><br>\
<pre class="txc white"><h2>Welcome to ▂▃▄▅▆▇█▓▒░Olivier Maurel░▒▓█▇▆▅▄▃▂\'s website</h2></pre><br><br>\
<pre class="txc white">Enter an username to navigate on the console.</pre>\
<pre class="txc white">And press \'help\' or \'?\' to display all availables commands.</pre><br>\
<pre class="txc white">Entrez un nom d\'utilisateur pour naviguer sur la console.</pre>\
<pre class="txc white">Et tapez \'help\' ou \'?\' pour afficher toutes les commandes disponibles.</pre><br></div>\
<pre class="white"> ▼ Choise a name</pre>';
username = '';
line_start = `<span class="blue">${escapeHtml(username)}<span class="black">/</span><span class="green">→</span><span class="black">/</span></span>`;
directory   = '~';
lang = 'en';
commands = new Array();
commands['ts -en']  = 'ts -en';
commands['ts -fr']  = 'ts -fr';
egg1 = '99:111:117:99:111:117:108:101:115:99:111:112:97:105:110:115:';

function intConvert(nbrChar) {
    let i = 0;
    let nbr = 0;
    while (i < nbrChar.length) {
        nbr = nbr * 10 + (nbrChar[i] - '0');
        i++
    }
    return (nbr);
}

// function decrypt(hash) {
//     let text = '';
//     let i = 0;
//     while (i < hash.length) {
//         let hashTemp = '';
//         while (hash[i] != ':') {
//             hashTemp += hash[i];
//             console.log(hashTemp);
//             i++;
//         }
//         text += `${hashTemp.charCodeAt(0).toString(16)}:`;
//         console.log('hashtemp : '+text);
//         console.log('text.fromcharat : '+ escape(decodeURIComponent('&#'+hashTemp+';')));
//         //text += `&#${hashTemp};`;
//         i++;
//     }
//     return(text);
// }

// decrypt(egg1);

function englishCommands() {
    commands['help'] = '\
        <span>\'profil\' or \'p\'   -> </span><span>Displays the profil informations of Olivier Maurel.</span><br>\
        heloooo';
    commands['profil']  = '\
        <span>name      : </span><span>Olivier Maurel</span><br>\
        <span>birthday  : </span><span>21 feb. 1998</span><br>\
        <span>location  : </span><span>Viuz-en-Sallaz, Haute-Savoie (74)</span><br>';
    shortCommands();
}

function frenchCommands() {
    commands['help'] = "\
        <pre><strong class='pre-h-t'> MANUEL DE COMMANDES <span class='blue'>▼</span> </strong></pre>\
        <div class='window'>\
        <pre class='pre-n'><span>\'</span><i>help</i><span>\'       ou \'</span><i>?</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche le manuel de la console.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>profil</i><span>\'     ou \'</span><i>pr</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche les informations du profil d\'Olivier Maurel.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>skill</i><span>\'      ou \'</span><i>sk</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche les compétences et les langages maîtrisés.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>experience</i><span>\' ou \'</span><i>ex</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche les expériences professionnelles et personnelles.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>portfolio</i><span>\'  ou \'</span><i>po</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche les réalisations et leurs URLs.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>contact</i><span>\'    ou \'</span><i>co</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Affiche les informations de contact.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>clear</i><span>\'      ou \'</span><i>cl</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Supprime le contenu de la console.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>reset</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Réinitialise la console.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>translate</i><span>\'  ou \'</span><i>ts -[OPTION]</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Traduit la console. A besoin d\'une option pour être exécuté.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [fr]             <span>-> Traduit la console en français.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [en]             <span>-> Traduit la console en englais.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>copy</i><span>\'       ou \'</span><i>cp -[OPTION]</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Copie dans le press-papier. A besoin d\'une option pour être exécuté.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [email]          <span>-> Copie l\'email.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [phone]          <span>-> Copie le numéro de téléphone.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [site]           <span>-> Copie l\'URL du site internet.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>download</i><span>\'   ou \'</span><i>dl -[OPTION]</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Télécharge un fichier. A besoin d\'une option pour être exécuté.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [cv]             <span>-> Télécharge le curiculum vitae.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>audio</i><span>\'      ou \'</span><i>au -[OPTION]</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Présentation audio. A besoin d\'une option pour être exécuté.</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [on]              <span>-> Active la piste audio</span></pre>\
        <pre class='pre-n'>     <span>∟></span>   [off]             <span>-> Désactive la piste audio.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>www -[OPTION]</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Présentation audio. A besoin d\'une option pour être exécuté.</span></pre>\
        <pre class='pre-n'>   <span>∟></span> <i>www -</i>oliviermaurel.fr <span>-> Dirige vers \'https://www.oliviermaurel.fr\'.</span></pre>\
        <pre class='pre-n'><span>\'</span><i>?????</i><span>\'</pre><pre class='pre-n'><span>   ∟> </span><span>Trouver le mot de passe caché.</span></pre></div>";
    commands['profil']  = "\
        <pre><strong class='pre-h-t'> PROFIL <span class='blue'>▼</span> </strong></pre>\
        <div class='window'>\
        <img src='images/profil.jpg' class='profil-picture'>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'><span>################</span></pre>\
        <pre class='pre-t'>|<span>--------------------------<span class='snow'>|</span>-----------------------------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>Nom et prénom</span>------------<span class='snow'>|</span>-<span class='snow'>Olivier Maurel</span>--------------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>Date de naissance</span>--------<span class='snow'>|</span>-<span class='snow'>21 feb. 1998</span>----------------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>Situation géographique</span>---<span class='snow'>|</span>-<span class='snow'>Viuz-en-Sallaz, Haute-Savoie (74)</span>-<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>Qualifications</span>-----------<span class='snow'>|</span>-<span class='snow'>Developpeur Web (BAC+2)</span>-----------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>--------------------------<span class='snow'>|</span>-----------------------------------<span class='snow'>|</span></pre>\
        </div>";
    commands['skill']  = "\
        <pre><strong class='pre-h-t'> LANGAGES & COMPETENCES <span class='blue'>▼</span> </strong></pre>\
        <div class='window'>\
        <pre class='pre-h'>  |  LANGAGES  |  NIVEAU ESTIMÉ  |  TEMPS ECOULÉ  |</pre>\
        <pre class='pre-t'>  |<span>------------</span>|<span>-----------------</span>|<span>----------------</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>HTML<span>-------</span>|<span>---</span>••••••<span class='no-lvl'>••••</span><span>----</span>|<span>-----</span>1 an<span>-------</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>CSS<span>--------</span>|<span>---</span>••••••<span class='no-lvl'>••••</span><span>----</span>|<span>-----</span>1 an<span>-------</span>|</pre>\
        <pre class='pre-t'><span class='heart'>♥</span> |<span>-</span>JS<span>---------</span>|<span>---</span>••••<span class='no-lvl'>••••••</span><span>----</span>|<span>-----</span>6 mois<span>-----</span>|</span></pre>\
        <pre class='pre-t'><span class='heart'>♥</span> |<span>-</span>PHP<span>--------</span>|<span>---</span>••••<span class='no-lvl'>••••••</span><span>----</span>|<span>-----</span>6 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>MySQL<span>------</span>|<span>---</span>•••<span class='no-lvl'>•••••••</span><span>----</span>|<span>-----</span>6 mois<span>-----</span>|</pre>\
        <pre class='pre-t'><span class='heart'>♥</span> |<span>-</span>C<span>----------</span>|<span>---</span>•••<span class='no-lvl'>•••••••</span><span>----</span>|<span>-----</span>2 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>Shell<span>------</span>|<span>---</span>•••<span class='no-lvl'>•••••••</span><span>----</span>|<span>-----</span>2 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>Git<span>--------</span>|<span>---</span>•••<span class='no-lvl'>•••••••</span><span>----</span>|<span>-----</span>6 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>Photoshop<span>--</span>|<span>---</span>•••••<span class='no-lvl'>•••••</span><span>----</span>|<span>-----</span>3 ans<span>------</span>|</pre>\
        <pre class='pre-t'>  |<span>------------</span>|<span>-----------------</span>|<span>----------------</span>|</pre></div><br>\
        <pre><strong class='pre-h-t'> SYSTEMES D'EXPLOITATION <span class='blue'>▼</span> </strong></pre>\
        <div class='window'>\
        <pre class='pre-h'>  |     OS     |  NIVEAU ESTIMÉ  |  TEMPS ECOULÉ  |</pre>\
        <pre class='pre-t'>  |<span>------------</span>|<span>-----------------</span>|<span>----------------</span>|</pre>\
        <pre class='pre-t'><span class='heart'>♥</span> |<span>-</span>Linux<span>------</span>|<span>---</span>•••••<span class='no-lvl'>•••••</span><span>----</span>|<span>-----</span>9 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>MacOS<span>------</span>|<span>---</span>•••<span class='no-lvl'>•••••••</span><span>----</span>|<span>-----</span>2 mois<span>-----</span>|</pre>\
        <pre class='pre-t'>  |<span>-</span>Windows<span>----</span>|<span>---</span>••••<span class='no-lvl'>••••••</span><span>----</span>|<span>-----</span>+10 ans<span>----</span>|</pre>\
        <pre class='pre-t'>  |<span>------------</span>|<span>-----------------</span>|<span>----------------</span>|</pre></div>";
    commands['contact']  = "<br>\
        <pre><strong class='pre-h-t'> CONTACT <span class='blue'>▼</span> </strong></pre>\
        <div class='window'>\
        <pre class='pre-t'> </pre>\
        <pre class='pre-t pre-h'>ADRESSE EMAIL</pre>\
        <pre class='pre-t'>maunav@protonmail.com</pre>\
        <pre class='pre-t'> </pre>\
        <pre class='pre-t pre-h'>NUMERO DE TELEPHONE</pre>\
        <pre class='pre-t'>07.60.74.47.34</pre>\
        <pre class='pre-t'> </pre>\
        <pre class='pre-t pre-h'>SITE INTERNET</pre>\
        <pre class='pre-t'>https://www.oliviermaurel.fr</pre>\
        <pre class='pre-t'> </pre>\
        <pre class='pre-t pre-h'>LINKEDIN</pre>\
        <pre class='pre-t'><a href='https://www.linkedin.com/in/olivier-maurel-0295561b2'>https://www.linkedin.com/in/olivier-maurel-0295561b2</a></pre>\
        <pre class='pre-t'> </pre></div>";
    commands['experience']  = "<br>\
        <pre><strong class='pre-h-t'> EXPERIENCES <span class='blue'>▼</span> </strong></pre><div class='window'>\
        <pre class='pre-t txl'><strong class='pre-h-t pre-sub-h-t'>             2019 - 2020         <span class='ocean'>▶</span> </strong></pre>\
        <pre class='pre-t'>|<span>--------------------------<span class='snow'>|</span>-----------------------------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>2019 - 2020</span>---------<span class='snow'>|</span>-<span class='snow'>Apprentissage du HTML/CSS</span>--------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>---------------------<span class='snow'>|</span>-<span class='snow'>Sur internet en autodidacte</span>------------<span class='snow'>|</span></pre>\
        <pre class='pre-t txl'><strong class='pre-h-t pre-sub-h-t'>             20/04 au 17/07/2020 <span class='ocean'>▶</span> </strong></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>20/04 au</span>------------<span class='snow'>|</span>-<span class='snow'>Formation 'Développeur Web'</span>------------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>17/07/2020</span>----------<span class='snow'>|</span>-<span class='snow'>3WAcademy</span>------------------------------<span class='snow'>|</span></pre>\
        <pre class='pre-t txl'><strong class='pre-h-t pre-sub-h-t'>             10/08 au 04/09/2020 <span class='ocean'>▶</span> </strong></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>10/08 au</span>------------<span class='snow'>|</span>-<span class='snow'>Apprentissage du langage C et du Shell</span>-<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>-<span class='snow'>04/09/2020</span>----------<span class='snow'>|</span>-<span class='snow'>Ecole 42 Lyon</span>-----------<span class='snow'>|</span></pre>\
        <pre class='pre-t'>|<span>--------------------------<span class='snow'>|</span>-----------------------------------<span class='snow'>|</span></pre></div>";
    commands['portfolio']  = "<br>\
        <pre>email          =><span>  maunav@protonmail.com</span></pre>\
        <pre>phone_number   =><span>  07.60.74.47.34</span></pre>\
        <pre>site_web       =><span>  oliviermaurel.fr</span></pre>";
    commands['letter']  = "<br>\
        <pre><strong class='pre-h-t'> LETTRE DE MOTIVATION <span class='blue'>▼</span> </strong></pre>\
        <pre class='pre-t'> </pre>\
        <pre class='pre-t'>Je m'appelle Olivier Maurel, je suis né le 21 février 1998 à Bordeaux et je suis passionné d'informatique.</pre>\
        <pre class='pre-t'>Actuellement en reconversion professionnelle dans le développement web depuis plus d'une année.</pre>\
        <pre class='pre-t'>Je souhaite élargir mes compétences dans le domaine de la sécurité.</pre>\
        <pre>site_web       =><span>  oliviermaurel.fr</span></pre>";
    commands[decrypt(egg1)] = `<pre>Wouah! Félicitation, tu as trouvé mon oeuf de Pâques!<br><i class="sun">${egg2}</i></pre>`;
    commands[egg3] = "\
        <pre class='pre-t'>Tu aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        <pre class='pre-t'>Est-ce le destin ou simplement la curiosité qui t'anime ? Mais tu te lance à sa poursuite !</pre>\
        <pre class='pre-t'>Ru aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        <pre class='pre-t'>Ru aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        <pre class='pre-t'>Iu aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        <pre class='pre-t'>Eu aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        <pre class='pre-t'>Ru aperçois au loin les pattes arrières du lapin retourner la neige derrière lui.</pre>\
        ";
}

function shortCommands(command) {
    switch (command) {
        case '?':
            command = 'help';
            break;
        case 'pr':
            command = 'profil';
            break;
        case 'sk':
            command = 'skill';
            break;
        case 'co':
            command = 'contact';
            break;
        case 'ex':
            command = 'experience';
            break;
        case 'po':
            command = 'portfolio';
            break;
        case 'le':
            command = 'letter';
            break;
        default:
            break;
    }
    return (command);
}

function autoScroll() {
    let scrollHeight = document.getElementById('terminal').scrollHeight;
    document.getElementById('terminal').scrollTo({
        top: scrollHeight,
        bottom: 0,
        behavior: 'smooth'
    });
}

function copyText(text){
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}

function download() {
    let filename = 'CV-Olivier_Maurel.pdf';
    var element  = document.createElement('a');
    element.setAttribute('href', 'download/CV-Olivier_Maurel.pdf');
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

function process(command) {
    if (username != '') {
        if (command == 'ts -fr' || command == 'translate -fr') {
            frenchCommands();
            lang = 'fr';
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        } 
        if (command == 'ts -en' || command == 'translate -en') {
            englishCommands();
            lang = 'en';
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'cp -email' || command == 'copy -email') {
            copyText('maunav@protonmail.com');
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'cp -phone' || command == 'copy -phone') {
            copyText('0760744734');
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'cp -site' || command == 'copy -site') {
            copyText('https://www.oliviermaurel.fr');
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'dl -cv' || command == 'download -cv') {
            download();
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'clear' || command == 'cl') {
            inner.textContent = '';
            return;
        }
        if (command == 'reset') {
            location.reload();
            return;
        }
        if (command == 'audio -on' || command == 'au -on') {
            document.getElementById('audio').play();
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command == 'audio -off' || command == 'au -off') {
            document.getElementById('audio').pause();
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            return;
        }
        if (command.substring(0, 5) == 'www -' && command.length > 5) {
            input.value = '';
            inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br>`;
            let url = command.substring(5);
            let element = document.createElement('a');
            element.setAttribute('target', '_blank');
            element.setAttribute('href', 'https://www.'+url);
            element.click();
            document.body.removeChild(element);
            return;
        }
        commandVerification(command);
    } else {
        inner.textContent = '';
        username = escapeHtml(input.value);
        line_start = `<strong><span class="blue">${username}</span></strong>`;
        document.body.setAttribute('onload', 'initialize();');
        initialize();
        return;
    } 
    console.log(username);
    autoScroll();
}

function changeDirectory(command) {
    console.log(command);
    if (command.length < 3) {
        command = command.value;
    }
}

function commandVerification(command) {
    if (commands[command] == undefined ) {
        if (lang == 'fr') {
            inner.innerHTML += `${line_start}<span class="white"> <span class="heart">→</span> ${escapeHtml(command)}</span>\
            <pre class="pre-n white">commande introuvable : tapez '<i>help</i>' ou '<i>?</i>' pour accéder au manuel de commandes.</pre>`;
        } else if (lang == 'en'){
            inner.innerHTML += `${line_start}<span class="white"> <span class="heart">→</span> ${escapeHtml(command)}</span>\
            <pre class="pre-n white">command not found : press '<i>help</i>' or '<i>?</i>' to access the command manual.</pre>`;
        }
    } else {
        inner.innerHTML += `${line_start}<span class="white"> <span class="green">→</span> ${escapeHtml(command)}</span><br><span class="white">${commands[escapeHtml(command)]}</span>`;
    }
}

memory = new Array();
i = 0;
j = 0;
console.log('TAB ');
console.log(memory);

function pressKey(code) {
    inner    = document.getElementById('inner');
    input    = document.getElementById('input');
    input.focus();
    if (code == "Enter" && input.value != 0) {
        console.log(memory);
        console.log(i);
        saveMemory();
        i++;
        j = i;
        process(shortCommands(input.value));
        input.value = '';
        autoScroll();
    }
    if (code == "Escape") {
        console.log('ESCAPE');
    }
    if (code == "ArrowUp") {
        console.log(memory);
        console.log(i);
        j--;
        commandMemory();
        console.log(i);
        console.log(memory);
    }
}

function saveMemory() {
    memory[i] = input.value;
    if (i >= 2) {
        i = -1;
    }
}

function commandMemory() {
    if (memory[j] != undefined) {
        if (j < 0) {
            j = memory.lenght;
            input.value = memory[j];
        } else {
            input.value = memory[j];
        }
    } else {
        input.value = '';
    }
}


// function encrypt(text) {
//     let hash = '';
//     let i = 0;
//     while (i < text.length) {
//         hash += `${text[i].charCodeAt(0).toString(16)}:`;
//         //hash += unescape(text[i]);
//         console.log(hash);
//         i++;
//     }
//     return(hash);
// }
// console.log('ENCRYPT : '+ encrypt('coucoulescopains'));


function initialize() {
    englishCommands();
    document.getElementById('console').innerHTML+=(line_start);
}