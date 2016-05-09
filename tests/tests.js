if (typeof require!= "undefined") {
  
    var rep = "../node_modules";
    
    require.config({
        paths: {
            "jsyg" : '../JSYG',
            "jquery" : rep+"/jquery/dist/jquery",
            "jsyg-wrapper" : rep+"/jsyg-wrapper/JSYG-wrapper",
            "jsyg-point" : rep+"/jsyg-point/JSYG.Point",
            "jsyg-vect" : rep+"/jsyg-vect/JSYG.Vect",
            "jsyg-matrix" : rep+"/jsyg-matrix/JSYG.Matrix",
            "jsyg-strutils" : rep+"/jsyg-strutils/JSYG-strutils",
            "jsyg-utils" : rep+"/jsyg-utils/JSYG-utils",
            "jsyg-vmouse" : rep+"/jsyg-vmouse/JSYG-vmouse",
            "jsyg-events" : rep+"/jsyg-events/JSYG.Events",
            "jsyg-stdconstruct" : rep+"/jsyg-stdconstruct/JSYG.StdConstruct",
            "isMobile" : rep+"/ismobilejs/isMobile"
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["jsyg"],factory);
    else factory(JSYG);
    
}(function(JSYG) {

    module("JSYG");

    test("Core", function() {     

        var rect = new JSYG("<rect>");
        
        expect(2);
        
        equal(rect.length,1,"création d'un élément SVG");
        equal(rect.isSVG(),true,"vérification de l'espace de nom");
    });
    
    test("Création d'un point", function() {

        var point = new JSYG.Point(5,10);

        expect(2);
        equal(point.x,5,"abcisse");
        equal(point.y,10,"ordonnée");
    });
    
    test("Création d'un vecteur", function() {
        
        var vect = new JSYG.Vect(2,5);

        expect(2);
        ok(vect instanceof JSYG.Vect,"instance de Vect");
        ok(vect instanceof JSYG.Vect.prototype.constructor,"instance de Point");
    });
    
     test("Création d'une matrice", function() {     

        var mtx = new JSYG.Matrix();
        
        expect(6);
        equal(mtx.a,1,"a");
        equal(mtx.b,0,"b");
        equal(mtx.c,0,"c");
        equal(mtx.d,1,"d");
        equal(mtx.e,0,"e");
        equal(mtx.f,0,"f");
    });
    
     var container = JSYG("#qunit-fixture");

    test("Dimensions d'un élement", function() {
        
        var svg = JSYG('<svg width="500" height="400">').appendTo(container);
        var rect = JSYG('<rect>').attr({width:200,height:200,x:50,y:50}).appendTo(svg);
                
        var dimRect = rect.getDim();

        expect(9);
        
        equal(svg.attr("width"),"500","largeur");
        equal(svg.attr("height"),"400","hauteur");
        
        equal(svg.parent()[0],container[0],"hierarchie DOM");
        
        ok(svg.isSVG(),"reconnaissance d'un élément SVG");
        ok(rect.isSVG(),"reconnaissance d'un élément SVG");
                
        equal(dimRect.x,50,"abcisse");
        equal(dimRect.y,50,"ordonnée");
        
        rect.setDim({
            width:20,
            height:30,
            x:0,
            y:0
        });
        
        dimRect = rect.getDim();
        
        equal(dimRect.x,0,"abcisse");
        equal(dimRect.width,20,"ordonnée");
    });
    
    test("Manipulation des événements", function() {     
        
        var cpt = 0;
        
        var events = new JSYG.Events();
        
        function incremente() { cpt++; }
        
        events.ontest = null;
        
        expect(3);
        
        events.on("test",incremente);
        events.trigger("test");
        equal(cpt,1,"Déclenchement de l'événement");
        
        events.on("test",incremente);
        events.trigger("test");
        equal(cpt,2,"Non prise en compte des doublons");
        
        events.off("test",incremente);
        events.trigger("test");
        equal(cpt,2,"Suppression d'un événement");
        
    });
    
    test("Gestion des fonction standard", function() {     
        
        var obj = new JSYG.StdConstruct();
        
        obj.enable();
        
        expect(2);
        
        equal(obj.enabled, true, "activation du plugin");
        
        equal(typeof obj.on, "function", "héritage de Events");
    });
    
     test("fonctions diverses sur les chaines", function() {
        
        expect(2);
        
        equal( JSYG.camelize("toto_tata_titi"), "totoTataTiti" ,"camelize");
        equal( JSYG.dasherize("totoTataTiti"), "toto-tata-titi" ,"camelize");
    });
    
    test("Detection mobile", function() {
       
        equal( typeof JSYG.isMobile, "object", "isMobile");
    });
    
}));
