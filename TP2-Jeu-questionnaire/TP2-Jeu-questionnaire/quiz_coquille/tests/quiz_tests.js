/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

 /*QUnit.test ("WHEN_theUserGetTheRightAnswer_THEN_ajouterPoint_returns1point",
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

  QUnit.test ("WHEN_theUserReceiveQuestion1_THEN_obtenirChoix_returnsEachChoice"
    function (assert){
    //Arrange
    var noQuestion = 0;
    questionQuiz = [["Q1", 3, "URL", "Q1-C1","Q1-C2","Q1-C3","Q1-C4"]];
    //Act
    var choixReponse = obtenirChoix (noQuestion);
    for (i = 0; i < choixReponse.length; i++)
    {
      if (questionQuiz[i + 3] != choixReponse[i])
      {
        estEgal = false;
      }
    }
    //Assert
    assert.equal (obtenirChoix, true);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion2_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 1;
  questionQuiz = [["Q2", 3, "URL", "Q2-C1","Q2-C2","Q2-C3","Q2-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
  }

);

QUnit.test ("WHEN_theUserReceiveQuestion3_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 2;
  questionQuiz = [["Q3", 3, "URL", "Q3-C1","Q3-C2","Q3-C3","Q3-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
  }

);

QUnit.test ("WHEN_theUserReceiveQuestion4_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 3;
  questionQuiz = [["Q4", 3, "URL", "Q4-C1","Q4-C2","Q4-C3","Q4-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
  }

);

QUnit.test ("WHEN_theUserReceiveQuestion5_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 4;
  questionQuiz = [["Q5", 3, "URL", "Q5-C1","Q5-C2","Q5-C3","Q5-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
}

);

QUnit.test ("WHEN_theUserReceiveQuestion6_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 5;
  questionQuiz = [["Q6", 3, "URL", "Q6-C1","Q6-C2","Q6-C3","Q6-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
}

);

QUnit.test ("WHEN_theUserReceiveQuestion7_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 6;
  questionQuiz = [["Q7", 3, "URL", "Q7-C1","Q7-C2","Q7-C3","Q7-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
}

);

QUnit.test ("WHEN_theUserReceiveQuestion8_THEN_obtenirChoix_returnsEachChoice"
  function (assert){
  //Arrange
  var noQuestion = 7;
  questionQuiz = [["Q8", 3, "URL", "Q8-C1","Q8-C2","Q8-C3","Q8-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
  }

);

QUnit.test ("WHEN_theUserReceiveQuestion9_THEN_obtenirChoix_returnsEachChoices"
  function (assert){
  //Arrange
  var noQuestion = 8;
  questionQuiz = [["Q9", 3, "URL", "Q9-C1","Q9-C2","Q9-C3","Q9-C4"]];
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
  }
);

QUnit.test ("WHEN_theUserReceiveQuestion10_THEN_obtenirChoix_returnsEachChoices"
  function (assert){
  //Arrange
  var noQuestion = 9;
  questionQuiz = [["Q10", 3, "URL", "Q10-C1","Q10-C2","Q10-C3","Q10-C4"]];
  var estEqual = true;
  //Act
  var choixReponse = obtenirChoix (noQuestion);
  for (i = 0; i < choixReponse.length; i++)
  {
    if (questionQuiz[i + 3] != choixReponse[i])
    {
      estEgal = false;
    }
  }
  //Assert
  assert.equal (obtenirChoix, true);
}

);
