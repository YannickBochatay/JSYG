(function(factory) {

  if (typeof module == "object" && typeof module.export == "object") {
    
    module.exports = factory(
      require("jsyg-utils"),
      require("jsyg-events"),
      require("jsyg-stdconstruct"),
      require("ismobilejs"),
      require("jsyg-vmouse")
    );

  }
  else if (typeof define == "function" && define.amd) {

      define("jsyg",[
          "jsyg-utils",
          "jsyg-events",
          "jsyg-stdconstruct",
          "isMobile",
          "jsyg-vmouse"
      ],
      factory);
  }
  else if (typeof JSYG!= "undefined" && typeof isMobile != "undefined") JSYG.isMobile = isMobile;
  else throw new Error("dependency is missing");
  
}(function(JSYG,Events,StdConstruct,isMobile) {

    JSYG.Events = Events;
    JSYG.StdConstruct = StdConstruct;
    JSYG.isMobile = isMobile;

    return JSYG;        
}))

