module.exports = function average(...args){
	var result = 0;
	var i = 0;
        args.forEach(function (value) {
        	result += value;
	   	i++;
        });
        return result/i;
};

