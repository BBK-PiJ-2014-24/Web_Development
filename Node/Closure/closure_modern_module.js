// This is an example of a MODULES PATTERN
// ----------------------------------------
// MyModules is a modules pattern - it hosts a family of modules in the modules object
// Each module within the MyModule family potentially has its own dependencies of other models
// MyModules is a IIFE() to create a Singleton.

var MyModules = (function() {
  var modules = {}; // this object will store the module objects

  // "define"
  // -------
  // This function adds the module to the family of modules in the modules object
  // name: name of module
  // deps: array/list of the NAMES of the dependency modules  required for this function
  // impl: function
  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]; // for each dependency name in the list swap with the actual dependecy module
    }
    modules[name] = impl.apply(impl, deps); // invoke all the dependencies for this module and store ready in the modules object
  }

  // get
  // ---
  // a getter for the required module.
  function get(name) {
    return modules[name];
  }

  // Reveals the API functions
  // --------------------------
  return {
    define: define,
    get: get
  };
})();

// Module: Bar
// ------------
// No dependencies
// returns inner func, hello() - a hello msg
MyModules.define("bar", [], function() {
  function hello(who) {
    return "Let me introduce " + who;
  }
  return {
    hello: hello
  };
});

// Module: foo
// ------------
// bar() becomes a dependency for foo()
// returns inner func, awesome() - console logs a message (from bar)
MyModules.define("foo", ["bar"], function(bar) {
  // dependency func bar is passed as a argument in func
  var hungry = "hippo";

  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return { awesome: awesome };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippy"));
foo.awesome();
