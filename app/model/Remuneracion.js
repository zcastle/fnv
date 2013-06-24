Ext.define('fnv.model.Remuneracion', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id'
	},{
		name: 'co_tipo_documento_empleador'
	},{
		name: 'nu_documento_empleador'
	},{
		name: 'co_sede'
	},{
		name: 'co_tipo_documento_trabajador'
	},{
		name: 'nu_documento_trabajador'
	},{
		name: 'fe_ini_periodo_aporte',
		type: 'date',
		dateFormat: 'd/m/Y'
	},{
		name: 'fe_fin_periodo_aporte',
		type: 'date',
		dateFormat: 'd/m/Y'
	},{
		name: 'co_tipo_trabajador'
	},{
		name: 'co_periodicidad_ingreso'
	},{
		name: 'co_tipo_moneda'
	},{
		name: 'va_remuneracion_asegurable'
	},{
		name: 'co_tipo_seguro'
	},{
		name: 'va_aporte_seguro'
	},{
		name: 'co_regimen_pensionario'
	},{
		name: 'va_aporte_regimen_pensionario'
	},{
		name: 'va_aporte_fonavi_trabajador'
	},{
		name: 'va_aporte_fonavi_empleador'
	}]
});