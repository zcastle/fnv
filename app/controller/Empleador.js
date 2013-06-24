Ext.define('fnv.controller.Empleador', {
    extend: 'Ext.app.Controller',
    views: [
        'GridEmpleador',
        'WinEmpleador'
    ],
    refs: [{
        ref: 'MainView',
        selector: 'gridempleador'
    },{
        ref: 'WinEmpleador',
        selector: 'winempleador'
    }],
    stores: [
        'TipoDocumento',
        'TipoInstitucion',
        'Cargo',
        'Empleador'
    ],
    init: function() {
    	this.control({
    		'gridempleador': {
    			render: this.onRenderGridEmpleador,
                itemdblclick: this.onItemDblClickGridEmpleador,
                cellclick: this.onCellClickGridEmpleador
    		},
            'gridempleador button[name=btnNuevo]': {
                click: this.onClickBtnNuevo
            },
            'gridempleador textfield[name=txtBuscar]': {
                keyup: this.onKeyUpTxtBuscar,
                keypress: this.onKeyPressTxtBuscar
            },
            'winempleador': {
                close: this.onCloseWinEmpleador
            },
            'winempleador button[name=btnGuardar]': {
                click: this.onClickBtnGuardar
            }
    	});
    },
    onRenderGridEmpleador: function(grid){
        grid.getView().on('viewready', function(grd){
            var maps = new Ext.KeyMap(grd.getEl(), [{
                key: Ext.EventObject.ENTER,
                fn: function(){
                    var record = grd.getSelectionModel().selected.items[0];
                    this.onItemDblClickGridEmpleador(grd, record)
                },
                scope: this
            }]);
            grd.keys = maps;
        }, this);
        this.getEmpleadorStore().load();
    },
    onClickBtnNuevo: function(btn){
        var view = Ext.widget('winempleador');
        view.down('form').loadRecord(new fnv.model.Empleador());
        view.show();
    },
    onCloseWinEmpleador: function(){
        this.getEmpleadorStore().load();
    },
    onClickBtnGuardar: function(btn){
        var form = this.getWinEmpleador().down('form');
        if(form.isValid()){
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer guardar la información?', function(btn){
                if(btn=='yes'){
                    //var record = new fnv.model.Empleador();
                    var record = form.getRecord();
                    var values = form.getValues();
                    record.set(values);
                    if (!values.id) {this.getEmpleadorStore().add(record)};
                    this.getEmpleadorStore().sync({
                        success: function(){this.getWinEmpleador().close();},
                        failure: function(){},
                        callback: function(){},
                        scope: this
                    });
                }
            }, this);
        }else{
            Ext.Msg.alert('Validación', 'Debe ingresar toda la información solicitada.');
        }
    },
    onItemDblClickGridEmpleador: function(Grid, record){
        var view = Ext.widget('winempleador');
        view.down('form').loadRecord(record);
        view.show();
    },
    onCellClickGridEmpleador: function(grid, td, columnIndex, record, tr, rowIndex, e, opt){
        var columna = grid.up('grid').columns[columnIndex].name;
        var no_razon_social = record.get('no_razon_social');
        if(columna == 'actionEditar') {
            this.onItemDblClickGridEmpleador(grid, record);
        } else if(columna == 'actionRemover') {
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer remover al Empleador: <span style=color:red; font-weidth: bold>' + no_razon_social + '</span>?', function(btn){
                if(btn=='yes'){
                    Ext.getBody().mask('Procesando ...');
                    this.getEmpleadorStore().remove(record);
                    this.getEmpleadorStore().sync({
                        success: function(){},
                        failure: function(){},
                        callback: function(){Ext.getBody().unmask();},
                        scope: this
                    });
                }
            }, this);
        }
    },
    onKeyUpTxtBuscar: function(text, key) {
        if((key.getKey() == key.BACKSPACE || key.getKey() == key.DELETE) && text.getValue().length == 0){
            this.getEmpleadorStore().proxy.extraParams.textbuscar = '';
            this.getEmpleadorStore().loadPage(1);
        }
    },
    onKeyPressTxtBuscar: function(text, key){
        if(key.getKey() == key.ENTER){
            this.getEmpleadorStore().proxy.extraParams.textbuscar = text.getValue();
            this.getEmpleadorStore().loadPage(1);
        }
    }
});