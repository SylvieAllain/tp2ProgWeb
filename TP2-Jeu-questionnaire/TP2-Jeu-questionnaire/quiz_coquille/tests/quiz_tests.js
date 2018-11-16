/**
 * @module quiz.js
 * @author Sylvie Allain
 * @author Thierry Légaré
 * @copyright 2018
 */

 Qunit.test (WHEN_theUserGetTheRightAnswer_THEN_ajouterPoint_returns1point,
   function(assert) {
    //Arrange
    var isGoodAnswer = true;
    //Act
    var getPoint = js.quiz.ajouterPoint();
    //Assert
    const EXPECTED_POINT = 1;
    assert.Equals (EXPECTED_POINT, getPoint);
   }
 );

 Qunit.test (WHEN_theUserGetTheRightAnswer_THEN_ajouterPoint_returns1point,
   function(assert) {
    //Arrange
    var isGoodAnswer = false;
    //Act
    var getPoint = js.quiz.ajouterPoint();
    //Assert
    const EXPECTED_POINT = 0;
    assert.Equals (EXPECTED_POINT, getPoint);
   }
 );
