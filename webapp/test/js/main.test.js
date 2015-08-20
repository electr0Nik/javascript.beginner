'use strict';

describe("main", function () {
  it("getResult(x, y)", function () {
    expect(getResult()).toBeNaN();
    expect(getResult(15, 22)).toBe(37);
    expect(getResult(15, 22)).not.toBe(40);
  });

  it("getHelloWorld", function () {
    expect(getHelloWorld()).toBe("hello world!");
    expect(getHelloWorld()).not.toBe("hello welt!");
  });
});