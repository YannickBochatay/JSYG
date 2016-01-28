if (typeof define == "function" && define.amd) {

    define("jsyg",[
        "jsyg-utils",
        "jsyg-events",
        "jsyg-stdconstruct",
        "isMobile",
        "jsyg-vmouse"
    ],
    function(JSYG,Events,StdConstruct,isMobile) {

        JSYG.Events = Events;
        JSYG.StdConstruct = StdConstruct;
        JSYG.isMobile = isMobile;
        
        return JSYG;        
    });
}
else if (typeof JSYG!= "undefined" && typeof isMobile != "undefined") JSYG.isMobile = isMobile;

