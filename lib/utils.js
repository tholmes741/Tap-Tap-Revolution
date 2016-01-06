/*global Tap*/
(function(){
  if (typeof Tap === "undefined") {
    window.Tap = {};
  }

  var Utils = Tap.Utils = {};

  var inherits = Utils.inherits = function (ChildClass, BaseClass) {
    function Surrogate () { this.constructor = ChildClass };
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

})();
