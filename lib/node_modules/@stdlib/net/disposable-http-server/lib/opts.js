/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Extracts HTTP server options from input function options.
*
* @private
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.port] - server port
* @param {NonNegativeInteger} [options.maxport] - max server port
* @param {string} [options.hostname] - server hostname
* @param {string} [options.address] - server address
* @returns {Options} server options
*
* @example
* var options = {
*     'html': '<h1>beep</h1>',
*     'open': true,
*     'port': 7331,
*     'address': '127.0.0.1'
* };
* var out = opts( options );
* // returns {'port': 7331, 'address': '127.0.0.1'}
*/
function opts( options ) {
	var out = {};
	if ( hasOwnProp( options, 'port' ) ) {
		out.port = options.port;
	}
	if ( hasOwnProp( options, 'maxport' ) ) {
		out.maxport = options.maxport;
	}
	if ( hasOwnProp( options, 'hostname' ) ) {
		out.hostname = options.hostname;
	}
	if ( hasOwnProp( options, 'address' ) ) {
		out.address = options.address;
	}
	return out;
}


// EXPORTS //

module.exports = opts;
