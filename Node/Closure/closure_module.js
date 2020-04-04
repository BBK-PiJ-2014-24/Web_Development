var foo = (function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(" : "));
  }

  return {
    doSomething1: doSomething(),
    doAnother: doAnother
  };
})();

foo.doSomething1;
foo.doAnother();
