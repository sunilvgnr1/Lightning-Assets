({
    doInit : function(component, event, helper) {
        component.set("v.endPoint",component.get("v.PageLimit"));
        helper.getListAccByHelper(component); 
    }
    
})