Ext.define('fnv.store.RegimenPensionario', {
    extend: 'Ext.data.Store',
    model: 'fnv.model.Maestro',
    autoLoad: true,
    proxy: {
    	type: 'ajax',
    	url: 'data/readRegimenPensionario.php',
    	reader: {
            type: 'json',
            root: 'data'
        },
        actionMethods: {
            read: 'POST'
        }
    }
});