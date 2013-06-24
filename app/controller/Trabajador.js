Ext.define('fnv.controller.Trabajador', {
    extend: 'Ext.app.Controller',
    views: [
        'GridTrabajador',
        'WinTrabajador',
        'WinRemuneracion'
    ],
    refs: [{
        ref: 'MainView',
        selector: 'gridtrabajador'
    },{
        ref: 'WinTrabajador',
        selector: 'wintrabajador'
    },{
        ref: 'WinRemuneracion',
        selector: 'winremuneracion'
    }],
    stores: [
        'TipoDocumento',
        'TipoInstitucion',
        'Cargo',
        'Empleador',
        'Trabajador',
        'Remuneracion'
    ],
    init: function() {
    	this.control({
    		'gridtrabajador': {
    			render: this.onRenderGridTrabajador,
                itemdblclick: this.onItemDblClickGridTrabajador,
                cellclick: this.onCellClickGridTrabajador
    		},
            'gridtrabajador textfield[name=txtBuscar]': {
                keyup: this.onKeyUpTxtBuscar,
                keypress: this.onKeyPressTxtBuscar
            },
            'gridtrabajador button[name=btnNuevo]': {
                click: this.onClickBtnNuevo
            },
            'gridtrabajador button[name=btnRemuneraciones]': {
                click: this.onClickBtnRemuneraciones
            },
            'wintrabajador': {
                close: this.onCloseWinTrabajador
            },
            'wintrabajador button[name=btnGuardar]': {
                click: this.onClickBtnGuardar
            },
            'wintrabajador combobox[name=nu_documento_empleador]': {
                select: this.onSelectCboNuDocumentoEmpleador
            }
    	});
    },
    onRenderGridTrabajador: function(grid){
        grid.getView().on('viewready', function(grd){
            var maps = new Ext.KeyMap(grd.getEl(), [{
                key: Ext.EventObject.ENTER,
                fn: function(){
                    var record = grd.getSelectionModel().selected.items[0];
                    this.onItemDblClickGridTrabajador(grd, record)
                },
                scope: this
            }]);
            grd.keys = maps;
        }, this);
        this.getEmpleadorStore().load();
        this.getTrabajadorStore().proxy.extraParams.textbuscar='';
        this.getTrabajadorStore().load();
    },
    onClickBtnNuevo: function(btn){
        var view = Ext.widget('wintrabajador');
        view.down('form').loadRecord(new fnv.model.Trabajador());
        view.show();
    },
    onCloseWinTrabajador: function(){
        this.getTrabajadorStore().load();
    },
    onClickBtnGuardar: function(btn){
        var form = this.getWinTrabajador().down('form');
        if(form.isValid()){
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer guardar la información?', function(btn){
                if(btn=='yes'){
                    //var record = new fnv.model.Empleador();
                    var record = form.getRecord();
                    var values = form.getValues();
                    record.set(values);
                    if (!values.id) {this.getTrabajadorStore().add(record)};
                    this.getTrabajadorStore().sync({
                        success: function(){this.getWinTrabajador().close();},
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
    onItemDblClickGridTrabajador: function(Grid, record){
        var view = Ext.widget('wintrabajador');
        view.down('form').loadRecord(record);
        view.show();
    },
    onCellClickGridTrabajador: function(grid, td, columnIndex, record, tr, rowIndex, e, opt){
        var columna = grid.up('grid').columns[columnIndex].name;
        var ap_paterno = record.get('ap_paterno');
        var ap_materno = record.get('ap_materno');
        var no_trabajador = record.get('no_trabajador');
        var trabajador = ap_paterno+' '+ap_materno+' '+no_trabajador;
        if(columna == 'actionEditar') {
            this.onItemDblClickGridTrabajador(grid, record);
        } else if(columna == 'actionRemover') {
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer remover al Trabajador: <span style=color:red; font-weidth: bold>' + trabajador + '</span>?', function(btn){
                if(btn=='yes'){
                    Ext.getBody().mask('Procesando ...');
                    this.getTrabajadorStore().remove(record);
                    this.getTrabajadorStore().sync({
                        success: function(){},
                        failure: function(){},
                        callback: function(){Ext.getBody().unmask();},
                        scope: this
                    });
                }
            }, this);
        }
    },
    onSelectCboNuDocumentoEmpleador: function(combo, record){
        this.getWinTrabajador().down('hiddenfield[name=co_tipo_documento_empleador]').setValue(record[0].get('co_tipo_documento_empleador'));
        this.getWinTrabajador().down('hiddenfield[name=co_sede]').setValue(record[0].get('co_sede'));
    },
    onClickBtnRemuneraciones: function(btn){
        if(this.getMainView().getSelectionModel().hasSelection()){
            var view = Ext.widget('winremuneracion');
            var record = this.getMainView().getSelectionModel().getSelection()[0];
            view.down('form[name=frmTrabajador]').loadRecord(record);
            view.down('form[name=frmEmpleador]').loadRecord(record);
            ///
            this.getRemuneracionStore().proxy.extraParams.co_tipo_documento_empleador=record.get('co_tipo_documento_empleador');
            this.getRemuneracionStore().proxy.extraParams.nu_documento_empleador=record.get('nu_documento_empleador');
            this.getRemuneracionStore().proxy.extraParams.co_tipo_documento_trabajador=record.get('co_tipo_documento_trabajador');
            this.getRemuneracionStore().proxy.extraParams.nu_documento_trabajador=record.get('nu_documento_trabajador');
            this.getRemuneracionStore().load({
                callback: function(records, operation, success){
                    //console.log('records');
                    //console.log(records);
                    //console.log(this.getRemuneracionStore().proxy.extraParams);
                },
                scope: this
            })
            ///
            view.show();
        }else{
            Ext.Msg.alert('Informacion', 'Debe seleccionar un Trabajador.');
        }
    },
    onKeyUpTxtBuscar: function(text, key) {
        if((key.getKey() == key.BACKSPACE || key.getKey() == key.DELETE) && text.getValue().length == 0){
            this.getTrabajadorStore().proxy.extraParams.textbuscar = '';
            this.getTrabajadorStore().loadPage(1);
        }
    },
    onKeyPressTxtBuscar: function(text, key){
        if(key.getKey() == key.ENTER){
            this.getTrabajadorStore().proxy.extraParams.textbuscar = text.getValue();
            this.getTrabajadorStore().loadPage(1);
        }
    }
});