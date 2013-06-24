Ext.define('fnv.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',
    layout: 'border',
    items: [{
        region: 'north',
        title: 'FORMULARIO N° 2 PARA REGISTRO DE INFORMACION DE APORTES REALIZADOS AL FONAVI',
        border: false
    },{
        region: 'west',
        title: 'Opciones',
        width: 120,
        items: [{
            xtype: 'menumain'
        }]
    },{
        region: 'center',
        id: 'contenedor',
        xtype: 'tabmain'
    }]
});