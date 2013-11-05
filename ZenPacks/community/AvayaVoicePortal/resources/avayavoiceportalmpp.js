
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
    }

    ZC.AvayaVoicePortalMPPPanel = Ext.extend(ZC.ComponentGridPanel, {
        constructor: function(config) {
            config = Ext.applyIf(config||{}, {
                componentType: 'AvayaVoicePortalMPP',
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
                        "name": "avpMPPEntryIPAddress"
                    }, 
                    {
                        "name": "avpMPPEntryName"
                    }, 
                    {
                        "name": "avpMPPEntryVersion"
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
                        "header": "IP", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpMPPEntryIPAddress", 
                        "dataIndex": "avpMPPEntryIPAddress"
                    }, 
                    {
                        "header": "Name", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpMPPEntryName", 
                        "dataIndex": "avpMPPEntryName"
                    }, 
                    {
                        "header": "Version", 
                        "width": 120, 
                        "sortable": "true", 
                        "id": "avpMPPEntryVersion", 
                        "dataIndex": "avpMPPEntryVersion"
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
            ZC.AvayaVoicePortalMPPPanel.superclass.constructor.call(this, config);
        }
    });
    
    Ext.reg('AvayaVoicePortalMPPPanel', ZC.AvayaVoicePortalMPPPanel);
    ZC.registerName('AvayaVoicePortalMPP', _t('AVP MPP'), _t('AVP MPPs'));
    
    })();

