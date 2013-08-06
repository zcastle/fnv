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
            'mainview button,menuitem': {
                click: this.onClickItemMainView
            }
    	});
    },
    onRenderMainView: function(){
        /*var queryString = window.location.search;
        if (queryString.match('(\\?|&)debug') == null) {
            Ext.widget('loginuser');
        } else {
            this.getMainView().getLayout().setActiveItem(1);
        }*/
    	//console.log('Render MainView');
        //this.getController('TabMain').addTab('Registro Empleadores', 'gridempleador');
        this.getController('TabMain').addTab('Registro Trabajadores', 'gridtrabajador');
        Ext.widget('loginuser');
    },
    onClickItemMainView: function(btn){
        switch(btn.action){
            case 'mnuEmpleador':
                this.getController('TabMain').addTab('Registro Empleadores', 'gridempleador');
                break;
            case 'mnuTrabajador':
                this.getController('TabMain').addTab('Registro Trabajadores', 'gridtrabajador');
                break;
            case 'mnuExportar':
                window.open("data/exportar/empleador_f2.php", "_blank");
                window.open("data/exportar/trabajador_f2.php", "_blank");
                window.open("data/exportar/remunera_trabajador_f2.php", "_blank");
                window.open("data/exportar/resumen.php", "_blank");
                break;
            case 'exportarEmpleador':
                window.open("data/exportar/empleador_f2.php", "_blank");
                break;
            case 'exportarTrabajador':
                console.log('exportarTrabajador');
                break;
            case 'exportarRemuneracion':
                console.log('exportarRemuneracion');
                break;
            case 'exportarResumen':
                console.log('exportarResumen');
                break;
        }
    }
});