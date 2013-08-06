Ext.define('fnv.store.Usuario', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Usuario',
    /*proxy: {
        type: 'ajax',
        api: {
            read: 'data/readUsuarios.php'
        },
        reader: {
            type: 'json',
            root: 'usuario',
            successProperty: 'success'
        },
        actionMethods: {
            read: 'POST'
        }
    }*/
    data: [{'ID': 1, 'NO_USUARIO': 'usuario', 'PW_USUARIO': '1'}]
});