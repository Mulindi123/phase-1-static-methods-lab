class Formatter {

 static capitalize(string){
  return string[0].toUpperCase() + string.slice(1);
 }

 static sanitize(string){
    return string.replace(/[^\w\s'-]/g, '');
 }
static titleize(string){

    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(" ");
    const titleizedWords = words.map((word, index) =>{
        if(index===0 || !smallWords.includes(word.toLowerCase())){
            return this.capitalize(word);
        } else{
            return word.toLowerCase();
        }
    });
    return titleizedWords.join(" ");
}

}
console.log(Formatter.capitalize('coding is fun'))
console.log(Formatter.sanitize('coding with "£%&*(*&^%my "special-friends" is fun!'))
console.log(Formatter.titleize('the tale of a small dog and a rat from an excluded village'));