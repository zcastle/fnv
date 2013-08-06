Ext.define('fnv.view.GridTrabajador', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridtrabajador',
	store: 'Trabajador',
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
			text: 'Tipo Doc. Empleador',
			dataIndex: 'no_tipo_documento_empleador',
			width: 150
		},{
			text: 'No. Doc. Empleador',
			dataIndex: 'nu_documento_empleador',
			width: 90
		},{
			text: 'Sede',
			dataIndex: 'co_sede',
			width: 50
		},{
			text: 'Tipo Doc. Trabajador',
			dataIndex: 'no_tipo_documento_trabajador',
			width: 150
		},{
			text: 'No. Doc. Trabajador',
			dataIndex: 'nu_documento_trabajador',
			width: 95
		},{
			text: 'Ap. Paterno',
			dataIndex: 'ap_paterno',
			width: 100
		},{
			text: 'Ap. Materno',
			dataIndex: 'ap_materno',
			width: 100
		},{
			text: 'Nombres',
			dataIndex: 'no_trabajador',
			width: 100
		},{
			text: 'No. Doc. Seguro',
			dataIndex: 'nu_documento_seguro',
			width: 100
		},{
			text: 'Tipo Doc. Alternativo 1',
			dataIndex: 'no_tipo_documento_alternativo_1',
			width: 100
		},{
			text: 'No Doc. Alternativo 1',
			dataIndex: 'nu_documento_alternativo_1',
			width: 100
		},{
			text: 'Tipo Doc. Alternativo 2',
			dataIndex: 'no_tipo_documento_alternativo_2',
			width: 100
		},{
			text: 'No. Doc. Alternativo 2',
			dataIndex: 'nu_documento_alternativo_2',
			width: 100
		},{
			text: 'Fe.Nacimiento',
			dataIndex: 'fe_nacimiento',
			width: 100
		},{
			text: 'Codigo Trabajador',
			dataIndex: 'co_trabajador_institucion',
			width: 100
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
	        }/*,{
	        	text: 'Exportar',
	        	name: 'btnExportar',
	        	scale: 'medium',
	        	iconCls: 'ico-exportar'
	        }*/,{
	        	text: 'Remuneraciones',
	        	name: 'btnRemuneraciones',
	        	scale: 'medium',
	        	iconCls: 'ico-remuneracion'
	        }]
        });
		this.callParent(arguments);
	}
})