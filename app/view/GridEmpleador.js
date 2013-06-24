Ext.define('fnv.view.GridEmpleador', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridempleador',
	store: 'Empleador',
	//sortableColumns: false,
	//plugins: ['cellediting'],
	initComponent: function() {
		this.columns = [{
            xtype: 'actioncolumn',
            name: 'actionEditar',
            width: 20,
            menuDisabled: true,
            items: [{
                icon: 'resources/images/editar.png',
                tooltip: 'Editar',
                iconCls: 'mousepointer'
            }]
        },{
            xtype: 'actioncolumn',
            name: 'actionRemover',
            width: 20,
            menuDisabled: true,
            items: [{
                icon: 'resources/images/remove.gif',
                tooltip: 'Remover',
                iconCls: 'mousepointer'
            }]
        },{
			text: 'Tipo Documento',
			dataIndex: 'no_tipo_documento_empleador',
			width: 150
		},{
			text: 'No. Documento',
			dataIndex: 'nu_documento',
			width: 90
		},{
			text: 'Sede',
			dataIndex: 'co_sede',
			width: 90
		},{
			text: 'Tipo Institucion',
			dataIndex: 'no_tipo_institucion',
			width: 150
		},{
			text: 'Razon Social',
			dataIndex: 'no_razon_social',
			width: 200
		},{
			text: 'Nombre Sede',
			dataIndex: 'de_sede',
			width: 100
		},{
			text: 'Tipo Doc. Rep.',
			dataIndex: 'no_tipo_documento_representante',
			width: 150
		},{
			text: 'Doc. Representante',
			dataIndex: 'nu_documento_representante',
			width: 90
		},{
			text: 'Apellidos Rep.',
			dataIndex: 'no_ap_representante',
			width: 100
		},{
			text: 'Cargo',
			dataIndex: 'no_cargo_representante',
			width: 100
		},{
			text: 'Correo',
			dataIndex: 'correo_representante',
			width: 100
		},{
			text: 'Tlf. Rep.',
			dataIndex: 'nu_telefono_representante',
			width: 90
		},{
			text: 'Tipo Doc. Alternativo 1',
			dataIndex: 'no_tipo_documento_alternativo_1',
			width: 100
		},{
			text: 'Doc. Alternativo 1',
			dataIndex: 'nu_documento_alternativo_1',
			width: 90
		},{
			text: 'Tipo Doc. Alternativo 2',
			dataIndex: 'no_tipo_documento_alternativo_2',
			width: 100
		},{
			text: 'Doc. Alternativo 2',
			dataIndex: 'nu_documento_alternativo_2',
			width: 90
		}];
		this.tbar = [{
			xtype: 'textfield',
			name: 'txtBuscar',
			enableKeyEvents: true,
			labelWidth: 50,
			flex: 1,
			fieldLabel: 'Buscar'
		}];
		this.bbar = Ext.create('Ext.PagingToolbar', {
            store: 'Empleador',
            displayInfo: true,
            displayMsg: 'Mostrando registros {0} - {1} de {2}',
            emptyMsg: "No hay registros para mostrar",
            items:[
            '-', {
	        	text: 'Nuevo',
	        	name: 'btnNuevo',
	        	scale: 'medium',
	        	iconCls: 'ico-nuevo'
	        }]
        });
		this.callParent(arguments);
	}
})