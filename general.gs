function get_unique(list){
  list = list.filter(function(item, pos) {
    return list.indexOf(item) == pos;
  }) 
  
  return list
}


function getCaller()
{
  var stack;
  try {
    throw new Error("");
  } catch(e) {
    stack = e.stack;
  } finally {
    var stacks = stack.split("\n")
    var last = stacks[stacks.length-2]
    var m = last.match(/at (.*)/)
    
    return m[1]
  }
}

//
function throw_print(usermsg) {
  var caller = getCaller()
  var msg = caller+":"+usermsg
  throw msg
}


function printc() {
  var args = Array.prototype.slice.call(arguments);
  var msg = Utilities.formatString.apply(Utilities, args);
  
  console.log(msg)
  return msg
}


function printl() {
  var args = Array.prototype.slice.call(arguments);
  var msg = Utilities.formatString.apply(Utilities, args);
   
  Logger.log(msg)
  return msg
}

// compare without time
function is_same_date(fulldate1, fulldate2) {
  var year1 = fulldate1.getFullYear()
  var year2 = fulldate2.getFullYear()
  
  var month1 = fulldate1.getMonth()
  var month2 = fulldate2.getMonth()
  
  var date1 = fulldate1.getDate()
  var date2 = fulldate2.getDate()
  
  if((year1 == year2) && (month1 == month2) && (date1 == date2)) {
    return true
  } else {
    return false
  }    
}