Ext.define('fnv.view.WinRemuneracion',{
	extend: 'Ext.Window',
	alias: 'widget.winremuneracion',
    title: 'Registro de Remuneraciones',
    width: 950,
    height: 600,
    modal: true,
    resizable: false,
    border: false,
    layout: 'fit',
    items: [{
    	xtype: 'grid',
    	name: 'GridRemuneracion',
    	store: 'Remuneracion',
		sortableColumns: false,
		plugins: ['cellediting'],
    	columns: [{
			text: 'Inicio Periodo',
			dataIndex: 'fe_ini_periodo_aporte',
			menuDisabled: true,
			width: 90,
			renderer: function(val){
				return Ext.Date.format(val, 'd/m/Y');
			},
			editor: {
                xtype: 'datefield'
            }
		},{
			text: 'Fin Periodo',
			dataIndex: 'fe_fin_periodo_aporte',
			menuDisabled: true,
			width: 90,
			renderer: function(val){
				return Ext.Date.format(val, 'd/m/Y');
			},
			editor: {
                xtype: 'datefield'
            }
		},{
			text: 'Frecuencia',
			dataIndex: 'co_periodicidad_ingreso',
			menuDisabled: true,
			width: 90,
			editor: {
                xtype: 'combobox',
                store: 'PeriodicidadIngreso',
                valueField: 'codigo',
                displayField: 'descripcion',
                queryMode: 'local',
                editable: false
            }/*,
            renderer: function(val) {
				store = new fnv.store.PeriodicidadIngreso();
				store.load({
					callback: function(records, operation, success){
						Ext.Array.forEach(records, function(item, index, allItems){
							if(item.get('codigo')==val){
								console.log(item.get('descripcion'));
								console.log(this);
								return item.get('descripcion');
							}
                        }, this);
					},
					scope: this
				});
				//return val;
			}*/
		},{
			text: 'Moneda',
			dataIndex: 'co_tipo_moneda',
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
		}/*,{
			text: 'Dias Trabajados',
			dataIndex: 'nu_dias_trabajados',
			menuDisabled: true,
			width: 70
		}*/,{
			text: 'Monto de Remuneracion<br>Asegurable',
			dataIndex: 'va_remuneracion_asegurable',
			width: 130,
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
                minValue: 0
            }
		},{
			text: 'Monto de aporte<br>a ESSALUD/IPSS',
			dataIndex: 'va_aporte_seguro',
			width: 90,
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
                minValue: 0
            }
		},{
			text: 'Regimen<br>Pensionario',
			dataIndex: 'co_regimen_pensionario',
			menuDisabled: true,
			width: 80,
			editor: {
                xtype: 'combobox',
                store: 'RegimenPensionario',
                valueField: 'codigo',
                displayField: 'descripcion',
                queryMode: 'local',
                editable: false
            }
		},{
			text: 'Monto de aporte al<br>Regimen Pensionario',
			dataIndex: 'va_aporte_regimen_pensionario',
			width: 110,
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
                minValue: 0
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
	                minValue: 0
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
	                minValue: 0
	            }
			}]
		},{
            xtype: 'actioncolumn',
            name: 'actionRemover',
            width: 20,
            menuDisabled: true,
            items: [{
                icon: 'resources/images/remove.gif',
                tooltip: 'Remover',
                iconCls: 'mousepointer'
            }]
        },{
        	dataIndex:'co_tipo_documento_empleador',
        	hidden: true
        },{
        	dataIndex:'nu_documento_empleador',
        	hidden: true
        },{
        	dataIndex:'co_tipo_documento_trabajador',
        	hidden: true
        },{
        	dataIndex:'nu_documento_trabajador',
        	hidden: true
        }],
		tbar: [{
			xtype: 'container',
			//layout: 'vbox',
			flex: 1,
			defaults: {
				xtype: 'form',
				frame: true
			},
			items: [{
				name: 'frmEmpleador',
				title: 'Informacion del Empleador',
				defaults: {
					xtype: 'container',
					layout: 'hbox',
					readOnly: true,
					defaults: {
						//enableKeyEvents: true,
						readOnly: true,
						action: 'actionBuscarEmpleador'
					}
				},
				items: [{
					items: [{
						xtype: 'radiofield',
						name: 'co_tipo_institucion',
						fieldLabel: 'Tipo de Institucion',
						inputValue: '01',
						boxLabel: 'Publica'
					},{
						xtype: 'radiofield',
						name: 'co_tipo_institucion',
						inputValue: '02',
						boxLabel: 'Privada',
						margin: '0 0 0 5'
					},{
						xtype: 'hiddenfield',
						name: 'co_tipo_documento_empleador'
					},{
						xtype: 'textfield',
						name: 'no_tipo_documento_empleador',
						fieldLabel: 'Tipo de Identificacion',
						labelWidth: 110,
						width: 400,
						margin: '0 0 0 10'
					},{
						xtype: 'textfield',
						name: 'nu_documento_empleador',
						fieldLabel: 'N° Ident. de P. Natural o Juridica',
						labelWidth: 170,
						flex: 1,
						margin: '0 0 0 10'
					},{
						xtype: 'hiddenfield',
						name: 'co_sede'
					}]
				},{
					margin: '5 0 5 0',
					items: [{
						xtype: 'textfield',
						name: 'no_razon_social',
						fieldLabel: 'Nombre de Institucion',
						labelWidth: 110,
						flex: 1
					}]
				}]
			},{
				name: 'frmTrabajador',
				layout: 'vbox',
				title: 'Informacion del Trabajador',
				defaults: {
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					readOnly: true,
					defaults: {
						readOnly: true
					}
				},
				items: [{
					items: [{
						xtype: 'hiddenfield',
						name: 'co_tipo_documento_trabajador'
					},{
						name: 'no_tipo_documento_trabajador',
						fieldLabel: 'Tipo de Documento',
						labelWidth: 100,
						width: 260
					},{
						name: 'nu_documento_trabajador',
						labelWidth: 120,
						width: 260,
						fieldLabel: 'Numero de Documento',
						margin: '0 0 0 5'
					}]

				},{
					margin: '5 0 0 0',
					items: [{
						xtype: 'textfield',
						name: 'ap_paterno',
						fieldLabel: 'Apellido Paterno',
						labelWidth: 100,
						width: 260
					},{
						xtype: 'textfield',
						name: 'ap_materno',
						fieldLabel: 'Apellido Materno',
						labelWidth: 120,
						width: 260,
						margin: '0 0 0 5'
					},{
						xtype: 'textfield',
						name: 'no_trabajador',
						fieldLabel: 'Nombres',
						labelWidth: 50,
						width: 260,
						margin: '0 0 0 5'
					}]

				},{
					xtype: 'textfield',
					name: 'nu_documento_seguro',
					fieldLabel: 'N° Seguro Social Autogenerado, IPSS, ESSALUD',
					labelWidth: 240,
					width: 450,
					margin: '5 0 5 0'
				}]
			}]
		}],
		bbar: [{
        	text: 'Añadir',
        	name: 'btnAdd',
        	scale: 'medium',
        	iconCls: 'ico-add'
        },{
        	text: 'Guardar',
        	name: 'btnGuardar',
        	scale: 'medium',
        	iconCls: 'ico-grabar'
        },{
        	xtype: 'tbfill'
        },{
        	xtype: 'label',
        	name: 'lblTotal',
        	text: 'Total registros: 0',
        	cls: 'label-total'
        }]
    }]
});