
P.Plot.Curve = function(points){
    goog.base(this, []);
    this.t = 0.3;
    this.setPoints(points);
};

goog.inherits(P.Plot.Curve, ol.geom.LineString);
goog.mixin(P.Plot.Curve.prototype, P.Plot.prototype);

P.Plot.Curve.prototype.generate = function(){
    if(this.getPointCount()==2)
        this.setCoordinates(this.points);
    else
        this.setCoordinates(P.PlotUtils.getCurvePoints(this.t, this.points));
};