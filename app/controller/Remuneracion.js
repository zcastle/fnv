Ext.define('fnv.controller.Remuneracion', {
    extend: 'Ext.app.Controller',
    views: [
        'WinRemuneracion',
        'WinEmpleadorBuscar'
    ],
    refs: [{
        ref: 'MainView',
        selector: 'winremuneracion'
    },{
        ref: 'WinEmpleadorBuscar',
        selector: 'winempleadorbuscar'
    }],
    stores: [
        'Remuneracion',
        'Meses',
        'PeriodicidadIngreso',
        'TipoMoneda',
        'RegimenPensionario',
        'Empleador'
    ],
    init: function() {
    	this.control({
    		'winremuneracion': {
    			render: this.onRenderWinRemuneracion
    		},
            'winremuneracion grid': {
                cellclick: this.onCellClickGridRemuneracion,
                cellkeydown: this.onCellKeydownGridRemuneracion
            },
            'winremuneracion button[name=btnAdd]': {
                click: this.onClickBtnAdd
            },
            'winremuneracion button[name=btnGuardar]': {
                click: this.onClickBtnGuardar
            },
            'winremuneracion textfield[action=actionBuscarEmpleador]': {
                keypress: this.onKeypressActionBuscarEmpleador
            },
            'winempleadorbuscar grid': {
                render: this.onRenderGridEmpleadorBuscar,
                itemdblclick: this.onItemDblClickGridEmpleadorBuscar
            }
    	});
    },
    onRenderWinRemuneracion: function(){
        this.getRemuneracionStore().removeAll();
    },
    onRenderGridEmpleadorBuscar: function(grid){
        this.getEmpleadorStore().load();
        grid.getView().on('viewready', function(grd){
            var maps = new Ext.KeyMap(grd.getEl(), [{
                key: Ext.EventObject.ENTER,
                fn: function(){
                    var record = grd.getSelectionModel().selected.items[0];
                    this.onItemDblClickGridEmpleadorBuscar(grd, record)
                },
                scope: this
            }]);
            grd.keys = maps;
        }, this);
    },
    onClickBtnAdd: function(){
        var gridRemuneracion = this.getMainView().down('grid[name=GridRemuneracion]');
        var valuesEmpleador = this.getMainView().down('form[name=frmEmpleador]').getValues();
        var valuesTrabajador = this.getMainView().down('form[name=frmTrabajador]').getValues();
        var rec = new fnv.model.Remuneracion({
            co_tipo_documento_empleador: valuesEmpleador.co_tipo_documento_empleador,
            nu_documento_empleador: valuesEmpleador.nu_documento_empleador,
            co_tipo_documento_trabajador: valuesTrabajador.co_tipo_documento_trabajador,
            nu_documento_trabajador: valuesTrabajador.nu_documento_trabajador
        });
        var edit = gridRemuneracion.plugins[0];
        edit.cancelEdit();
        this.getRemuneracionStore().add(rec);
        var r = this.getRemuneracionStore().count() - 1;
        edit.startEditByPosition({
            row: r,
            column: 0
        });
        this.getMainView().down('label[name=lblTotal]').setText('Total registros: '+(r+1));
    },
    onClickBtnGuardar: function(){
        var grid = this.getMainView().down('grid');
        if(this.isValid(grid)){
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer guardar la información?', function(btn){
                if(btn=='yes'){
                    //var record = new fnv.model.Empleador();
                    //var record = form.getRecord();
                    //var valuesEmpleador = this.getMainView().down('form[name=frmEmpleador]').getValues();
                    //var valuesTrabajador = this.getMainView().down('form[name=frmTrabajador]').getValues();

                    /*grid.getStore().each(function(record){
                        this.getRemuneracionStore().add({
                            co_tipo_documento_empleador: valuesEmpleador.co_tipo_documento_empleador,
                            nu_documento_empleador: valuesEmpleador.nu_documento_empleador,
                            co_sede: valuesEmpleador.co_sede,
                            co_tipo_documento_trabajador: valuesTrabajador.co_tipo_documento_trabajador,
                            nu_documento_trabajador: valuesTrabajador.nu_documento_trabajador,
                            fe_ini_periodo_aporte: Ext.Date.format(record.get('fe_ini_periodo_aporte'), 'd/m/Y'),
                            fe_fin_periodo_aporte: Ext.Date.format(record.get('fe_fin_periodo_aporte'), 'd/m/Y'),
                            co_tipo_trabajador: '21',
                            co_periodicidad_ingreso: record.get('co_periodicidad_ingreso'),
                            co_tipo_moneda: record.get('co_tipo_moneda'),
                            va_remuneracion_asegurable: record.get('va_remuneracion_asegurable'),
                            co_tipo_seguro: '00',
                            va_aporte_seguro: record.get('va_aporte_seguro'),
                            co_regimen_pensionario: record.get('co_regimen_pensionario'),
                            va_aporte_regimen_pensionario: record.get('va_aporte_regimen_pensionario'),
                            va_aporte_fonavi_trabajador: record.get('va_aporte_fonavi_trabajador'),
                            va_aporte_fonavi_empleador: record.get('va_aporte_fonavi_empleador')
                        });
                    }, this);*/

                    this.getRemuneracionStore().sync({
                        success: function(){},
                        failure: function(){},
                        callback: function(){this.getRemuneracionStore().load()},
                        scope: this
                    });

                }
            }, this);
        }else{
            Ext.Msg.alert('Validación', 'Debe ingresar toda la información solicitada.');
        }
    },
    isValid: function(grid){
        return true;
    },
    onKeypressActionBuscarEmpleador: function(text, event){
        if(event.getKey()==event.ENTER){
            Ext.widget('winempleadorbuscar').show();
        }
    },
    onItemDblClickGridEmpleadorBuscar: function(grid, record){
        this.getMainView().down('form[name=frmEmpleador]').loadRecord(record);
        /////
        var valuesEmpleador = record.data;
        var valuesTrabajador = this.getMainView().down('form[name=frmTrabajador]').getValues();
        this.getRemuneracionStore().proxy.extraParams.co_tipo_documento_empleador=valuesEmpleador.co_tipo_documento_empleador;
        this.getRemuneracionStore().proxy.extraParams.nu_documento_empleador=valuesEmpleador.nu_documento_empleador
        this.getRemuneracionStore().proxy.extraParams.co_tipo_documento_trabajador=valuesTrabajador.co_tipo_documento_trabajador;
        this.getRemuneracionStore().proxy.extraParams.nu_documento_trabajador=valuesTrabajador.nu_documento_trabajador;
        this.getRemuneracionStore().load({
            callback: function(records, operation, success){
                console.log('records');
                console.log(records);
                this.getWinEmpleadorBuscar().close();
            },
            scope: this
        })
        /////
    },
    onCellClickGridRemuneracion: function(grid, td, columnIndex, record, tr, rowIndex, e, opt){
        var columna = grid.up('grid').columns[columnIndex].name;
        if(columna == 'actionRemover') {
            Ext.Msg.confirm('Confirmación', '¿Estas seguro de querer remover el registro?', function(btn){
                if(btn=='yes'){this.getRemuneracionStore().remove(record);}
            }, this);
        }
    },
    onCellKeydownGridRemuneracion: function(grid, td, columnIndex, record, tr, rowIndex, e, opt){
        var columna = grid.up('grid').columns[columnIndex].name;
        if(columna == 'actionGrabar') {
            
        }
    }
});