import os,re
import logging
log = logging.getLogger('zen.AvayaVoicePortalFacade')

from zope.interface import implements
from Products.Zuul.facades import ZuulFacade
from Products.Zuul.utils import ZuulMessageFactory as _t
from AvayaVoicePortalMPPP import *
from .interfaces import *

class AvayaVoicePortalFacade(ZuulFacade):
    implements(IAvayaVoicePortalFacade)
 

    def addAvayaVoicePortalMPPP(self, ob, **kwargs):
    	target = ob
    
        from Products.ZenUtils.Utils import prepId
        from ZenPacks.community.AvayaVoicePortal.AvayaVoicePortalMPPP import AvayaVoicePortalMPPP
        import re
        cid = 'avayavoiceportalmppp' 
        for k,v in kwargs.iteritems():
            if type(v) != bool:
                cid += str(v)
        cid = re.sub('[^A-Za-z0-9]+', '_', cid)
        id = prepId(cid)
        component = AvayaVoicePortalMPPP(id)
        relation = target.os.avayaVoicePortalMPPPs
        relation._setObject(component.id, component)
        component = relation._getOb(component.id)
        for k,v in kwargs.iteritems():
            setattr(component,k,v) 
        
    
    
    

    	return True, _t("Added AVP MPP for device " + target.id)

    def addAvayaVoicePortalApplicationP(self, ob, **kwargs):
    	target = ob
    
        from Products.ZenUtils.Utils import prepId
        from ZenPacks.community.AvayaVoicePortal.AvayaVoicePortalApplicationP import AvayaVoicePortalApplicationP
        import re
        cid = 'avayavoiceportalapplicationp' 
        for k,v in kwargs.iteritems():
            if type(v) != bool:
                cid += str(v)
        cid = re.sub('[^A-Za-z0-9]+', '_', cid)
        id = prepId(cid)
        component = AvayaVoicePortalApplicationP(id)
        relation = target.os.avayaVoicePortalApplicationPs
        relation._setObject(component.id, component)
        component = relation._getOb(component.id)
        for k,v in kwargs.iteritems():
            setattr(component,k,v) 
        
    
    
    

    	return True, _t("Added AVP Application for device " + target.id)

