if (typeof define == "function" && define.amd) {

    define("jsyg",[
        "jsyg-utils",
        "jsyg-events",
        "jsyg-stdconstruct"
    ],
    function(JSYG,Events,StdConstruct) {

        JSYG.Events = Events;
        JSYG.StdConstruct = StdConstruct;
        
        return JSYG;        
    });
}

