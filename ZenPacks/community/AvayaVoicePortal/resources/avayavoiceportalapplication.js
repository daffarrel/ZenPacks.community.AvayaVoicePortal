
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
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
                        "header": "Associate URL", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppAssociateURL", 
                        "dataIndex": "avpEntryAppAssociateURL"
                    }, 
                    {
                        "header": "Called URI", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppCalledURI", 
                        "dataIndex": "avpEntryAppCalledURI"
                    }, 
                    {
                        "header": "DNIS", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppDNIS", 
                        "dataIndex": "avpEntryAppDNIS"
                    }, 
                    {
                        "header": "Name", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppName", 
                        "dataIndex": "avpEntryAppName"
                    }, 
                    {
                        "header": "URL", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppURL", 
                        "dataIndex": "avpEntryAppURL"
                    }, 
                    {
                        "header": "URL Host", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpEntryAppURLHost", 
                        "dataIndex": "avpEntryAppURLHost"
                    }, 
                    {
                        "header": "URL Port", 
                        "width": 120, 
                        "sortable": "true", 
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

