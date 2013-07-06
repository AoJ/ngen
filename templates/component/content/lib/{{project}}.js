
exports.version = '0.0.1';


exports.info = function(req, res) {
	res.send({version: exports.version});
}