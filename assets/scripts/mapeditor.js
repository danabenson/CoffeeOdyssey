
$(function () {

    window.editor = {

        initialize: function () {
            this.getTiles();
            this.commandsView = new CommandsView();
            this.tilesView = new TilesView();
        },

        getTiles: function () {
            return $.get('/assets/data.json').pipe(function (data) {
                for (var i = 0; i < data.terrain.length; i++) {
                    console.log(data.terrain[i],name);
                }
                return true;
            });
        }
    };

    var TilesModel = Backbone.Model.extend({

    });

    var TileModel = Backbone.Model.extend({

    });

    var TileList = Backbone.Collection.extend({
        model: TileModel
    });

    var CommandsModel = Backbone.Model.extend({

    });

    var PropertiesModel = Backbone.Model.extend({

    });

    var TilesView = Backbone.View.extend({
        el: $('#tiles'),

        events: {
            'click button#fillall': 'fillall'
        },

        initialize: function () {
            $(this.el).draggable({ handle: '.titlebar' });
            this.render();
        },

        render: function () {

        },

        fillall: function () {
            alert('fill all');
        }
    });

    var TileView = Backbone.View.extend({

    });

    var CommandsView = Backbone.View.extend({
        el: $('#commands'),

        events: {

            'click button#zoomin': 'zoomin',
            'click button#zoomout': 'zoomout',
            'click button#save': 'save',
        },

        intiialize: function () {
            $(this.el).draggable({handle: '.titlebar'});
            _.bindAll(this, 'zoomin', 'zoomout');
            this.render();
        },

        zoomin: function () {
            alert('zoom in');
        },

        zoomout: function () {
            alert('zoom out');
        },

        save: function () {
            alert('save');
        }
    });

    var PropertiesView = Backbone.View.extend({

    });


});

$(document).ready(function () {
    window.editor.initialize();
});
