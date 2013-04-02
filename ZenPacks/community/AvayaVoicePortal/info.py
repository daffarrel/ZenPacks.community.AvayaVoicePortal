from zope.interface import implements
from Products.Zuul.infos import ProxyProperty
from Products.Zuul.infos.component import ComponentInfo
from ZenPacks.community.AvayaVoicePortal.interfaces import *

'''
args:  zenpack,compInfo,compInterface,infoProperties
'''

class AvayaVoicePortalMPPPInfo(ComponentInfo):
    implements( IAvayaVoicePortalMPPPInfo )
    avpMPPEntryName = ProxyProperty('avpMPPEntryName')
    avpMPPEntryVersion = ProxyProperty('avpMPPEntryVersion')
    avpMPPEntryIPAddress = ProxyProperty('avpMPPEntryIPAddress')


from zope.interface import implements
from Products.Zuul.infos import ProxyProperty
from Products.Zuul.infos.component import ComponentInfo
from ZenPacks.community.AvayaVoicePortal.interfaces import *

'''
args:  zenpack,compInfo,compInterface,infoProperties
'''

class AvayaVoicePortalApplicationPInfo(ComponentInfo):
    implements( IAvayaVoicePortalApplicationPInfo )
    avpEntryAppName = ProxyProperty('avpEntryAppName')
    avpEntryAppURLHost = ProxyProperty('avpEntryAppURLHost')
    avpEntryAppAssociateURL1 = ProxyProperty('avpEntryAppAssociateURL1')
    avpEntryAppDNIS = ProxyProperty('avpEntryAppDNIS')
    avpEntryAppAssociateURL = ProxyProperty('avpEntryAppAssociateURL')
    avpEntryAppURLPort = ProxyProperty('avpEntryAppURLPort')
    avpEntryAppURL = ProxyProperty('avpEntryAppURL')
    avpEntryAppCalledURI = ProxyProperty('avpEntryAppCalledURI')
    avpEntryAppURL1 = ProxyProperty('avpEntryAppURL1')


