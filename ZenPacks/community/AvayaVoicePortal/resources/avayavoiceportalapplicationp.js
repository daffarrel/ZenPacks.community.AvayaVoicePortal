(function(){
            var ZC = Ext.ns('Zenoss.component');
        
            function render_link(ob) {
                if (ob && ob.uid) {
                    return Zenoss.render.link(ob.uid);
                } else {
                    return ob;
                }
            }
        
            ZC.AvayaVoicePortalApplicationPPanel = Ext.extend(ZC.ComponentGridPanel, {
                constructor: function(config) {
                    config = Ext.applyIf(config||{}, {
                        componentType: 'AvayaVoicePortalApplicationP',
                        fields: [
            {name: 'uid'},
            {name: 'severity'},
            {name: 'status'},
            {name: 'name'},{name: 'avpEntryAppName'},
                {name: 'avpEntryAppURLHost'},
                {name: 'avpEntryAppDNIS'},
                {name: 'avpEntryAppAssociateURL'},
                {name: 'avpEntryAppURLPort'},
                {name: 'avpEntryAppURL'},
                {name: 'avpEntryAppCalledURI'},
                
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
                    id: 'avpEntryAppName',
                    dataIndex: 'avpEntryAppName',
                    header: _t('Name'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppURLHost',
                    dataIndex: 'avpEntryAppURLHost',
                    header: _t('URL Host'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppDNIS',
                    dataIndex: 'avpEntryAppDNIS',
                    header: _t('DNIS'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppAssociateURL',
                    dataIndex: 'avpEntryAppAssociateURL',
                    header: _t('Associate URL'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppURLPort',
                    dataIndex: 'avpEntryAppURLPort',
                    header: _t('URL Port'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppURL',
                    dataIndex: 'avpEntryAppURL',
                    header: _t('URL'),
                    sortable: true,
                    width: 100
                },{
                    id: 'avpEntryAppCalledURI',
                    dataIndex: 'avpEntryAppCalledURI',
                    header: _t('Called URI'),
                    sortable: true,
                    width: 100
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
                    ZC.AvayaVoicePortalApplicationPPanel.superclass.constructor.call(this, config);
                }
            });
            
            Ext.reg('AvayaVoicePortalApplicationPPanel', ZC.AvayaVoicePortalApplicationPPanel);
            ZC.registerName('AvayaVoicePortalApplicationP', _t('AVP Application'), _t('AVP Applications'));
            
            })(); 

