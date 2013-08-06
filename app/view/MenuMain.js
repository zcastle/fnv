Ext.define('fnv.view.MenuMain',{
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.menumain',
	vertical: true,
	defaults: {
		textAlign: 'left',
		width: 110
	},
	items: [{
        text: 'Empleador',
        action: 'mnuEmpleador'
    },{
        text: 'Trabajador',
        action: 'mnuTrabajador'
    },{
    	text: 'Exportar',
    	action: 'mnuExportar'/*,
    	menu: [{
    		text: 'Empleador',
    		action: 'exportarEmpleador'
    	},{
    		text: 'Trabajador',
    		action: 'exportarTrabajador'
    	},{
    		text: 'Remuneracion',
    		action: 'exportarRemuneracion'
    	},{
    		text: 'Resumen',
    		action: 'exportarResumen'
    	}]*/
    }]
})