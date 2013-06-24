Ext.define('fnv.view.GridRegistroRemuneraciones', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridregistroremuneraciones',
	store: 'Remuneracion',
	sortableColumns: false,
	plugins: ['cellediting'],
	initComponent: function() {
		this.columns = [{
			text: 'Año',
			dataIndex: 'anio',
			menuDisabled: true,
			width: 60,
			editor: {
                xtype: 'numberfield',
                allowDecimals: false,
                allowNegative: false,
                //allowBlank: false,
                enableKeyEvents: true,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false,
                minValue: 1
            }
		},{
			text: 'Mes',
			dataIndex: 'mes',
			menuDisabled: true,
			width: 75,
			editor: {
                xtype: 'combobox',
                store: 'Meses',
                valueField: 'num',
                displayField: 'name',
                queryMode: 'local',
                editable: false
            }
		},{
			text: 'Frecuencia',
			dataIndex: 'id_frecuencia',
			menuDisabled: true,
			width: 90,
			editor: {
                xtype: 'combobox',
                store: 'Frecuencia',
                valueField: 'id_frecuencia',
                displayField: 'no_frecuencia',
                queryMode: 'local',
                editable: false
            }
		},{
			text: 'Moneda',
			dataIndex: 'id_moneda',
			menuDisabled: true,
			width: 90,
			editor: {
                xtype: 'combobox',
                store: 'TipoMoneda',
                valueField: 'codigo',
                displayField: 'descripcion',
                queryMode: 'local',
                editable: false
            }
		},{
			text: 'Dias Trabajados',
			dataIndex: 'nu_dias_trabajados',
			menuDisabled: true,
			width: 70
		},{
			text: 'Monto de<br>Remuneracion<br>Asegurable',
			dataIndex: 'va_remuneracion_asegurable',
			width: 80,
			height: 40,
			menuDisabled: true,
			align: 'right',
			renderer: function(val){
                return Ext.util.Format.number(val, "0.00");
            },
            editor: {
                xtype: 'numberfield',
                allowDecimals: false,
                allowNegative: false,
                enableKeyEvents: true,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false,
                minValue: 1
            }
		},{
			text: 'Monto de aporte<br>a ESSALUD/IPSS',
			dataIndex: 'va_aporte_essalud_ipss',
			width: 90,
			height: 40,
			menuDisabled: true,
			align: 'right',
			renderer: function(val){
                return Ext.util.Format.number(val, "0.00");
            },
            editor: {
                xtype: 'numberfield',
                allowDecimals: false,
                allowNegative: false,
                enableKeyEvents: true,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false,
                minValue: 1
            }
		},{
			text: 'Regimen<br>Pensionario',
			dataIndex: 'id_regimen_pensionario',
			menuDisabled: true,
			width: 80,
			editor: {
                xtype: 'combobox',
                store: 'RegimenPensionario',
                valueField: 'id_regimen_pensionario',
                displayField: 'no_regimen_pensionario',
                queryMode: 'local',
                editable: false
            }
		},{
			text: 'Monto de aporte al<br>Regimen Pensionario',
			dataIndex: 'va_aporte_essalud_ipss',
			width: 110,
			height: 40,
			menuDisabled: true,
			align: 'right',
			renderer: function(val){
                return Ext.util.Format.number(val, "0.00");
            },
            editor: {
                xtype: 'numberfield',
                allowDecimals: false,
                allowNegative: false,
                enableKeyEvents: true,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false,
                minValue: 1
            }
		},{
			text: 'Monto de Aporte FONAVI',
			menuDisabled: true,
			columns: [{
				text: 'Trabajador',
				dataIndex: 'va_aporte_fonavi_trabajador',
				align: 'right',
				width: 70,
				menuDisabled: true,
				renderer: function(val){
	                return Ext.util.Format.number(val, "0.00");
	            },
	            editor: {
	                xtype: 'numberfield',
	                allowDecimals: false,
	                allowNegative: false,
	                enableKeyEvents: true,
	                hideTrigger: true,
	                keyNavEnabled: false,
	                mouseWheelEnabled: false,
	                minValue: 1
	            }
			},{
				text: 'Empleador',
				dataIndex: 'va_aporte_fonavi_empleador',
				align: 'right',
				width: 70,
				menuDisabled: true,
				renderer: function(val){
	                return Ext.util.Format.number(val, "0.00");
	            },
	            editor: {
	                xtype: 'numberfield',
	                allowDecimals: false,
	                allowNegative: false,
	                enableKeyEvents: true,
	                hideTrigger: true,
	                keyNavEnabled: false,
	                mouseWheelEnabled: false,
	                minValue: 1
	            }
			}]
		}];
		this.tbar = [{
			xtype: 'container',
			//layout: 'vbox',
			flex: 1,
			items: [{
				xtype: 'fieldset',
				title: 'Informacion del Empleador',
				items: [{
					xtype: 'container',
					layout: 'hbox',
					items: [{
						xtype: 'radio',
						name: 'tipo_institucion',
						fieldLabel: 'Tipo de Institucion',
						boxLabel: 'Publica'
					},{
						xtype: 'radio',
						name: 'tipo_institucion',
						boxLabel: 'Privada',
						margin: '0 0 0 5'
					},{
						xtype: 'textfield',
						name: 'tipo_identificacion',
						fieldLabel: 'Tipo de Identificacion',
						labelWidth: 110,
						width: 180,
						margin: '0 0 0 10'
					},{
						xtype: 'textfield',
						name: 'nu_identificacion',
						fieldLabel: 'N° Ident. de P. Natural o Juridica',
						labelWidth: 170,
						flex: 1,
						margin: '0 0 0 10'
					}]
				},{
					xtype: 'container',
					layout: 'hbox',
					margin: '5 0 5 0',
					items: [{
						xtype: 'textfield',
						name: 'no_institucion',
						fieldLabel: 'Nombre de Institucion',
						labelWidth: 110,
						flex: 1
					}]
				}]
			},{
				xtype: 'fieldset',
				layout: 'vbox',
				title: 'Informacion del Trabajador',
				items: [{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					items: [{
						fieldLabel: 'Tipo de Documento',
						labelWidth: 100,
						width: 260
					},{
						labelWidth: 120,
						width: 260,
						fieldLabel: 'Numero de Documento',
						margin: '0 0 0 5'
					}]

				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					margin: '5 0 0 0',
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Apellido Paterno',
						labelWidth: 100,
						width: 260
					},{
						xtype: 'textfield',
						fieldLabel: 'Apellido Materno',
						labelWidth: 120,
						width: 260,
						margin: '0 0 0 5'
					},{
						xtype: 'textfield',
						fieldLabel: 'Nombres',
						labelWidth: 50,
						width: 260,
						margin: '0 0 0 5'
					}]

				},{
					xtype: 'textfield',
					fieldLabel: 'N° Seguro Social Autogenerado, IPSS, ESSALUD',
					labelWidth: 240,
					width: 450,
					margin: '5 0 5 0'
				}]
			}]
		}];
		this.bbar = [{
        	text: 'Añadir',
        	name: 'btnAdd',
        	scale: 'small',
        	iconCls: 'ico-grabar'
        },{
        	xtype: 'tbfill'
        },{
        	xtype: 'label',
        	name: 'lblTotal',
        	text: 'Total registros: 0',
        	cls: 'label-total'
        }]
		this.callParent(arguments);
	}
})