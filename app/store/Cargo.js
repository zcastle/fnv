Ext.define('fnv.store.Cargo', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Maestro',
    autoLoad: true,
    proxy: {
    	type: 'ajax',
    	url: 'data/readCargo.php',
    	reader: {
            type: 'json',
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        }
    }
});