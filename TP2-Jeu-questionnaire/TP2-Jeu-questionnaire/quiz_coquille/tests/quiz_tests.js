/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */


//QUnit.test("WHEN__THEN__returns", function(assert){
//  //Arrange
//  //Act
//  //Assert
//
//  //assert.deepEqual(test,EXPECTED);
//  //assert.Equal(test,EXPECTED);
//  }
// );

QUnit.test("WHEN_questionCouranteIsZero_THEN_estFinPartie_returnsFalse", function(assert){
  //Arrange
    questionCourante = 0;
    
  //Act
    var isItTheEnd = estFinPartie(questionCourante);
    
  //Assert
  const EXPECTED_VALUE = false;
  assert.deepEqual(isItTheEnd,EXPECTED_VALUE);
  }
 );

QUnit.test("WHEN_questionCouranteIsNotFive_THEN_estFinPartie_returnsFalse", function(assert){
  //Arrange
    questionCourante = 4;
    
  //Act
    var isItTheEnd = estFinPartie(questionCourante);
    
  //Assert
  const EXPECTED_VALUE = false;
  assert.deepEqual(isItTheEnd,EXPECTED_VALUE);
  }
 );

QUnit.test("WHEN_questionCouranteIsUnderZero_THEN_estFinPartie_returnsFalse", function(assert){
  //Arrange
    questionCourante = -1;
    
  //Act
    var isItTheEnd = estFinPartie(questionCourante);
    
  //Assert
  const EXPECTED_VALUE = false;
  assert.deepEqual(isItTheEnd,EXPECTED_VALUE);
  }
 );

QUnit.test("WHEN_questionCouranteIsFive_THEN_estFinPartie_returnsFalse", function(assert){
  //Arrange
    questionCourante = 5;
    
  //Act
    var isItTheEnd = estFinPartie(questionCourante);
    
  //Assert
  const EXPECTED_VALUE = true;
  assert.deepEqual(isItTheEnd,EXPECTED_VALUE);
  }
 );

QUnit.test("WHEN_questionCouranteIsOverFive_THEN_estFinPartie_returnsTrue", function(assert){
  //Arrange
    questionCourante = 6;
    
  //Act
    var isItTheEnd = estFinPartie(questionCourante);
    
  //Assert
  const EXPECTED_VALUE = true;
  assert.deepEqual(isItTheEnd,EXPECTED_VALUE);
  }
 );

 QUnit.test("WHEN_questionIsFirstQuestion_THEN_obtenirChoix_returnsAllFirstQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 0;
  var choix=[questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
 );

 QUnit.test("WHEN_questionIsSecondQuestion_THEN_obtenirChoix_returnsAllSeconQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 1;
  var choix=[questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
 );

 QUnit.test("WHEN_questionIsThirdQuestion_THEN_obtenirChoix_returnsAllThirdQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 2;
  var choix=[questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
 );

 QUnit.test("WHEN_questionIsFourthQuestion_THEN_obtenirChoix_returnsAllFourthQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 3;
  var choix=[questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert

  assert.deepEqual(tableauChoix, choix);
  }
 );

 QUnit.test("WHEN_questionIsFifthQuestion_THEN_obtenirChoix_returnsAllFifthQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 4;

  //Act
  var tableauChoix = obtenirChoix(noQuestion);

  //Assert
  const  EXPECTED_ARRAY = [questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];
  assert.deepEqual(tableauChoix, EXPECTED_ARRAY);
  }
 );

QUnit.test ("WHEN_questionIsFirstQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 0;
  var posReponse = questionsQuiz[noQuestion][POS_REPONSE];
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][posReponse + 3];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsSecondQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 1;
  var posReponse = questionsQuiz[noQuestion][POS_REPONSE];
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][posReponse + 3];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsThirdQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 2;
  var posReponse = questionsQuiz[noQuestion][POS_REPONSE];
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][posReponse + 3];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsFourthQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 3;
  var posReponse = questionsQuiz[noQuestion][POS_REPONSE];
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][posReponse + 3];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsFifthQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 4;
  var posReponse = questionsQuiz[noQuestion][POS_REPONSE];
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][posReponse + 3];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_theUserClickOnTheGoodAnswer_THEN_validerReponse_returnsTrue",
  function (assert){
    //Arrange
    var noQuestion = 0;
    var choixUtilisateur = obtenirBonneReponseOriginalArray(noQuestion);

    //Act
    var isGoodAnswer = validerQuestionOriginalArray(noQuestion, choixUtilisateur);

    //Assert
    assert.equal (isGoodAnswer, true);
  }
);

  QUnit.test ("WHEN_theUserClickOnTheWrongAnswer_THEN_validerReponse_returnsFalse",
    function (assert){
      //Arrange
      var noQuestion = 0;
      var choixUtilisateur = 2;

      //Act
      var isGoodAnswer = validerQuestionOriginalArray(noQuestion, choixUtilisateur);

      //Assert
      assert.equal (isGoodAnswer, false);
    }
  );

  QUnit.test ("WHEN_theUserGot3Points_THEN_obtenirPointage_returns3",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.equal (totalPointage, 3);
    }
  );

  QUnit.test ("WHEN_theUserGot0Points_THEN_obtenirPointage_returns0",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.equal (totalPointage, 0);
    }
  );

  QUnit.test ("WHEN_theUserGot5Points_THEN_obtenirPointage_returns5",
    function (assert){
      //Arrange

      //Act
      var totalPointage = obtenirPointage();

      //Assert
      assert.equal (totalPointage, 5);
    }
  );
