
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
                        "sortable": "true", 
                        "width": 120, 
                        "header": "IP", 
                        "renderer": "pass_link", 
                        "id": "avpMPPEntryIPAddress", 
                        "dataIndex": "avpMPPEntryIPAddress"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Name", 
                        "renderer": "pass_link", 
                        "id": "avpMPPEntryName", 
                        "dataIndex": "avpMPPEntryName"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Version", 
                        "renderer": "pass_link", 
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

