Ext.define('OctoAlert.view.OctoLaunch', {
    extend: 'Ext.Panel',
    xtype: 'octolaunch',
	id: 'octoLaunchPanel',
	
    requires: [ 'Ext.Img', 'Ext.Audio' ],
    config: {
		layout: {
			type: 'vbox',
			align: 'center',
			pack: 'center'                      
		},
        items: [
			{
				xtype: 'image',
				src: 'resources/images/octo-button-blue.jpg',
				id: 'octoLaunchButton',
				width: '100%',
				mode: 'element',
				cls: 'launchButton'
			},
			{
                xtype: 'audio',
                hidden: true,
				id: 'octoAlertSound',
                url: 'resources/audio/octoalert.mp3',
				loop: true
            },
			{
				xtype: 'toolbar',
				docked: 'top',
				items: 
				[
					{
						id: 'settingsButton',
						iconCls: 'settings'
					}
				]				
			}
        ]
    }
});
