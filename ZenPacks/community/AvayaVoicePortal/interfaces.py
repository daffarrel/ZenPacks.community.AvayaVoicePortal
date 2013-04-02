from Products.Zuul.form import schema
from Products.Zuul.interfaces.component import IComponentInfo
from Products.Zuul.interfaces import IFacade
from Products.Zuul.utils import ZuulMessageFactory as _t
from Products.ZenModel.ZVersion import VERSION as ZENOSS_VERSION
from Products.ZenUtils.Version import Version

if Version.parse('Zenoss ' + ZENOSS_VERSION) >= Version.parse('Zenoss 4'):
    SingleLineText = schema.TextLine
    MultiLineText = schema.Text
else:
    SingleLineText = schema.Text
    MultiLineText = schema.TextLine


class IAvayaVoicePortalMPPPInfo(IComponentInfo):
    ''''''
    avpMPPEntryName = SingleLineText(title=_t(u'Name'))
    avpMPPEntryVersion = SingleLineText(title=_t(u'Version'))
    avpMPPEntryIPAddress = SingleLineText(title=_t(u'IP'))



class IAvayaVoicePortalApplicationPInfo(IComponentInfo):
    ''''''
    avpEntryAppName = SingleLineText(title=_t(u'Name'))
    avpEntryAppURLHost = SingleLineText(title=_t(u'URL Host'))
    avpEntryAppAssociateURL1 = SingleLineText(title=_t(u'Associate URL 1'))
    avpEntryAppDNIS = SingleLineText(title=_t(u'DNIS'))
    avpEntryAppAssociateURL = SingleLineText(title=_t(u'Associate URL'))
    avpEntryAppURLPort = SingleLineText(title=_t(u'URL Port'))
    avpEntryAppURL = SingleLineText(title=_t(u'URL'))
    avpEntryAppCalledURI = SingleLineText(title=_t(u'Called URI'))
    avpEntryAppURL1 = SingleLineText(title=_t(u'URL 1'))



class IAvayaVoicePortalFacade(IFacade):
    ''''''

    def addAvayaVoicePortalMPPP(self, ob, **kwargs):
        ''''''

    def addAvayaVoicePortalApplicationP(self, ob, **kwargs):
        ''''''


