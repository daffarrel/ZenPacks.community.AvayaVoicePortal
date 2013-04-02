from ZenPacks.community.ConstructionKit.Construct import *
from Products.ZenModel.migrate.Migrate import Version
import os

ROOT = "ZenPacks.community"
BASE = "AvayaVoicePortal"
VERSION = Version(2, 0, 0)
ZPROPS = []
CWD = os.path.dirname(os.path.realpath(__file__))


class DefinitionMPP():
    """
    """
    version = VERSION
    zenpackroot = ROOT # ZenPack Root
    zenpackbase = BASE # ZenaPack Name
    #dictionary of components
    component = 'AvayaVoicePortalMPPP'
    componentData = {
                  'singular': 'AVP MPP',
                  'plural': 'AVP MPPs',
                  'displayed': 'id', # component field in Event Console
                  'primaryKey': 'id',
                  'properties': { 
                        'avpMPPEntryName' : addProperty('Name','Basic',optional='false'),
                        'avpMPPEntryIPAddress' : addProperty('IP','Basic',optional='false'),
                        'avpMPPEntryVersion' : addProperty('Version','Basic',optional='false'),
                        },
                  }
    addManual = False
    createDS = False
    packZProperties = ZPROPS
    cwd = CWD # ZenPack files directory
    
class DefinitionApp():
    """
    """
    version = VERSION
    zenpackroot = ROOT # ZenPack Root
    zenpackbase = BASE # ZenaPack Name
    #dictionary of components
    component = 'AvayaVoicePortalApplicationP'
    componentData = {
                  'singular': 'AVP Application',
                  'plural': 'AVP Applications',
                  'displayed': 'id', # component field in Event Console
                  'primaryKey': 'id',
                  'properties': { 
                        'avpEntryAppName' : addProperty('Name','Basic',optional='false'),
                        'avpEntryAppDNIS' : addProperty('DNIS','Basic',optional='false'),
                        'avpEntryAppURL' : addProperty('URL','Basic',optional='false'),
                        'avpEntryAppURLHost' : addProperty('URL Host','Basic',optional='false'),
                        'avpEntryAppURLPort' : addProperty('URL Port','Basic',optional='false'),
                        'avpEntryAppCalledURI' : addProperty('Called URI','Basic',optional='false'),
                        'avpEntryAppURL1' : addProperty('URL 1','Basic'),
                        'avpEntryAppAssociateURL' : addProperty('Associate URL','Basic',optional='false'),
                        'avpEntryAppAssociateURL1' : addProperty('Associate URL 1','Basic'),
                        },
                  }
    addManual = False
    createDS = False
    packZProperties = ZPROPS
    cwd = CWD # ZenPack files directory
