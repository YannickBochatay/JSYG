(function(factory) {

  if (typeof module == "object" && typeof module.export == "object") {
    
    module.exports = factory(
      require("jsyg-utils"),
      require("jsyg-events"),
      require("jsyg-stdconstruct")
    );

  }
  else if (typeof define == "function" && define.amd) {

      define("jsyg",[
          "jsyg-utils",
          "jsyg-events",
          "jsyg-stdconstruct"
      ],
      factory);
  }
  else if (typeof JSYG === "undefined") throw new Error("dependency is missing");
  
}(function(JSYG,Events,StdConstruct) {

    JSYG.Events = Events;
    JSYG.StdConstruct = StdConstruct;

    return JSYG;        
}))

