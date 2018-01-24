'use strict';

// MODULES //

var merge = require( '@stdlib/utils/merge' );
var unique = require( './unique.js' );


// MAIN //

/**
* Combines two lunr indices into a single one.
*
* @private
* @param {Object} a - first lunr index
* @param {Object} b - second lunr index
* @returns {Object} combined lunr object
*/
function combine( a, b ) {
	var documentStore;
	var corpusTokens;
	var tokenStore;
	corpusTokens = unique( a.corpusTokens.concat( b.corpusTokens ) );
	documentStore = {
		'store': merge( a.documentStore.store, b.documentStore.store ),
		'length': a.documentStore.length + b.documentStore.length
	};
	tokenStore = {
		'root': merge( a.tokenStore.root, b.tokenStore.root ),
		'length': a.tokenStore.length + b.tokenStore.length
	};
	return {
		'version': a.version,
		'fields': a.fields.slice(),
		'corpusTokens': corpusTokens,
		'documentStore': documentStore,
		'tokenStore': tokenStore,
		'pipeline': a.pipeline.slice()
	};
}


// EXPORTS //

module.exports = combine;
