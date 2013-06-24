Ext.define('fnv.store.TipoDocumento', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Maestro',
    autoLoad: true,
    proxy: {
    	type: 'ajax',
    	url: 'data/readTipoDocumento.php',
    	reader: {
            type: 'json',
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        }
    }
});