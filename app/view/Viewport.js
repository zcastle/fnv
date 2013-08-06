Ext.define('fnv.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',
    layout: 'card',
    activeItem: 0,
    items: [{
        xtype: 'panel'
    },{
        layout: 'border',
        items: [{
            region: 'north',
            title: 'FORMULARIO N° 2 PARA REGISTRO DE INFORMACION DE APORTES REALIZADOS AL FONAVI',
            border: false
        },{
            region: 'west',
            collapsible: true,
            //collapsed: true,
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
    }]
});

/*
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
        collapsible: true,
        //collapsed: true,
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
*/