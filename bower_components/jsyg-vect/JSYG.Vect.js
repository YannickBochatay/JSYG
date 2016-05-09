(function(root,factory) {
    
    if (typeof module == "object" && typeof module.exports == "object" ) module.exports = factory( require("jsyg-point") );
    else if (typeof define == 'function' && define.amd) define("jsyg-vect",["jsyg-point"],factory);
    else {
        if (typeof JSYG != "undefined") {
            
            if (!JSYG.Point) throw new Error("You need JSYG.Point module");
            
            factory(JSYG.Point);
        }
        else if (typeof Point != "undefined") root.Vect = factory(Point);
        else throw new Error("You need JSYG.Point module");
    }
    
})(this,function(Point) {
        
    "use strict";
    
    /**
     * Constructeur de vecteurs.
     * On peut passer en argument un objet avec les propriétés x et y.
     * @param x abcisse
     * @param y ordonnée
     * @returns {Vect}
     * @link http://www.w3.org/TR/SVG/coords.html#InterfaceSVGPoint
     */
    function Vect(x,y) {
        
        Point.apply(this,arguments);
    }
    
    Vect.prototype = new Point(0,0);
    
    Vect.prototype.constructor = Vect;
    
    /**
     * Longueur du vecteur
     * @returns {Number}
     */
    Vect.prototype.length = function() { return Math.sqrt( Math.pow(this.x,2) + Math.pow(this.y,2) ); };
    
    /**
     * Normalise le vecteur
     * @returns {Vect} nouvelle instance de Vect
     */
    Vect.prototype.normalize = function() {
        var length = this.length();
        return new Vect( this.x / length,this.y / length );
    };
    
    /**
     * Combine deux vecteurs
     * @returns {Vect} nouvelle instance de Vect
     */
    Vect.prototype.combine = function(pt,ascl,bscl) {
        return new Vect(
            (ascl * this.x) + (bscl * pt.x),
            (ascl * this.y) + (bscl * pt.y)
	);
    };
    
    /**
     * Renvoie le produit scalaire de deux vecteurs
     * @param vect instance de Vect ou tout objet avec les propriétés x et y.
     * @returns {Number}
     */
    Vect.prototype.dot = function(vect) { return (this.x * vect.x) + (this.y * vect.y); };
    
    if (typeof JSYG != "undefined") JSYG.Vect = Vect;
        
    return Vect;
    
});