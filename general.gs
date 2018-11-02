function get_unique(list){
  list = list.filter(function(item, pos) {
    return list.indexOf(item) == pos;
  }) 
  
  return list
}

//
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
