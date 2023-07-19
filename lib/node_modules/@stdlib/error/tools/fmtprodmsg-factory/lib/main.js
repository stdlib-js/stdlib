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

var replace = require( '@stdlib/string/replace' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );


// MAIN //

/**
* Returns a function which formats an error message for production.
*
* @param {Options} [options] - function options
* @param {string} [options.url] - website URL for full error message
* @param {string} [options.message] - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced
* @returns {Function} error formatting function
*
* @example
* var opts = {
*     'url': 'https://stdlib.io/error-decoder.html'
* };
*
* var fcn = fmtprodmsgFactory( opts );
* // returns <Function>
*/
function fmtprodmsgFactory( options ) {
	var opts;
	var err;
	opts = defaults();
	if ( arguments.length > 0 ) {
		err = validate( opts, options );
	}
	if ( err ) {
		throw err;
	}
	return formatProdErrorMessage;

	/**
	* Formats an error message for production.
	*
	* @private
	* @param {string} code - error code
	* @param {*} ...args - error message arguments
	* @returns {string} formatted error message
	*/
	function formatProdErrorMessage() {
		var code = arguments[ 0 ];
		var url = opts.url + '?code='+code;
		var msg;
		var i;
		for ( i = 1; i < arguments.length; i++ ) {
			url += '&arg[]=' + encodeURIComponent( arguments[ i ] );
		}
		msg = replace( opts.message, '{{url}}', url );
		msg = replace( msg, '{{code}}', code );
		return msg;
	}
}


// EXPORTS //

module.exports = fmtprodmsgFactory;
