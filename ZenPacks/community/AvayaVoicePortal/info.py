from ZenPacks.community.ConstructionKit.ClassHelper import *

def AvayaVoicePortalApplicationgetEventClassesVocabulary(context):
    return SimpleVocabulary.fromValues(context.listgetEventClasses())

class AvayaVoicePortalApplicationInfo(ClassHelper.AvayaVoicePortalApplicationInfo):
    ''''''

def AvayaVoicePortalMPPgetEventClassesVocabulary(context):
    return SimpleVocabulary.fromValues(context.listgetEventClasses())

class AvayaVoicePortalMPPInfo(ClassHelper.AvayaVoicePortalMPPInfo):
    ''''''


