Ext.define('fnv.view.MenuMain',{
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.menumain',
	vertical: true,
	defaults: {
		textAlign: 'left'
	},
	items: [{
        text: 'Empleador',
        action: 'mnuEmpleador'
    },{
        text: 'Trabajador',
        action: 'mnuTrabajador'
    }]
})