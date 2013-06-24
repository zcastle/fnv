Ext.define('fnv.view.WinEmpleador', {
    extend: 'Ext.Window',
    alias: 'widget.winempleador',
    title: 'Registro de Empleador',
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
	        		name: 'co_tipo_documento_empleador',
	        		fieldLabel: 'Tipo Documento',
	        		store: 'TipoDocumento',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'nu_documento',
	        		fieldLabel: 'No. Documento'
	        	},{
	        		name: 'co_sede',
	        		fieldLabel: 'Sede'
	        	},{
	        		xtype: 'combobox',
	        		name: 'co_tipo_institucion',
	        		fieldLabel: 'Tipo Institucion',
	        		store: 'TipoInstitucion',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'no_razon_social',
	        		fieldLabel: 'Razon Social'
	        	},{
	        		name: 'de_sede',
	        		fieldLabel: 'Nombre Sede'
	        	},{
	        		xtype: 'combobox',
	        		name: 'co_tipo_documento_representante',
	        		fieldLabel: 'Tipo Doc. Representante',
	        		store: 'TipoDocumento',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'nu_documento_representante',
	        		fieldLabel: 'No. Doc. Representante'
	        	}]
        	},{
        		margin: '0 0 0 10',
        		items: [{
	        		name: 'no_ap_representante',
	        		fieldLabel: 'Nombres Apellidos'
	        	},{
	        		xtype: 'combobox',
	        		name: 'co_cargo_representante',
	        		fieldLabel: 'Cargo',
	        		store: 'Cargo',
	                valueField: 'codigo',
	                displayField: 'descripcion',
	                queryMode: 'local',
	                editable: false
	        	},{
	        		name: 'correo_representante',
	        		fieldLabel: 'Correo Electronico',
	        		allowBlank: true
	        	},{
	        		name: 'nu_telefono_representante',
	        		fieldLabel: 'No. Telefono'
	        	},{
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