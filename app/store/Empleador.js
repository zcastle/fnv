Ext.define('fnv.store.Empleador', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Empleador',
    pageSize: 25,
    proxy: {
    	type: 'ajax',
        api:{
            read: 'data/readEmpleador.php',
            create: 'data/createEmpleador.php',
            update: 'data/updateEmpleador.php',
            destroy: 'data/destroyEmpleador.php'
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
                    msg: "Error: No. Documento o Razon Social Duplicado",
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});