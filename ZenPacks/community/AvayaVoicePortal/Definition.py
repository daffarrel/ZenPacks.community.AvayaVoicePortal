from ZenPacks.community.ConstructionKit.BasicDefinition import *
from ZenPacks.community.ConstructionKit.Construct import *

BASE = "AvayaVoicePortal"
VERSION = Version(2, 1, 1)

DefinitionMPP = type('DefinitionMPP', (BasicDefinition,), {
        'version' : VERSION,
        'zenpackbase': BASE,
        'component' : 'AvayaVoicePortalMPP',
        'componentData' : {
                          'singular': 'AVP MPP',
                          'plural': 'AVP MPPs',
                          'displayed': 'id', # component field in Event Console
                          'primaryKey': 'id',
                          'properties': { 
                                        'avpMPPEntryName' : addProperty('Name','Basic',optional='false'),
                                        'avpMPPEntryIPAddress' : addProperty('IP','Basic',optional='false'),
                                        'avpMPPEntryVersion' : addProperty('Version','Basic',optional='false'),
                                        },
                          },
        'componentMethods' : [],                                       
        }
)

DefinitionApp = type('DefinitionApp', (BasicDefinition,),{
        'version' : VERSION,
        'zenpackbase': BASE,
        'component' : 'AvayaVoicePortalApplication',
        'componentData' : {
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
                          },
        'componentMethods' : [],                                       
        }
)


