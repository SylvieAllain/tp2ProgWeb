/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

// Nous n'avons pas testé les fonctions "maj", car nous considérons que ces tests d'interfaces ne sont pas pertinents pour notre projet.
// Les fonctions qui font seulement des appels de fonctions ne seront également pas testé. 

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
  var isItThere = false;
  //Act
    choisirQuestions();
    for (i = 0; i < questionsQuiz.length; i++)
    {
      if (questionsQuiz.indexOf(questionsQuiz[i]) != i)
       isItThere = true;
    }
  //Assert

  assert.equal(isItThere,false,"¯\_(ツ)_/¯");
});

//ajouterPoint
QUnit.test ("WHEN_totalPointageIsOne_THEN_ajouterPoint_returnsTotalPointageToTwo",
  function(assert)
  {
    //Arrange
    totalPointage = 1;

    //Act
    ajouterPoint();

    //Assert
    const EXPECTED_TOTAL_OF_POINTS = 2;
    assert.equal(totalPointage, EXPECTED_TOTAL_OF_POINTS);
  }
);

QUnit.test ("WHEN_totalPointageIsZero_THEN_ajouterPoint_returnsTotalPointageToOne",
  function(assert)
  {
    //Arrange
    totalPointage = 0;

    //Act
    ajouterPoint();

    //Assert
    const EXPECTED_TOTAL_OF_POINTS = 1;
    assert.equal(totalPointage, EXPECTED_TOTAL_OF_POINTS);
  }
);

//obtenirTotalQuestion
QUnit.test ("WHEN_expectedMaxQuestionToBe5_THEN_obtenirTotalQuestion_returnsMaxQuestionToBe5",
  function(assert)
  {
    //Arrange

    //Act
    var maxQuestions = obtenirTotalQuestion();

    //Assert
    const EXPECTED_TOTAL_OF_POINTS = 5;
    assert.equal(maxQuestions, EXPECTED_TOTAL_OF_POINTS);
  }
);

//chargerQuestionSuivante
QUnit.test ("WHEN_questionCouranteIsZero_THEN_chargerQuestionSuivante_returnsQuestionCourante1",
  function(assert)
  {
    //Arrange
    questionCourante = 0;

    //Act
    chargerQuestionSuivante();

    //Assert
    const EXPECTED_INDEX = 1;
    assert.equal(questionCourante, EXPECTED_INDEX);
  }
);

QUnit.test ("WHEN_questionCouranteIsOne_THEN_chargerQuestionSuivante_returnsQuestionCourante2",
  function(assert)
  {
    //Arrange
    questionCourante = 1;

    //Act
    chargerQuestionSuivante();

    //Assert
    const EXPECTED_INDEX = 2;
    assert.equal(questionCourante, EXPECTED_INDEX);
  }
);

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

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert
  const  EXPECTED_ARRAY = [questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];
  assert.deepEqual(tableauChoix, EXPECTED_ARRAY);
  }
 );

 QUnit.test("WHEN_questionIsSecondQuestion_THEN_obtenirChoix_returnsAllSeconQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 1;

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert
  const  EXPECTED_ARRAY = [questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];
  assert.deepEqual(tableauChoix, EXPECTED_ARRAY);
  }
 );

 QUnit.test("WHEN_questionIsThirdQuestion_THEN_obtenirChoix_returnsAllThirdQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 2;

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert
  const  EXPECTED_ARRAY = [questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];
  assert.deepEqual(tableauChoix, EXPECTED_ARRAY);
  }
 );

 QUnit.test("WHEN_questionIsFourthQuestion_THEN_obtenirChoix_returnsAllFourthQuestionChoices", function(assert){
  //Arrange
  var noQuestion = 3;

  //Act
  var tableauChoix = obtenirChoix(noQuestion)
  //Assert
  const  EXPECTED_ARRAY = [questionsQuiz[noQuestion][3],questionsQuiz[noQuestion][4],questionsQuiz[noQuestion][5],questionsQuiz[noQuestion][6]];
  assert.deepEqual(tableauChoix, EXPECTED_ARRAY);
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
    var userChoice = obtenirBonneReponse(noQuestion);

    //Act
    var isGoodAnswer = validerQuestion (noQuestion,userChoice);

    //Assert
    assert.equal (isGoodAnswer, true);
  }
);

  QUnit.test ("WHEN_theUserClickOnTheWrongAnswer_THEN_validerReponse_returnsFalse",
    function (assert){
      //Arrange
      var noQuestion = 0;
      var userChoice = questionsQuiz[noQuestion][POS_REPONSE - 1];

      //Act
      var isGoodAnswer = validerQuestion (noQuestion,userChoice);

      //Assert
      assert.equal (isGoodAnswer, false);
    }
  );
