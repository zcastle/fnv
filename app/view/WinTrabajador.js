Ext.define('fnv.view.WinTrabajador', {
    extend: 'Ext.Window',
    alias: 'widget.wintrabajador',
    title: 'Registro de Trabajador',
    //width: 900,
    modal: true,
    resizable: false,
    border: false,
    initComponent: function() {
        this.items = [{
        	xtype: 'form',
        	frame: true,
        	layout: 'hbox',
        	defaultType: 'container',
        	defaults: {
        		defaultType: 'textfield',
        		defaults: {
	        		width: 400,
	        		labelWidth: 145,
	        		allowBlank: false
	        	}
        	},
        	items: [{
        		items: [{
	        		xtype: 'hiddenfield',
	        		name: 'id'
	        	},{
	        		xtype: 'combobox',
	        		name: 'nu_documento_empleador',
	        		fieldLabel: 'Empleador',
	        		store: 'Empleador',
	                valueField: 'nu_documento',
	                displayField: 'no_razon_social',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		xtype: 'hiddenfield',
	        		name: 'co_tipo_documento_empleador'
	        	},{
	        		xtype: 'hiddenfield',
	        		name: 'co_sede'
	        	},{
	        		xtype: 'combobox',
	        		name: 'co_tipo_documento_trabajador',
	        		fieldLabel: 'Tipo Documento',
	        		store: 'TipoDocumento',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'nu_documento_trabajador',
	        		fieldLabel: 'No. Documento'
	        	},{
	        		name: 'ap_paterno',
	        		fieldLabel: 'Ap. Paterno'
	        	},{
	        		name: 'ap_materno',
	        		fieldLabel: 'Ap. Materno'
	        	},{
	        		name: 'no_trabajador',
	        		fieldLabel: 'Nombres'
	        	},{
	        		name: 'nu_documento_seguro',
	        		fieldLabel: 'No. Documento Seguro'
	        	},{
	        		xtype: 'datefield',
	        		name: 'fe_nacimiento',
	        		fieldLabel: 'Fe. Nacimiento'
	        	}]
        	},{
        		margin: '0 0 0 10',
        		items: [{
	        		xtype: 'combobox',
	        		name: 'co_tipo_documento_alternativo_1',
	        		fieldLabel: 'Tipo Doc. Alternativo 1',
	        		allowBlank: true,
	        		store: 'TipoDocumento',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'nu_documento_alternativo_1',
	        		fieldLabel: 'No. Doc. Alternativo 1',
	        		allowBlank: true
	        	},{
	        		xtype: 'combobox',
	        		name: 'co_tipo_documento_alternativo_2',
	        		fieldLabel: 'Tipo Doc. Alternativo 2',
	        		allowBlank: true,
	        		store: 'TipoDocumento',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'nu_documento_alternativo_2',
	        		fieldLabel: 'No. Doc. Alternativo 2',
	        		allowBlank: true
	        	},{
	        		name: 'co_trabajador_institucion',
	        		fieldLabel: 'Codigo Trabajador',
	        		allowBlank: true
	        	}]
        	}],
        	buttons: [{
	            name: 'btnGuardar',
	            text: 'Guardar',
	            scale: 'medium',
	            iconCls: 'ico-grabar'
	        },{
	            text: 'Cancelar',
	            scale: 'medium',
	            iconCls: 'ico-cancelar',
	            scope: this,
	            handler: this.close
	        }]
        }]
        this.callParent(arguments);
    }      
});