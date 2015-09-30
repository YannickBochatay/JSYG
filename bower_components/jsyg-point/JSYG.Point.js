(function(root,factory) {
    
    if (typeof define == 'function' && define.amd) define("jsyg-point",factory);
    else if (typeof JSYG != "undefined") factory();
    else root.Point = factory();
    
}(this,function() {
	
    "use strict";
	
    var svg = (typeof document != "undefined") && document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg');
	
    function Point(x,y) {
		
        if (typeof x == 'object' && y == null) {
            y = x.y;
            x = x.x;
        }
		
        this.x = (typeof x == "number") ? x : parseFloat(x);
        this.y = (typeof y == "number") ? y : parseFloat(y);
    }
	
    Point.prototype = {
			
        constructor : Point,
		
        /**
         * Applique une matrice de transformation 
         * @param mtx instance de JSYG.Matrix (ou SVGMatrix)
         * @returns nouvelle instance
         */
        mtx : function(mtx) {
		
            if (mtx && typeof mtx == "object" && mtx.mtx) mtx = mtx.mtx;
            if (!mtx) return new Point(this.x,this.y);
			
            var point = svg.createSVGPoint();
            point.x = this.x;
            point.y = this.y;
            point = point.matrixTransform(mtx);
			
            return new this.constructor(point.x,point.y);
        },
		
        /**
         * Renvoie un objet natif SVGPoint équivalent (utile pour certaines méthodes native comme getCharNumAtPosition).
         */
        toSVGPoint : function() {
			
            var point = svg.createSVGPoint();
            point.x = this.x;
            point.y = this.y;
			
            return point;
        },
        
        toString : function() { return '{"x":'+this.x+',"y":'+this.y+"}"; },
        
        toJSON : function() { return this.toString(); }
    };
    
    if (typeof JSYG != "undefined") JSYG.Point = Point;
	
    return Point;
	
}));
