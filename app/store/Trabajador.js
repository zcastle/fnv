Ext.define('fnv.store.Trabajador', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Trabajador',
    pageSize: 25,
    proxy: {
    	type: 'ajax',
        api:{
            read: 'data/readTrabajador.php',
            create: 'data/createTrabajador.php',
            update: 'data/updateTrabajador.php',
            destroy: 'data/destroyTrabajador.php'
        },
    	reader: {
            type: 'json',
            successProperty: 'success',
            totalProperty: 'totalCount',
            root: 'data'
        },
        writer: {
            type: 'json',
            encode: true,  
            writeAllFields: true,
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        },
        extraParams: {
            textbuscar: ''
        },
        listeners: {
            exception: function(proxy, response, operation){
                //Ext.getBody().unmask();
                //console.log('exception');
                //err.code+'<br>'+err.message
                //title: 'REMOTE EXCEPTION',
                var err = Ext.decode(response.responseText);
                Ext.Msg.show({
                    title: 'Error en Proceso',
                    msg: "Error: No. Documento o No. Seguro Duplicado",
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});