var httpretries = 5


function httpretry(url, options, ifNthrow) {
  for(var i = 1; i <= httpretries; i++) {
    try { 
      if( options == undefined ) {
        var response = UrlFetchApp.fetch(url)
      } else {
        var response = UrlFetchApp.fetch(url, options)
      }
      var code = response.getResponseCode()
      if( code < 300 ) {  // for 200, 201 compatible
        return response
      }
    } catch(e) {
      Utilities.sleep(1000 * 1)
      if( i >= httpretries ) {
        if(ifNthrow == true) {
          console.log("ifNthrow: %s", e)
          return undefined
        } else {
          throw_print(e)
        }
      }      
    }
  }  
}
