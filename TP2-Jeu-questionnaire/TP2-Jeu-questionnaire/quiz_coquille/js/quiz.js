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
	//ajouter votre code ici
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
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	return questionCourante == MAX_QUESTIONS ? true : false;
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
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	var choixDeReponses = obtenirChoix(noQuestion);
       var bonneReponse = choixDeReponses[questionsQuiz[noQuestion][POS_REPONSE]];
	return bonneReponse;
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
	//document.getElementById("texteReponse").innerHTML = obtenirBonneReponse(noQuestion);
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
    document.getElementById("totalQuestions").innerHTML =  MAX_QUESTIONS;
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
        console.log("majTexteQuestion");
	var texteQuestion = questionsQuiz[noQuestion][0];
	document.getElementById("texteQuestion").innerHTML = texteQuestion;

	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant le numéro de la question courante.
 */
function majNoQuestionCourant()
{
    document.getElementById("noQuestionCourante").innerHTML =  questionCourante;
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
	//ajouter votre code ici
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
    console.log("majInterface");
    majPointage();
    majTotalQuestion();
    majTexteChoix(questionCourante);
    majTexteQuestion(questionCourante);
    majNoQuestionCourant();	
    //remiseAZeroBoutons();
    //majProgression();
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
    alert(noChoix);
    chargerQuestionSuivante();
    majInterface();
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	//ajouter votre code ici
}
