/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var enum2state = require( './enum2state.json' );
var closed = require( './closed.js' ); // eslint-disable-line stdlib/no-redeclare
var comment = require( './comment.js' );
var error = require( './error.js' );
var escape = require( './escape.js' ); // eslint-disable-line stdlib/no-redeclare
var field = require( './field.js' );
var init = require( './init.js' );
var invalidQuoteEnd = require( './invalid_quote_end.js' );
var quoteEnd = require( './quote_end.js' );
var quotedEscape = require( './quoted_escape.js' );
var quotedField = require( './quoted_field.js' );
var skip = require( './skip.js' );
var skippedComment = require( './skipped_comment.js' );
var skippedEscape = require( './skipped_escape.js' );
var skippedField = require( './skipped_field.js' );
var skippedInvalidQuoteEnd = require( './skipped_invalid_quote_end.js' );
var skippedQuoteEnd = require( './skipped_quote_end.js' );
var skippedQuotedEscape = require( './skipped_quoted_escape.js' );
var skippedQuotedField = require( './skipped_quoted_field.js' );


// VARIABLES //

var table = {
	'closed': closed,
	'comment': comment,
	'escape': escape,
	'error': error,
	'field': field,
	'init': init,
	'invalid_quote_end': invalidQuoteEnd,
	'quote_end': quoteEnd,
	'quoted_escape': quotedEscape,
	'quoted_field': quotedField,
	'skip': skip,
	'skipped_comment': skippedComment,
	'skipped_escape': skippedEscape,
	'skipped_field': skippedField,
	'skipped_invalid_quote_end': skippedInvalidQuoteEnd,
	'skipped_quote_end': skippedQuoteEnd,
	'skipped_quoted_escape': skippedQuotedEscape,
	'skipped_quoted_field': skippedQuotedField
};


// MAIN //

/**
* Returns an object mapping state enumeration constants to state functions.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Array<Function>} table
*/
function states( parser ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < enum2state.length; i++ ) {
		out.push( table[ enum2state[ i ] ]( parser ) );
	}
	return out;
}


// EXPORTS //

module.exports = states;
