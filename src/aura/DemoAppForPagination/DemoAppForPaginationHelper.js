({
    getListAccByHelper : function(component) {
          var dummyAccList = [];
        		for(var i=0;i<311;i++){
            	var acc ={};
                    acc.Name='Account Number : '+i;
            	dummyAccList.push(acc);
        }
        component.set("v.dummyAccList",dummyAccList);
        console.log('Dummy data for demo purpose -- :'+JSON.stringify( component.get("v.dummyAccList")));
	}
    
})