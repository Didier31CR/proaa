const modulePattern = (function(){

    let text = "You can't access this text if you don't call this variable on the return area";

    return {
        showText: function(){
            console.log(text);
        }
    }

    
})();

console.log(modulePattern.showText());

module.exports = modulePattern;