if (typeof define == "function" && define.amd) {

    define("jsyg",[
        "jsyg-utils",
        "jsyg-events",
        "jsyg-stdconstruct",
        "jsyg-strutils"
    ],
    function(JSYG,Events,StdConstruct,strUtils) {

        JSYG.Events = Events;
        JSYG.StdConstruct = StdConstruct;
        
        for (var n in strUtils) JSYG[n] = strUtils[n];

        return JSYG;        
    });
}

