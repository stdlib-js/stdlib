'use strict';

/**
* Wraps a source code string similar to `require`.
*
* @private
* @param {string} src - source code
* @returns {string} wrapped code
*/
function wrap( src ) {
	var out = '';
	out += '(function(require,__filename,__dirname){';
	out += src;
	out += '});';
	return out;
}


// EXPORTS //

module.exports = wrap;
