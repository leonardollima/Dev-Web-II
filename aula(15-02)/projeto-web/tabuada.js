
var tabuada = function(n1){
    var total = ""
    for (i=0; i<=10; i++){
        total += n1 + ' X ' + i + ' = ' + n1*i + "\n"
    }
    return total
}

module.exports = tabuada