//Pont típus és konténere
var Point = Backbone.Model.extend({
    defaults: {
        x:0,
        y:0,
    },
    initialize: function (X,Y) {}
});
var Points = Backbone.Collection.extend({
    model: Point
});
var points = new Points();
var p = new Point(0,0);

//A nező típus és konténere
var Field = Backbone.Model.extend({
    defaults: {
        type:'line',
        point:p,
        rotate:0,
        sides:{top:0, right:1, bottom:0, left:1},
        filld:false
    },
    fill: function(P){},
    rotate: function(P){},
    initialize: function (P,Type) {}
});
var Fields = Backbone.Collection.extend({
    model: field
});
var fields = new Fields();

//A játéktábla
var Table = Backbone.Model.extend({
    defaults: {
        width: 0,
        height: 0,
        time: 0,
        in:  points,
        out: points,
        fields: fields,
        generateMap: function(difficulty){},
        checkSolution: function(){},
    },
    initialize: function (difficulty) {}
});

var gameTable = new table({});