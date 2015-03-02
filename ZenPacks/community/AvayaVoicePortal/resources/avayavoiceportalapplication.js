
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
    }
    
    function pass_link(ob){ 
        return ob; 
    }
    
    ZC.AvayaVoicePortalApplicationPanel = Ext.extend(ZC.ComponentGridPanel, {
        constructor: function(config) {
            config = Ext.applyIf(config||{}, {
                componentType: 'AvayaVoicePortalApplication',
                autoExpandColumn: 'name', 
                fields:                 [
                    {
                        "name": "uid"
                    }, 
                    {
                        "name": "severity"
                    }, 
                    {
                        "name": "status"
                    }, 
                    {
                        "name": "name"
                    }, 
                    {
                        "name": "avpEntryAppAssociateURL"
                    }, 
                    {
                        "name": "avpEntryAppCalledURI"
                    }, 
                    {
                        "name": "avpEntryAppDNIS"
                    }, 
                    {
                        "name": "avpEntryAppName"
                    }, 
                    {
                        "name": "avpEntryAppURL"
                    }, 
                    {
                        "name": "avpEntryAppURLHost"
                    }, 
                    {
                        "name": "avpEntryAppURLPort"
                    }, 
                    {
                        "name": "usesMonitorAttribute"
                    }, 
                    {
                        "name": "monitor"
                    }, 
                    {
                        "name": "monitored"
                    }, 
                    {
                        "name": "locking"
                    }
                ]
,
                columns:                [
                    {
                        "sortable": "true", 
                        "width": 50, 
                        "header": "Events", 
                        "renderer": Zenoss.render.severity, 
                        "id": "severity", 
                        "dataIndex": "severity"
                    }, 
                    {
                        "header": "Name", 
                        "width": 70, 
                        "sortable": "true", 
                        "id": "name", 
                        "dataIndex": "name"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Associate URL", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppAssociateURL", 
                        "dataIndex": "avpEntryAppAssociateURL"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Called URI", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppCalledURI", 
                        "dataIndex": "avpEntryAppCalledURI"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "DNIS", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppDNIS", 
                        "dataIndex": "avpEntryAppDNIS"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Name", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppName", 
                        "dataIndex": "avpEntryAppName"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "URL", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppURL", 
                        "dataIndex": "avpEntryAppURL"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "URL Host", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppURLHost", 
                        "dataIndex": "avpEntryAppURLHost"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "URL Port", 
                        "renderer": "pass_link", 
                        "id": "avpEntryAppURLPort", 
                        "dataIndex": "avpEntryAppURLPort"
                    }, 
                    {
                        "header": "Monitored", 
                        "width": 65, 
                        "sortable": "true", 
                        "id": "monitored", 
                        "dataIndex": "monitored"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 65, 
                        "header": "Locking", 
                        "renderer": Zenoss.render.locking_icons, 
                        "id": "locking", 
                        "dataIndex": "locking"
                    }
                ]

            });
            ZC.AvayaVoicePortalApplicationPanel.superclass.constructor.call(this, config);
        }
    });
    
    Ext.reg('AvayaVoicePortalApplicationPanel', ZC.AvayaVoicePortalApplicationPanel);
    ZC.registerName('AvayaVoicePortalApplication', _t('AVP Application'), _t('AVP Applications'));
    
    })();

