Ext.define('fnv.store.PeriodicidadIngreso', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Maestro',
    autoLoad: true,
    proxy: {
    	type: 'ajax',
    	url: 'data/readPeriodicidadIngreso.php',
    	reader: {
            type: 'json',
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        }
    }
});