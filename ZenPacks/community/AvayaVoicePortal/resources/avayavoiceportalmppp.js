(function(){
            var ZC = Ext.ns('Zenoss.component');
        
            function render_link(ob) {
                if (ob && ob.uid) {
                    return Zenoss.render.link(ob.uid);
                } else {
                    return ob;
                }
            }
        
            ZC.AvayaVoicePortalMPPPPanel = Ext.extend(ZC.ComponentGridPanel, {
                constructor: function(config) {
                    config = Ext.applyIf(config||{}, {
                        componentType: 'AvayaVoicePortalMPPP',
                        fields: [
            {name: 'uid'},
            {name: 'severity'},
            {name: 'status'},
            {name: 'name'},{name: 'avpMPPEntryName'},
                {name: 'avpMPPEntryVersion'},
                {name: 'avpMPPEntryIPAddress'},
                
            {name: 'usesMonitorAttribute'},
            {name: 'monitor'},
            {name: 'monitored'},
            {name: 'locking'},
            ]
        ,
                        columns:[{
            id: 'severity',
            dataIndex: 'severity',
            header: _t('Events'),
            renderer: Zenoss.render.severity,
            sortable: true,
            width: 50
        },{
            id: 'name',
            dataIndex: 'name',
            header: _t('Name'),
            sortable: true,
            width: 70
        },{
                    id: 'avpMPPEntryName',
                    dataIndex: 'avpMPPEntryName',
                    header: _t('Name'),
                    sortable: true,
                    width: 200
                },{
                    id: 'avpMPPEntryVersion',
                    dataIndex: 'avpMPPEntryVersion',
                    header: _t('Version'),
                    sortable: true,
                    width: 200
                },{
                    id: 'avpMPPEntryIPAddress',
                    dataIndex: 'avpMPPEntryIPAddress',
                    header: _t('IP'),
                    sortable: true,
                    width: 200
                },{
            id: 'monitored',
            dataIndex: 'monitored',
            header: _t('Monitored'),
            sortable: true,
            width: 65
        },{
            id: 'locking',
            dataIndex: 'locking',
            header: _t('Locking'),
            renderer: Zenoss.render.locking_icons,
            sortable: true,
            width: 65
        }]
                    });
                    ZC.AvayaVoicePortalMPPPPanel.superclass.constructor.call(this, config);
                }
            });
            
            Ext.reg('AvayaVoicePortalMPPPPanel', ZC.AvayaVoicePortalMPPPPanel);
            ZC.registerName('AvayaVoicePortalMPPP', _t('AVP MPP'), _t('AVP MPPs'));
            
            })(); 

