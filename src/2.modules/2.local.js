let log = {
    info: function(info){
        console.log(`info : ${info}`)
    },
    warn: function(warn){
        console.log(`warn : ${warn}`)
    },
    error: function(error){
        console.log(`error : ${error}`)
    },
}

module.exports = log
// module.exports = "Scott Desatnick"
// module.exports = 10
// // module.exports = 1
// // module.exports = "Hello World"

module.exports.display = function(display){
    console.log(`display : ${display}`)
}

module.exports.test = function(test){
    console.log(`test : ${test}`)
}

// //module.exports = function(){}