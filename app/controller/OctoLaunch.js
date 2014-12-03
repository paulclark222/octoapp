Ext.define('OctoAlert.controller.OctoLaunch', {
    extend: 'Ext.app.Controller',
	
	statics: 
	{
		IMAGE_OFF: 'resources/images/octo-button-blue.jpg',
		IMAGE_ON: 'resources/images/octo-button-orange.jpg'
	},
	
	constructor: function(config) {	
		this.callParent(arguments);
	},

	config:
	{
		views: 
		[
			'OctoLaunch'
		],
		refs: 
		{
			octoLaunchButton: '#octoLaunchButton',			
			octoAlertSound: '#octoAlertSound',
			settingsButton: '#settingsButton',
			octoLaunchPanel: '#octoLaunchPanel'
		},
		control: 
		{
			octoLaunchButton:
			{
				tap: 'onLaunchButtonTap'
			},
			settingsButton:
			{
				tap: 'onSettingsTap'
			}
		},
		alertOn: false		
	},
	
	launch: function() 
	{
		var bgColor = OctoAlert.config.Config.getBackgroundColor();
		this.getOctoLaunchPanel().setStyle('background-color:' + bgColor);
	},
	
	onSettingsTap: function() 
	{
		Ext.Viewport.add({ xtype: 'panel' });
		Ext.Viewport.setActiveItem(1);
	},	
	
	onLaunchButtonTap: function() 
	{
		this.setAlertOn(!this.getAlertOn());
		
		if (this.getAlertOn())
		{
			this.playSiren(true);
			this.flashImage(1000);
		}
		else
		{
			this.playSiren(false);
		}
	},
	
	flashImage: function(time) 
	{
		if (this.getAlertOn())
		{				
			var isOn = this.getOctoLaunchButton().getSrc() == this.self.IMAGE_ON;
			
			this.getOctoLaunchButton().setSrc(!isOn ? this.self.IMAGE_ON : this.self.IMAGE_OFF);
						
			var innerThis = this;
			window.setTimeout(function() { innerThis.flashImage(time) }, time);
		}
		else
		{			
			this.getOctoLaunchButton().setSrc(this.self.IMAGE_OFF);
		}
	},
		
	playSiren: function(play) 
	{	
		if (play) {
			this.getOctoAlertSound().play();
		} else {			
			this.getOctoAlertSound().stop();
		}
	}
});