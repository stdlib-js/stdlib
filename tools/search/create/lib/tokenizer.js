'use strict';

// MODULES //

var removePunctuation = require( '@stdlib/string/remove-punctuation' );
var lowercase = require( '@stdlib/string/lowercase' );
var tokenize = require( '@stdlib/nlp/tokenize' );
var trim = require( '@stdlib/string/trim' );


// MAIN //

/**
* Tokenizes a file after removing comments and special characters and turning all characters to lowercase.
*
* @private
* @param {string} doc - document to tokenize
* @returns {Array} tokens
*/
function tokenizer( doc ) {
	// Remove all comments:
	doc = doc.replace( /<!--[^->]+-->/g, '' );

	// Remove other special characters:
	doc = doc.replace( /[#\*_\-=]/g, '' );

	doc = lowercase( doc );
	doc = removePunctuation( doc );
	doc = trim( doc );
	return tokenize( doc );
}


// EXPORTS //

module.exports = tokenizer;
