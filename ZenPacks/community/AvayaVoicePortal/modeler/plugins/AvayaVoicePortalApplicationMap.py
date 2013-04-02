from Products.DataCollector.plugins.CollectorPlugin import SnmpPlugin, GetMap, GetTableMap
from Products.DataCollector.plugins.DataMaps import ObjectMap
from ZenPacks.community.AvayaVoicePortal.Definition import *

from urlparse import urlparse

class AvayaVoicePortalApplicationMap(SnmpPlugin):
    
    compname = "os"
    constr = Construct(DefinitionApp)
    relname = constr.relname
    modname = constr.zenpackComponentModule
    baseid = constr.baseid
    
    snmpGetTableMaps = (
        GetTableMap('avpTableApplications', '.1.3.6.1.4.1.6889.2.17.3.3.1', {
            '.0': 'avpEntryAppName',
            '.1': 'avpEntryAppDNIS',
            '.2': 'avpEntryAppURL',
            '.3': 'avpEntryAppCalledURI',
            '.4': 'avpEntryAppURL1',
            '.5': 'avpEntryAppAssociateURL',
            '.6': 'avpEntryAppAssociateURL1',
            }),
        )

    def process(self, device, results, log):
        log.info("Modeler %s processing data for device %s",
            self.name(), device.id)
        getdata, tabledata = results
        log.debug("%s tabledata = %s", device.id, tabledata)
        maps = []
        rm = self.relMap()
        trunktable = tabledata.get("avpTableApplications")
        snmpindex = 1
        for trunk in trunktable.values():
            om = self.objectMap(trunk)
            name = "%s_%s" % (self.baseid,om.avpEntryAppName)
            url = urlparse(om.avpEntryAppURL)
            om.avpEntryAppURL = url.path
            if url.query:
                om.avpEntryAppURL += "?" + url.query

            om.avpEntryAppURLHost = url.hostname
            if url.port:
                om.avpEntryAppURLPort = url.port
            else:
                om.avpEntryAppURLPort = 80
                
            om.id = self.prepId(name)
            om.title = name
            om.snmpindex = snmpindex
            snmpindex +=1
            rm.append(om)
        maps.append(rm)
        return maps

