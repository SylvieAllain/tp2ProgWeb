/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
function validerQuestion(noQuestion, choixUtilisateur)
{
        if (choixUtilisateur == obtenirBonneReponse(noQuestion)) {
                return true;
        }
	return false;
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
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
	return totalPointage;
}

/**
 * @name obtenirTotalQuestion
 * @description Obtiens le nombre de question total déjà posée.
 * @returns Le nombre de question déjà posée
 */
function obtenirTotalQuestion()
{
    return MAX_QUESTIONS - (MAX_QUESTIONS - questionCourante);

}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
    var isTheEnd = questionCourante == MAX_QUESTIONS ? true : false;
    return isTheEnd
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
    if (isStarted) {
        questionCourante++;
    }
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
//    var reponse = obtenirChoix(noQuestion);
//    var bonneReponse = reponse[];
       return questionsQuiz[noQuestion][POS_REPONSE];
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
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
    var test = obtenirChoix(noQuestion);
	document.getElementById("texteReponse").innerHTML = test[obtenirBonneReponse(noQuestion)];
//obtenirChoix(obtenirBonneReponse(noQuestion))[];
        //obtenirBonneReponse(noQuestion);
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

//	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
//	$('#texteQuestion').removeClass('animated wobble delay-2s');
//	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
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
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{ 
        document.getElementById("btnChoix1").style.backgroundColor = "white";
        document.getElementById("btnChoix2").style.backgroundColor = "white";
        document.getElementById("btnChoix3").style.backgroundColor = "white";
        document.getElementById("btnChoix4").style.backgroundColor = "white";
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
	//ajouter votre code ici
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
    majPointage();
    majTotalQuestion();
    if (isStarted) {
         setTimeout(function () {
            remiseAZeroBoutons();
            majTexteChoix(questionCourante);
            majTexteQuestion(questionCourante);
            majNoQuestionCourant();	
        //    majProgression();
         }, 1800);
    }
    else {
        isStarted = true;
        majQuestion();
    }
    
}
function majQuestion()
{
    remiseAZeroBoutons();
    majTexteChoix(questionCourante);
    majTexteQuestion(questionCourante);
    majNoQuestionCourant();	
//    majProgression();
}


/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
    if (isStarted) {
        if (validerQuestion(questionCourante, noChoix)){
            document.getElementById(obtenirButtonId(noChoix)).style.backgroundColor = "green";
            ajouterPoint();
        }
        else{
            afficherBonneReponse(questionCourante);
            $('#modalReponse').modal();
        }
        if (estFinPartie()) {
            afficherBoiteFinDeJeu();
        }
    }
    chargerQuestionSuivante();
    majInterface();
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	$('#modalReponse').modal();
        document.getElementById("texteReponse").innerHTML = "Merci d'avoir jouer, vous avez réussi " + obtenirPointage() + " questions sur " + MAX_QUESTIONS;
}

/**
 * @name obtenirButtonId
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 * @param {*} noChoix Numéro du bouton cliqué.
 * @returns Le id du bouton cliqué (texte).
 */
function obtenirButtonId(noChoix) {
     var choix = "";
        switch (noChoix) {
            case 0:
                choix = "btnChoix1";
                break;
            case 1:
                choix = "btnChoix2";
                break;
            case 2:
                choix = "btnChoix3";
                break;
            case 3:
                choix = "btnChoix4";
                break;
            default:
                break;
        }
return choix;
}