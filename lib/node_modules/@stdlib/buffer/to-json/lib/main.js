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

var isBuffer = require( '@stdlib/assert/is-buffer' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a JSON representation of a `Buffer`.
*
* @param {Buffer} buffer - buffer to serialize
* @throws {TypeError} first argument must be a `Buffer`
* @returns {Object} JSON representation
*
* @example
* var array2buffer = require( '@stdlib/buffer/from-array' );
*
* var buf = array2buffer( [ 1, 2 ] );
* // returns <Buffer>
*
* var json = buffer2json( buf );
* // returns { 'type': 'Buffer', 'data': [ 1, 2 ] }
*/
function buffer2json( buffer ) {
	var out;
	var i;
	if ( !isBuffer( buffer ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a Buffer. Value: `%s`.', buffer ) );
	}
	out = {};
	out.type = 'Buffer';
	out.data = [];
	for ( i = 0; i < buffer.length; i++ ) {
		out.data.push( buffer[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = buffer2json;
