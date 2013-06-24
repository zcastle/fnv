Ext.define('fnv.view.WinEmpleadorBuscar',{
	extend: 'Ext.Window',
	alias: 'widget.winempleadorbuscar',
    title: 'Buscar Empleador',
    width: 450,
    height: 300,
    modal: true,
    resizable: false,
    border: false,
    layout: 'fit',
    items: [{
    	xtype: 'grid',
    	name: 'GridEmpleadorBuscar',
    	store: 'Empleador',
    	columns: [{
			text: 'Ruc',
			dataIndex: 'nu_documento',
			menuDisabled: true,
			width: 90
		},{
			text: 'Razon Social',
			dataIndex: 'no_razon_social',
			menuDisabled: true,
			flex: 1
		}],
		tbar: [{
			xtype: 'textfield',
			name: 'txtBuscar',
			labelWidth: 50,
			flex: 1,
			fieldLabel: 'Buscar'
		}],
		bbar: []
    }]
});