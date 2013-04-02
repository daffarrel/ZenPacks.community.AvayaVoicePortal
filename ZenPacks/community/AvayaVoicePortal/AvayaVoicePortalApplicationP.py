from Products.ZenModel.OSComponent import OSComponent
from Products.ZenModel.ZenPackPersistence import ZenPackPersistence
from Products.ZenModel.ManagedEntity import ManagedEntity
from Products.ZenRelations.RelSchema import *

'''
args:  classname,classname,properties,_properties,relname,sortkey,viewname
'''

class AvayaVoicePortalApplicationP(OSComponent, ManagedEntity, ZenPackPersistence):
    '''
    	basic Component class
    '''
    
    portal_type = meta_type = 'AvayaVoicePortalApplicationP'
    
    avpEntryAppName = None
    avpEntryAppURLHost = None
    avpEntryAppAssociateURL1 = None
    avpEntryAppDNIS = None
    avpEntryAppAssociateURL = None
    avpEntryAppURLPort = None
    avpEntryAppURL = None
    avpEntryAppCalledURI = None
    avpEntryAppURL1 = None

    _properties = (
    {'id': 'avpEntryAppName', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURLHost', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppAssociateURL1', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppDNIS', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppAssociateURL', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURLPort', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURL', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppCalledURI', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURL1', 'type': 'string','mode': '', 'switch': 'None' },

    )
    
    _relations = OSComponent._relations + (
        ('os', ToOne(ToManyCont, 'Products.ZenModel.OperatingSystem', 'avayaVoicePortalApplicationPs')),
        )

    isUserCreatedFlag = True
    def isUserCreated(self):
        return self.isUserCreatedFlag
        
    def statusMap(self):
        self.status = 0
        return self.status
    
    def getStatus(self):
        return self.statusMap()
    
    def primarySortKey(self):
        return self.id
    
    def viewName(self):
        return self.id
    
    name = titleOrId = viewName


from Products.ZenModel.OSComponent import OSComponent
from Products.ZenModel.ZenPackPersistence import ZenPackPersistence
from Products.ZenModel.ManagedEntity import ManagedEntity
from Products.ZenRelations.RelSchema import *

'''
args:  classname,classname,properties,_properties,relname,sortkey,viewname
'''

class AvayaVoicePortalApplicationP(OSComponent, ManagedEntity, ZenPackPersistence):
    '''
    	basic Component class
    '''
    
    portal_type = meta_type = 'AvayaVoicePortalApplicationP'
    
    avpEntryAppName = None
    avpEntryAppURLHost = None
    avpEntryAppAssociateURL1 = None
    avpEntryAppDNIS = None
    avpEntryAppAssociateURL = None
    avpEntryAppURLPort = None
    avpEntryAppURL = None
    avpEntryAppCalledURI = None
    avpEntryAppURL1 = None

    _properties = (
    {'id': 'avpEntryAppName', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURLHost', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppAssociateURL1', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppDNIS', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppAssociateURL', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURLPort', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURL', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppCalledURI', 'type': 'string','mode': '', 'switch': 'None' },
    {'id': 'avpEntryAppURL1', 'type': 'string','mode': '', 'switch': 'None' },

    )
    
    _relations = OSComponent._relations + (
        ('os', ToOne(ToManyCont, 'Products.ZenModel.OperatingSystem', 'avayaVoicePortalApplicationPs')),
        )

    isUserCreatedFlag = True
    def isUserCreated(self):
        return self.isUserCreatedFlag
        
    def statusMap(self):
        self.status = 0
        return self.status
    
    def getStatus(self):
        return self.statusMap()
    
    def primarySortKey(self):
        return self.id
    
    def viewName(self):
        return self.id
    
    name = titleOrId = viewName


