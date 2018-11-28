/**
 * @module init.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

 /**
  * @const MAX_QUESTIONS
  * @type {number}
  * @description Nombre de questions à afficher dans le quiz.
  */
const MAX_QUESTIONS = 5;

/**
  * @const NB_CHOIX_MAX
  * @type {number}
  * @description Nombre de choix par question.
  */
const NB_CHOIX_MAX = 4;

/**
  * @const POS_REPONSE
  * @type {number}
  * @description Position de l’index de la bonne réponse.
  */
const POS_REPONSE = 1;

/**
  * @global
  * @name questionCourante
  * @type {number}
  * @description Index de la question présentement affichée.
  */
var questionCourante = 0;

/**
  * @global
  * @name totalPointage
  * @type {number}
  * @description Total du pointage accumulé.
  */
var totalPointage = 0;

/**
  * @global
  * @name reponseUtilisateur
  * @type {number}
  * @description Choix de l’utilisateur.
  */
var reponseUtilisateur = 0;

/**
  * @global
  * @name tableauQuestions
  * @type {object}
  * @description Liste des questions disponibles pour le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var tableauQuestions = [
  ["Qu’est-ce que le végétalisme? Un régime qui encourage :",3,"http://www.extenso.org/article/a-chacun-son-type-de-vegetarisme/","a) L’arrêt de la consommation de viandes.","b) La diminution de la consommation de viandes.","c) La diminution de la consommation de produits d’origine animale.","d) L’arrêt de la consommation de produits d’origine animale."],
  ["Quel est le pourcentage de la production mondiale de gaz à effet de serre est produit par l’industrie laitière?",1,"http://observatoireprevention.org/2017/07/11/manger-de-viande-preserver-planete/","a) 25%","b) 18%","c) 12%","d) 5%"],
  ["Quelle est le poids CO2 de production bœuf comparativement à la production de lentilles.",2,"https://www.youtube.com/watch?v=nUnJQWO4YJY#action=share","a) Le bœuf produit 55g comparativement à 14g pour les lentilles.","b) Le bœuf produit 72g comparativement à 40g pour les lentilles.","c) Le bœuf produit 330g comparativement à 2g pour les lentilles.","d) Les lentilles produisent 330g comparativement à 2g pour le bœuf."],
  ["Comment ce nomme le type de végétarisme dont la consommation de produits d’origine animale est considérablement diminuée, sans être totalement éliminés?",3,"http://www.extenso.org/article/a-chacun-son-type-de-vegetarisme/","a) Le végétarisme","b) Le crudivorisme","c) Le végétalisme","d) le flexitarisme"],
  ["Quelle est le pourcentage de la déforestation produit par l’agriculture?",1,"https://www.youtube.com/watch?v=nVydgG2DFU0#action=share","a) 55%","b) 70%","c) 68%","d) 32%"],
  ["Quelle est l’impact de l’agriculture, autre que la production de gaz à effet de serre, sur l’environnement?",3,"http://www.extenso.org/article/l-impact-de-l-elevage-sur-l-environnement/","a) Pollution des eaux","b) Dégradation des terres, incluant la déforestation","c) Perte de biodiversité","d) Toutes ses réponses"],
  ["Quelles sont les bienfaits d’une alimentation riche en produit d’origine végétale?",3,"https://www.usherbrooke.ca/reussir-en-sante/fileadmin/sites/reussir-en-sante/documents/Habitudes_de_vie/Nutrition/Manger_vege__2013_.pdf","a) Apport important de vitamines et de minéraux essentiels.","b) Alimentation faible en gras saturés et en cholestérol.","c) Diminution de développer des maladies chroniques, tel que le diabète, certains cancers et des maladies cardiovasculaires.","d) Toutes ses réponses"],
  ["Quels sont les risques qui sont associés à la consommation excessive de viande?",3,"https://www.usherbrooke.ca/reussir-en-sante/fileadmin/sites/reussir-en-sante/documents/Habitudes_de_vie/Nutrition/Manger_vege__2013_.pdf","a) Développer des maladies cardio-vasculaires","b) Développer certains cancers","c) Développer un diabète de type 2","d) Toutes ses réponses"],
  ["Quel type d’aliment ne fait pas parti des substituts de la viande parmi ces choix?",0,"https://www.usherbrooke.ca/reussir-en-sante/fileadmin/sites/reussir-en-sante/documents/Habitudes_de_vie/Nutrition/Manger_vege__2013_.pdf","a) Chou kale","b) Légumineuse","c) Noix et graines","d) Tofu, seitan et tempeh"],
  ["Est-ce que les aliments végétaliens contiennent tous les nutriments essentiels?",2,"https://www.usherbrooke.ca/reussir-en-sante/fileadmin/sites/reussir-en-sante/documents/Habitudes_de_vie/Nutrition/Manger_vege__2013_.pdf","a) Non, il manquera nécessairement de la vitamine D, de la vitamine B12 et de fer. ","b) Oui, même la plupart des aliments en contiennent plus de ces nutriments en proportion que les aliments d’origine animale.","c) Non, naturellement ces aliments ne contiennent pas de vitamines B12 et de vitamine D, mais s’ils sont enrichis ils comblent nos besoins nutritionnels.","d) Oui, les aliments tous les nutriments essentiels"]
];

/**
  * @global
  * @name questionsQuiz
  * @type {object}
  * @description Liste des questions posées dans le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var questionsQuiz = [];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions(){
  console.log("choisirQuestion");
  questionsQuiz = new Array(0);
  for (var i = 0 ; i < MAX_QUESTIONS ; i++){
    var q = (Math.random(0,10))*10;
    q = Math.floor(q);
    if (!isItThereYet(q))
      questionsQuiz.push(tableauQuestions[q]);
  }
}

function isItThereYet(newQ){
  var isThere = false;
  for (i = 0 ; i < MAX_QUESTIONS ; i++){
    if (questionsQuiz[i] == newQ){
      isThere = true;
    }
  }
  return isThere;
}


/**
 * @name init
 * @description Fonction d'initialisation du quiz.
 */
function init()
{
    console.log("init");
	 choisirQuestions();
}

window.onload = init();