/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
    return totalPointage;
}

/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	totalPointage++;
}

/**
 * @name obtenirTotalQuestion
 * @description Obtiens le nombre de question total déjà posée.
 * @returns Le nombre de question déjà posée.
 */
function obtenirTotalQuestion()
{
    return MAX_QUESTIONS;
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
    questionCourante++;
}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
    if (questionCourante == obtenirTotalQuestion()){
        return true;
    }
 return false;
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix(noQuestion)
{
    var question = questionsQuiz[noQuestion];
    var tableauChoix = [];
    for (i = question.length - NB_CHOIX_MAX; i < question.length; i++)
    {
        tableauChoix.push(question[i]);
    }
    return tableauChoix;
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
       return questionsQuiz[noQuestion][POS_REPONSE];
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
    var choix = obtenirChoix(noQuestion);
    var bonneReponse = obtenirBonneReponse(noQuestion);

    document.getElementById("texteReponse").innerHTML = choix[bonneReponse];
    document.getElementById("lienPlusInfos").href = questionsQuiz[noQuestion][2];
    document.getElementById("lienPlusInfos").innerHTML = questionsQuiz[noQuestion][2];
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
  document.getElementById("totalPoints").innerHTML =  obtenirPointage();
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */
function majTotalQuestion()
{
    document.getElementById("totalQuestions").innerHTML =  obtenirTotalQuestion();
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant le numéro de la question courante.
 */
function majNoQuestionCourant()
{
        document.getElementById("noQuestionCourante").innerHTML =  questionCourante + 1;
}

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */
function majTexteChoix(noQuestion)
{
	var choixDeReponses = obtenirChoix(noQuestion);
	document.getElementById("txtChoix0").innerHTML = choixDeReponses[0];
	document.getElementById("txtChoix1").innerHTML = choixDeReponses[1];
	document.getElementById("txtChoix2").innerHTML = choixDeReponses[2];
	document.getElementById("txtChoix3").innerHTML = choixDeReponses[3];
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	var texteQuestion = questionsQuiz[noQuestion][0];

    document.getElementById("texteQuestion").innerHTML = texteQuestion;
    $('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
    $('#texteQuestion').removeClass('animated wobble delay-2s');
    $('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
        document.getElementById("btnChoix" + (reponseUtilisateur + 1)).removeAttribute("class");
        document.getElementById("btnChoix" + (reponseUtilisateur + 1)).setAttribute("class","col-sm text-center btnChoix shadow-sm alert");
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
    var barreProgression = document.getElementById("barreProgression");
    barreProgression.setAttribute("class","col-" + (questionCourante * 3));
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface() {
    majTexteQuestion(questionCourante);
    majPointage();
    majTotalQuestion();
    remiseAZeroBoutons();
    majTexteChoix(questionCourante);
    majNoQuestionCourant();
    majProgression();
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
    reponseUtilisateur = noChoix;
    var btnChoix = document.getElementById("btnChoix" + (reponseUtilisateur + 1));

    if (ready) {
        ready = false;
        if (estFinPartie(questionCourante + 1) && validerQuestion(questionCourante,reponseUtilisateur)){
            ajouterPoint();
            majPointage();
            afficherBoiteFinDeJeu();
        }
        else{
            if(validerQuestion(questionCourante,reponseUtilisateur)){
                jouerSon("successAudio");
                btnChoix.setAttribute("class","col-sm text-center btnChoix shadow-sm alert alert-success");
                ajouterPoint();
                chargerQuestionSuivante();
                majInterface();
            }
            else{
                jouerSon("errorAudio");
                afficherBonneReponse(questionCourante);
                $('#modalReponse').modal();
                chargerQuestionSuivante();
            }
        }
        ready = true;
    }
    else{
        majInterface();
    }

    document.getElementById("barreProgression").setAttribute('style','background-color: green;');
}


/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
function validerQuestion(noQuestion, choixUtilisateur)
{
    if (obtenirBonneReponse(noQuestion) == choixUtilisateur) {
        return true;
    }
	return false;
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
    var btnChoix = document.getElementsByClassName("btnChoix");
    var restartButton = document.createElement("button");
    restartButton.setAttribute("class","btn btn-secondary btn-block");
    restartButton.setAttribute("id","restartGameBtn");
    restartButton.setAttribute("onclick","restartGame()");
    restartButton.innerHTML = "Recommencer";

    for (let i = 0; i < btnChoix.length; i++) {
        btnChoix[i].setAttribute("hidden","true");
    }

    btnChoix[0].parentNode.append(restartButton);

    document.getElementById("texteQuestion").innerHTML = "Merci d'avoir jouer! <br>Voulez-vous recommencer!";
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */

function restartGame(){
    var btnChoix = document.getElementsByClassName("btnChoix");
	document.getElementById("barreProgression").setAttribute('style','background-color: #f7f7f7;');

    document.getElementById("restartGameBtn").remove();
    for (let i = 0; i < btnChoix.length; i++) {
        btnChoix[i].removeAttribute("hidden");
    }

    questionCourante = 0;
    totalPointage = 0;
    questionsQuiz = [];

    init();
    ready = true;
    majInterface();
}

/**
 * @name stopInterval
 * @description Arrète l'intervalle faisant afficher le compte à rebours en début de jeu.
 */

function stopInterval() {
    clearInterval(firstLoadTimer);
}
