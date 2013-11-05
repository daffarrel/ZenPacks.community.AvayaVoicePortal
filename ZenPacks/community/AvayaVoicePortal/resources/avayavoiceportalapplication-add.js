
(function() {
        
            function getPageContext() {
                return Zenoss.env.device_uid || Zenoss.env.PARENT_CONTEXT;
            }
        
            Ext.ComponentMgr.onAvailable('component-add-menu', function(config) {
                var menuButton = Ext.getCmp('component-add-menu');
                menuButton.menuItems.push({
                    xtype: 'menuitem',
                    text: _t('Add AVP Application') + '...',
                    hidden: Zenoss.Security.doesNotHavePermission('Manage Device'),
                    handler: function() {
                        var win = new Zenoss.dialog.CloseDialog({
                            width: 300,
                            title: _t('Add AVP Application'),
                            items: [{
                                xtype: 'form',
                                buttonAlign: 'left',
                                monitorValid: true,
                                labelAlign: 'top',
                                footerStyle: 'padding-left: 0',
                                border: false,
                                items:                         [
                            {
                                fieldLabel: 'Associate URL', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppAssociateURL', 
                                width: 260, 
                                id: 'avpEntryAppAssociateURLField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Called URI', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppCalledURI', 
                                width: 260, 
                                id: 'avpEntryAppCalledURIField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'DNIS', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppDNIS', 
                                width: 260, 
                                id: 'avpEntryAppDNISField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'Name', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppName', 
                                width: 260, 
                                id: 'avpEntryAppNameField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'URL', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppURL', 
                                width: 260, 
                                id: 'avpEntryAppURLField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'URL Host', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppURLHost', 
                                width: 260, 
                                id: 'avpEntryAppURLHostField', 
                                xtype: 'textfield'
                            }, 
                            {
                                fieldLabel: 'URL Port', 
                                allowBlank: 'false', 
                                name: 'avpEntryAppURLPort', 
                                width: 260, 
                                id: 'avpEntryAppURLPortField', 
                                xtype: 'textfield'
                            }
                        ]

                                ,
                                buttons: [{
                                    xtype: 'DialogButton',
                                    id: 'AvayaVoicePortal-submit',
                                    text: _t('Add'),
                                    formBind: true,
                                    handler: function(b) {
                                        var form = b.ownerCt.ownerCt.getForm();
                                        var opts = form.getFieldValues();
                                        Zenoss.remote.AvayaVoicePortalRouter.addAvayaVoicePortalApplicationRouter(opts,
                                        function(response) {
                                            if (response.success) {
                                                new Zenoss.dialog.SimpleMessageDialog({
                                                    title: _t('AVP Application Added'),
                                                    message: response.msg,
                                                    buttons: [{
                                                        xtype: 'DialogButton',
                                                        text: _t('OK'),
                                                        handler: function() { 
                                                            window.top.location.reload();
                                                            }
                                                        }]
                                                }).show();
                                            }
                                            else {
                                                new Zenoss.dialog.SimpleMessageDialog({
                                                    message: response.msg,
                                                    buttons: [{
                                                        xtype: 'DialogButton',
                                                        text: _t('OK'),
                                                        handler: function() { 
                                                            window.top.location.reload();
                                                            }
                                                        }]
                                                }).show();
                                            }
                                        });
                                    }
                                }, Zenoss.dialog.CANCEL]
                            }]
                        });
                        win.show();
                    }
                });
            });
        }()
);

