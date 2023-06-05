/* */
const { test } = QUnit;
QUnit.module("fizzbuzz", function () {
  test("létezik-e", function (assert) {
    assert.ok(fizbuz, "yes:)");
  });
  test("fg-e", function (assert) {
    assert.ok(typeof fizbuz === "function", "no :(");
  });
  test("fizbuz(1)", function (assert) {
    assert.equal(fizbuz(1)  , "1,");
  });
  test("fizbuz(2)", function (assert) {
    assert.equal(fizbuz(2)  , "1,2,");
  });
  test("fizbuz(3)", function (assert) {
    assert.equal(fizbuz(3)  , "1,2,fizz, ");
  });
  test("fizbuz(5)", function (assert) {
    assert.equal(fizbuz(5)  , "1,2,fizz, 4,buzz, ");
  });
  test("fizbuz(betu)", function (assert) {
    assert.equal(fizbuz("v")  , "");
  });
  test("fizbuz(-4)", function (assert) {
    assert.equal(fizbuz(-4)  , "");
  });
});
