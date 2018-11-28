/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */
/*
 QUnit.test ("WHEN_theUserGetTheRightAnswer_THEN_ajouterPoint_returns1point",
   function(assert) {
    //Arrange
    //Act
    ajouterPoint();
    //Assert
    const EXPECTED_POINT = 1;
    assert.equal (EXPECTED_POINT, getPoint);
   }
 );

 QUnit.test ("WHEN_theUserGetTheWrongAnswer_THEN_ajouterPoint_returns0point",
   function(assert) {
    //Arrange
    //Act
    ajouterPoint();
    //Assert
    const EXPECTED_POINT = 0;
    assert.equal (EXPECTED_POINT, getPoint);
   }
 );*/
 //fonction pour les tests, valider si les choix de réponses sont les bons par rapport aux questions initiales.
 function obtenirChoixOriginalArray(noQuestion)
 {
  var question = tableauQuestions[noQuestion];
  var tableauChoix = [];
  for (i = question.length - NB_CHOIX_MAX; i < question.length; i++)
  {
    tableauChoix.push(question[i]);
  }
  return tableauChoix;
 }

 function obtenirBonneReponseOriginalArray(noQuestion)
 {
 	var choixDeReponses = obtenirChoixOriginalArray(noQuestion);
  var bonneReponse = choixDeReponses[tableauQuestions[noQuestion][POS_REPONSE]];
 	return bonneReponse;
 }

 QUnit.test("WHEN_theUserReceiveQuestion1_THEN_obtenirChoix_returnsEachChoices", function(assert){
   //Arrange
   var noQuestion = 0;
   var choix=["a) L’arrêt de la consommation de viandes.","b) La diminution de la consommation de viandes.","c) La diminution de la consommation de produits d’origine animale.","d) L’arrêt de la consommation de produits d’origine animale."];

   //Act
   var tableauChoix = obtenirChoixOriginalArray(noQuestion);
   //Assert

   assert.deepEqual(tableauChoix, choix);
   }
 );

QUnit.test ("WHEN_theUserReceiveQuestion2_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 1;
  var choix = ["a) 25%","b) 18%","c) 12%","d) 5%"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion3_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 2;
  var choix = ["a) Le bœuf produit 55g comparativement à 14g pour les lentilles.","b) Le bœuf produit 72g comparativement à 40g pour les lentilles.","c) Le bœuf produit 330g comparativement à 2g pour les lentilles.","d) Les lentilles produisent 330g comparativement à 2g pour le bœuf."];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion4_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 3;
  var choix = ["a) Le végétarisme","b) Le crudivorisme","c) Le végétalisme","d) le flexitarisme"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion5_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 4;
  var choix = ["a) 55%","b) 70%","c) 68%","d) 32%"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion6_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 5;
  var choix = ["a) Pollution des eaux","b) Dégradation des terres, incluant la déforestation","c) Perte de biodiversité","d) Toutes ses réponses"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion7_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 6;
  var choix = ["a) Apport important de vitamines et de minéraux essentiels.","b) Alimentation faible en gras saturés et en cholestérol.","c) Diminution de développer des maladies chroniques, tel que le diabète, certains cancers et des maladies cardiovasculaires.","d) Toutes ses réponses"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion8_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 7;
  var choix = ["a) Développer des maladies cardio-vasculaires","b) Développer certains cancers","c) Développer un diabète de type 2","d) Toutes ses réponses"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion9_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 8;
  var choix = ["a) Chou kale","b) Légumineuse","c) Noix et graines","d) Tofu, seitan et tempeh"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion10_THEN_obtenirChoix_returnsEachChoices",
  function (assert){
  //Arrange
  var noQuestion = 9;
  var choix = ["a) Non, il manquera nécessairement de la vitamine D, de la vitamine B12 et de fer. ","b) Oui, même la plupart des aliments en contiennent plus de ces nutriments en proportion que les aliments d’origine animale.","c) Non, naturellement ces aliments ne contiennent pas de vitamines B12 et de vitamine D, mais s’ils sont enrichis, ils comblent nos besoins nutritionnels.","d) Oui, les aliments contiennent tous les nutriments essentiels"];

  //Act
  var tableauChoix = obtenirChoixOriginalArray(noQuestion);
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion1_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 0;
  var tableauReponse = "d) L’arrêt de la consommation de produits d’origine animale.";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion2_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 1;
  var tableauReponse = "b) 18%";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);



QUnit.test ("WHEN_theUserReceiveQuestion3_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 2;
  var tableauReponse = "c) Le bœuf produit 330g comparativement à 2g pour les lentilles.";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion4_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 3;
  var tableauReponse = "d) le flexitarisme";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion5_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 4;
  var tableauReponse = "b) 70%";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion6_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 5;
  var tableauReponse = "d) Toutes ses réponses";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion7_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 6;
  var tableauReponse = "d) Toutes ses réponses";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion8_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 7;
  var tableauReponse = "d) Toutes ses réponses";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion9_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 8;
  var tableauReponse = "a) Chou kale";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion10_THEN_obtenirBonneReponse_returnsGoodAnswer",
  function (assert){
  //Arrange
  var noQuestion = 9;
  var tableauReponse = "c) Non, naturellement ces aliments ne contiennent pas de vitamines B12 et de vitamine D, mais s’ils sont enrichis, ils comblent nos besoins nutritionnels.";
  //Act
  var bonneReponse = obtenirBonneReponseOriginalArray(noQuestion);
  //Assert
  assert.deepEqual (bonneReponse, tableauReponse);
  }
);

QUnit.test ("WHEN_theUserClickOnTheGoodAnswer_THEN_validerReponse_returnsTrue",
  function (assert){
    //Arrange
    var noQuestion = 0;
    var choixUtilisateur = 3;

    //Act
    var isGoodAnswer = validerQuestion(noQuestion, choixUtilisateur);

    //Assert
    assert.Equal (isGoodAnswer, true);
  }
);

  QUnit.test ("WHEN_theUserClickOnTheWrongAnswer_THEN_validerReponse_returnsFalse",
    function (assert){
      //Arrange
      var noQuestion = 0;
      var choixUtilisateur = 2;

      //Act
      var isGoodAnswer = validerQuestion(noQuestion, choixUtilisateur);

      //Assert
      assert.Equal (isGoodAnswer, false);
    }
  );

  QUnit.test ("WHEN_theUserGot3Points_THEN_obtenirPointage_returns3",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.Equal (totalPointage, 3);
    }
  );

  QUnit.test ("WHEN_theUserGot0Points_THEN_obtenirPointage_returns0",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.Equal (totalPointage, 0);
    }
  );

  QUnit.test ("WHEN_theUserGot5Points_THEN_obtenirPointage_returns5",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.Equal (totalPointage, 5);
    }
  );
