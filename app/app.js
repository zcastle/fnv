Ext.application({
	requires: [
	'Ext.layout.container.Border',
	'Ext.grid.plugin.CellEditing',
	'Ext.form.FieldSet',
	'Ext.form.field.ComboBox',
	'Ext.form.Label',
	'Ext.form.field.Radio',
	'Ext.grid.column.Action',
	'Ext.form.Panel',
	'Ext.form.field.Hidden',
    'Ext.form.field.Date'
	],
    controllers: ['Main','TabMain','Empleador','Trabajador','Remuneracion','LoginUser'],
    views: [],
    name: 'fnv',
    autoCreateViewport: true
});
Ext.onReady(function() {
    (Ext.defer(function() {
        var hideMask = function () {
            Ext.get('loading').remove();
            Ext.fly('loading-mask').animate({
                opacity: 0,
                remove: true
            });
        };
        Ext.defer(hideMask, 250);
    },500));
});