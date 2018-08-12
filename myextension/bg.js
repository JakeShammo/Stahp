chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 	
   var options = {
	type: "basic", 
	title: "STAHP!!!", 
	message: "Stop using fb. Do something productive.", 
	iconUrl: "Stahp.png"
};
var Url = tab.url
if(Url.length>24 && Url.substring(0,25)=="https://www.facebook.com/"){
chrome.notifications.create(options,callback);
}
function callback() {
	console.log('Noti done');
}


}); 



