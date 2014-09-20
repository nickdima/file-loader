/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var loaderUtils = require("loader-utils");

module.exports = function(content) {
	this.cacheable && this.cacheable();
	if(!this.emitFile) throw new Error("emitFile is required from module system");
	var url = loaderUtils.interpolateName(this, content);
	this.emitFile(url, content);
	return "module.exports = __webpack_public_path__ + " + JSON.stringify(url);
}
module.exports.raw = true;