var GameView = Backbone.View.extend({
    el: '#gameTable',
    template: _template( $('#gameTable-template').html() ),
    model: Table,
    
    events: {
        'click .field': 'rotate',
        'click .waterTap': 'checkSolution'
    },
    
   initialize: function() {
        this.listenTo(this.model, 'change', this.updateView);
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    updateView: function(data) {
    },

    rotate: function(){},
    checkSolution: function(){}
});

var app = new FormView();