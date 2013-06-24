Ext.define('fnv.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
        'MenuMain'
    ],
    init: function() {
    	this.control({
    		'mainview': {
    			render: this.onRenderMainView
    		},
            'mainview button': {
                click: this.onClickItemMainView
            }
    	});
    },
    onRenderMainView: function(){
    	//console.log('Render MainView');
        //this.getController('TabMain').addTab('Registro Empleadores', 'gridempleador');
    	this.getController('TabMain').addTab('Registro Trabajadores', 'gridtrabajador');
    },
    onClickItemMainView: function(btn){
        switch(btn.action){
            case 'mnuEmpleador':
                this.getController('TabMain').addTab('Registro Empleadores', 'gridempleador');
                break;
            case 'mnuTrabajador':
                this.getController('TabMain').addTab('Registro Trabajadores', 'gridtrabajador');
                break;
        }
    }
});