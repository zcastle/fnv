Ext.define('fnv.controller.LoginUser', {
    extend: 'Ext.app.Controller',
    views: [
        'LoginUser'
    ],
    refs: [{
        ref: 'MainView',
        selector: 'mainview'
    },{
        ref: 'LoginUser',
        selector: 'loginuser'
    }],
    stores: [
    'Usuario'
    ],
    init: function() {
        this.control({
            'loginuser': {
                render: this.onLoginUserRendered
            },
            'loginuser button[name=btnLogin]': {
                click: this.onBtnLoginClick
            },
            'loginuser textfield[name=txtClave]': {
                keypress: this.onKeyPressTxtClave
            }
        });
    },
    onLoginUserRendered: function() {
        //this.getUsuarioStore().load();
    },
    onBtnLoginClick: function() {
        var form = this.getLoginUser().down('form').getForm();
        if(form.isValid()){
            var cboUsuario = this.getLoginUser().down('combobox[name=txtUsuario]');
            var txtClave = this.getLoginUser().down('textfield[name=txtClave]');
            var record = cboUsuario.findRecord('ID', cboUsuario.getValue());
            if(record.data['PW_USUARIO']==txtClave.getValue()){
                this.getMainView().getLayout().setActiveItem(1);
                this.getLoginUser().close();
            }else{
                Ext.Msg.alert('Login', 'Error al identificarse', function(){
                    form.reset();
                    cboUsuario.focus();
                }, this);
            }
        }
    },
    onKeyPressTxtClave: function(text, event){
        if(event.getKey()==event.ENTER){
            this.onBtnLoginClick();
        }
    }
});