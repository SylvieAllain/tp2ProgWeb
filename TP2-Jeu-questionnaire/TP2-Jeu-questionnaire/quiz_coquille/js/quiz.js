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
    return questionCourante;
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
    if (questionCourante > MAX_QUESTIONS){
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
        var choixDeReponse = obtenirChoix(noQuestion);
       return choixDeReponse[questionsQuiz[noQuestion][POS_REPONSE]];
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
    var bonneReponse = obtenirBonneReponse(noQuestion);
    document.getElementById("texteReponse").innerHTML = bonneReponse;
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
    document.getElementById("totalQuestions").innerHTML =  obtenirTotalQuestion() - 1;
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
function majInterface() {
    majPointage();
    majTotalQuestion();
    remiseAZeroBoutons();
    majTexteChoix(questionCourante-1);
    majTexteQuestion(questionCourante-1);
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
    if (ready) {
        ready = false
        if (questionCourante > 0){
            var colour = "";
            var timeOut = 0;
            reponseUtilisateur = noChoix
            if (validerQuestion(questionCourante -1,reponseUtilisateur)){
                colour = "green";
                ajouterPoint();    
                timeOut = 500;
            } 
            else{
                colour = "red";
                afficherBonneReponse(questionCourante -1);
                timeOut = 1500;
            }
            document.getElementById("btnChoix" + (reponseUtilisateur + 1)).style.backgroundColor = colour;
            chargerQuestionSuivante();
            
            $('#modalReponse').modal();
            
            $('#modalReponse').;
            setTimeout(function () {
                if (estFinPartie(questionCourante)) {
                     afficherBoiteFinDeJeu(); 
                }
                else {
                    majInterface();
                }
                ready = true;
            }, timeOut);
        }
        else{
            chargerQuestionSuivante();
            majInterface();
            ready = true;
        }
    }    
//    if (isFirstPlay){
//        isFirstPlay = false;
//        isStarted = true;
//        chargerQuestionSuivante();
//        majInterface(0);
//    }
    
//    
//    if (isStarted) {
//        reponseUtilisateur = noChoix;
//        var bonneReponse = validerQuestion(questionCourante, reponseUtilisateur);
//        if (bonneReponse){
//            colour = "green";
//            ajouterPoint();
//        }
//        else{
//            colour = "red";
//            afficherBonneReponse(questionCourante-1);
//            $('#modalReponse').modal();
//            timeOut = 1500;
//        }
//        var btnName = "btnChoix" + noChoix + 1;
//        document.getElementById("btnChoix" + (noChoix + 1)).style.backgroundColor = colour;
//        chargerQuestionSuivante();
//        majInterface(timeOut);
//    }
//    else if (!(isFirstPlay)) {
//        chargerQuestionSuivante();
//        isStarted = true;
//    }
//    else {
//        chargerQuestionSuivante();
//        isStarted = true;
//        majInterface(0);
//        isFirstPlay = false;
//    }
//    
//    if (estFinPartie(questionCourante)) {
//            afficherBoiteFinDeJeu();
//    }
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
    var choixReponse= obtenirChoix(noQuestion)
    if (choixReponse[choixUtilisateur] == obtenirBonneReponse(noQuestion)) {
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
       
            document.getElementById("texteReponse").previousSibling.innerHTML = "";
            document.getElementById("texteReponse").innerHTML = "Merci d'avoir jouer, vous avez réussi " + obtenirPointage() + " questions sur " + MAX_QUESTIONS;
            document.getElementById("texteReponse").nextSibling.innerHTML = "";
    	    $('#modalReponse').modal();

            totalPointage = 0;
            questionCourante = 0;
            questionsQuiz = [];
            
            document.getElementById("txtChoix0").innerHTML = "Recommencez";
            document.getElementById("txtChoix1").innerHTML = "la";
            document.getElementById("txtChoix2").innerHTML = "partie";
            document.getElementById("txtChoix3").innerHTML = "???";
            document.getElementById("texteQuestion").innerHTML = "Bienvenue au jeu questionnaire La Vérité sur la Santé! <br>Préparez-vous à débuter!";
            
            majPointage();
            majTotalQuestion();
            remiseAZeroBoutons();
    //        chargerQuestionSuivante();
            majNoQuestionCourant();	
    //            majProgression();
            init();
            setTimeout(function () {
                document.getElementById("texteReponse").previousSibling.innerHTML = " La bonne réponse est la suivante : ";
                document.getElementById("texteReponse").nextSibling.innerHTML = "Pour plus d'informations : <a id='lienPlusInfos' href='#' target='_blank'>#</a>";
            }, 500)
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