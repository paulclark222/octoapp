Ext.define('OctoAlert.config.Config', {
	singleton: true,
	
	defaults: 
	{	
		backgroundColor: '#ffffff'
	},
	
	getBackgroundColor: function()
	{
		window.localStorage.getItem('config.backgroundColor') || OctoAlert.config.Config.defaults.backgroundColor;
	},
	
	setBackgroundColor: function(val)
	{	
        window.localStorage.setItem('config.backgroundColor', val);
	}
});