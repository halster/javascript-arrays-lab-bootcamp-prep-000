const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
kittens.push(name)
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
kittens=["Milo", "Otis", "Garfield"]
function appendKitten(name){
var  newKitten= [...kittens, name]
  return newKitten
}
