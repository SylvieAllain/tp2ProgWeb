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

//choisirQuestions
QUnit.test("WHEN_isRun_THEN_choisirQuestions_returnsArrayOfLengthFive", function(assert){
  //Arrange
  //Act
    choisirQuestions();

  //Assert
  const EXPECTED_VALUE = MAX_QUESTIONS;
  assert.ok(questionsQuiz.length == EXPECTED_VALUE,"¯\_(ツ)_/¯");
});

QUnit.test("WHEN_isRun_THEN_choisirQuestions_returnsArrayOfDifferentNumbers", function(assert){
  //Arrange
  //Act
    choisirQuestions();
    var anyRepeated = false;
    for (let i = 0; i < questionsQuiz.length; i++) {
      for (let j = i + 1; j < questionsQuiz.length; j++) {
        if(questionsQuiz[i]==questionsQuiz[j]){
          anyRepeated = true;
        }
      }
    }
  //Assert
  
  const EXPECTED_VALUE = MAX_QUESTIONS;
  assert.ok(!(anyRepeated),"¯\_(ツ)_/¯");
});



//estFinPartie
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

 //obtenirChoix
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

 //obtenirBonneReponse
QUnit.test ("WHEN_questionIsFirstQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 0;
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][POS_REPONSE];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsSecondQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 1;
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][POS_REPONSE];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsThirdQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 2;
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][POS_REPONSE];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsFourthQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 3;
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][POS_REPONSE];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

QUnit.test ("WHEN_questionIsFifthQuestion_THEN_obtenirBonneReponse_returnsGoodAnswer", function (assert){
  //Arrange
  var noQuestion = 4;
  
  //Act
  var bonneReponse = obtenirBonneReponse(noQuestion);
  
  //Assert
  const EXPECTED_ANSWER = questionsQuiz[noQuestion][POS_REPONSE];
  assert.deepEqual (bonneReponse, EXPECTED_ANSWER);
  }
);

//validerReponse
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

  QUnit.test ("WHEN_userGiveTheWrongAnswer_THEN_ajouterPoint_returnsTotalPointage",
    function(assert)
    {
      //Arrange
      var addPoint = 0;
      //Act

      //Assert
      const EXPECTED_TOTAL_OF_POINTS = totalPointage;
      assert.equal(addPoint, EXPECTED_TOTAL_OF_POINTS);
    }
  );

  QUnit.test ("WHEN_userGiveTheRightAnswer_THEN_ajouterPoint_returnsTotalPointage",
    function(assert)
    {
      //Arrange
      var addPoint = 0;
      addPoint++;
      //Act
      ajouterPoint();

      //Assert
      const EXPECTED_TOTAL_OF_POINTS = totalPointage;
      assert.equal(addPoint, EXPECTED_TOTAL_OF_POINTS);
    }
);

  //
  // QUnit.test ("WHEN_theUserGot3Points_THEN_obtenirPointage_returns3",
  //   function (assert){
  //     //Arrange
  //
  //     //Act
  //     var totalPointage = obtenirPointage();
  //
  //     //Assert
  //     assert.equal (totalPointage, 3);
  //   }
  // );
  //
  // QUnit.test ("WHEN_theUserGot0Points_THEN_obtenirPointage_returns0",
  //   function (assert){
  //     //Arrange
  //
  //     //Act
  //     var totalPointage = obtenirPointage();
  //
  //     //Assert
  //     assert.equal (totalPointage, 0);
  //   }
  // );
  //
  // QUnit.test ("WHEN_theUserGot5Points_THEN_obtenirPointage_returns5",
  //   function (assert){
  //     //Arrange
  //
  //     //Act
  //     var totalPointage = obtenirPointage();
  //
  //     //Assert
  //     assert.equal (totalPointage, 5);
  //   }
  // );
