Ext.define('fnv.view.LoginUser', {
    extend: 'Ext.window.Window',
    alias : 'widget.loginuser',
    width: 448,
    closable: false,
    resizable: false,
    border: false,
    modal: true,
    title: 'Acceso',
    autoShow: true,
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            url: 'data/login.php',
            height: 135,
            frame: true,
            defaultType: 'textfield',
            monitorValid: true,
            defaults: {
                allowBlank: false,
                labelWidth: 60
            },
            items: [{
                xtype: 'combobox',
                name: 'txtUsuario',
                store: 'Usuario',
                valueField: 'ID',
                displayField: 'NO_USUARIO',
                editable: false,
                fieldLabel: 'Usuario',
                queryMode: 'local',
                emptyText: 'usuario',
                width: 240,
                margin: '25 0 0 180'
            },{
                inputType: 'password',
                name: 'txtClave',
                fieldLabel: 'Clave',
                enableKeyEvents: true,
                emptyText: '******',
                width: 240,
                margin: '5 0 0 180'
            },{
                xtype: 'button',
                text: 'Ingresar',
                name: 'btnLogin',
                iconCls: 'ico-login',
                scale: 'medium',
                margin: '5 5 0 329',
                padding: '5 10'
            }]
        }];
        this.callParent(arguments);
    }
});