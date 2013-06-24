Ext.define('fnv.store.TipoInstitucion', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Maestro',
    autoLoad: true,
    proxy: {
    	type: 'ajax',
    	url: 'data/readTipoInstitucion.php',
    	reader: {
            type: 'json',
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        }
    }
});