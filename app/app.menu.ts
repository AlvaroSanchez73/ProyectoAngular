export const sideMenu = [
	
	{
		'name':'Convenios',
		'url' : '/',
		'icon':'expand_more'
	},
	{
		'name':'Remesas',
		'url' : '',
		'icon':'expand_more'
	},
	{
		'name':'Garantias',
		'url' : '/',
		'icon':'expand_more'
	},
	{
		'name':'Declaración de Gastos',
		'icon':'expand_more',
		'subItem':
		 [
			 {
				'name' : 'Revizar Declaración Vigente', 
				'url' : '/declaraciones-de-gastos/revizar-declaracion-vigente'
			 },
			 {
				'name' : 'Modificar Documentos Declarados Cerradas', 
				'url' : '/declaraciones-de-gastos/modificar-documentos-declarados-cerradas'
			},
			{
				'name' : 'Enviar Declaraciones DAF', 
				'url' : '/declaraciones-de-gastos/enviar-declaraciones-daf'
			},
		 ],
	},
	{
		'name':'Rendiciones',
		'icon':'expand_more',
		'subItem':
		 [
			 {
				'name' : 'Resumen de Giros', 
				'url' : '/rendiciones/resumen-de-giros'
			 },
			 {
				'name' : 'Rendiciones por Aprobación', 
				'url' : '/rendiciones/rendiciones-por-aprobacion'
			},
		 ],
		
	},
	{
		'name':'Reintegros',
		'url' : '/',
		'icon':'expand_more'
	},
	{
		'name':'Presupuesto',
		'url' : '/',
		'icon':'expand_more'
	}
]