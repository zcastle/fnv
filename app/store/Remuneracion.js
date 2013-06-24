Ext.define('fnv.store.Remuneracion', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Remuneracion',
    proxy: {
    	type: 'ajax',
        api:{
            read: 'data/readRemuneracion.php',
            create: 'data/createRemuneracion.php',
            update: 'data/updateRemuneracion.php',
            destroy: 'data/destroyRemuneracion.php'
        },
    	reader: {
            type: 'json',
            successProperty: 'success',
            //totalProperty: 'totalCount',
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
            co_tipo_documento_empleador: '',
            nu_documento_empleador: '',
            co_tipo_documento_trabajador: '',
            nu_documento_trabajador: ''
        },
        listeners: {
            exception: function(proxy, response, operation){
                var err = Ext.decode(response.responseText);
                Ext.Msg.show({
                    title: 'Error en Proceso',
                    msg: "Error No Definido",
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});