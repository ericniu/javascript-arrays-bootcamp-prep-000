var chocolateBars = [
  'snicers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array,element){
  array=[element,...array]
  return array
}
addElementToBeginningOfArray (["a","b","c"])

function destructivelyAddElementToBeginningOfArray (array,element){
  array=[element,...array]
  return array
destructivelyAddElementToBeginningOfArray (["a","b","c"])
}

function addElementToEndOfArray (array,element){
  array=[element,...array]
  return array
}
addElementToEndOfArray (["a","b","c"])

function destructivelyAddElementToEndOfArray (aaray,element){
  array=[...array,element]
  return array 
}
destructivelyAddElementToEndOfArray (["a","b","c"])