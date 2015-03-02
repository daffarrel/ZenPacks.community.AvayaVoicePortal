from Products.DataCollector.plugins.CollectorPlugin import SnmpPlugin, GetMap, GetTableMap
from Products.DataCollector.plugins.DataMaps import ObjectMap
from ZenPacks.community.AvayaVoicePortal.Definition import *

__doc__ = """AvayaVoicePortalMPPMap

AvayaVoicePortalMPPMap detects Avaya Voice Portal MPPs

"""



class AvayaVoicePortalMPPMap(SnmpPlugin):
    
    compname = "os"
    constr = Construct(DefinitionMPP)
    relname = constr.relname
    modname = constr.zenpackComponentModule
    baseid = constr.baseid
    
    snmpGetTableMaps = (
        GetTableMap('avpMPPTable', '.1.3.6.1.4.1.6889.2.17.3.1.1', {
            '.0': 'avpMPPEntryName',
            '.1': 'avpMPPEntryIPAddress',
            '.2': 'avpMPPEntryVersion',
            }),
        )

    def process(self, device, results, log):
        log.info("Modeler %s processing data for device %s",
            self.name(), device.id)
        getdata, tabledata = results
        log.debug("%s tabledata = %s", device.id, tabledata)
        maps = []
        rm = self.relMap()
        trunktable = tabledata.get("avpMPPTable")
        snmpindex = 1
        for trunk in trunktable.values():
            #print "trunk",trunk
            om = self.objectMap(trunk)
            name = "%s_%s" % (self.baseid,om.avpMPPEntryName)
            om.id = self.prepId(name)
            om.title = name
            om.snmpindex = snmpindex
            rm.append(om)
            snmpindex +=1
        maps.append(rm)
        return maps

