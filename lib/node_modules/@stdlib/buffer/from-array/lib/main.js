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

var isCollection = require( '@stdlib/assert/is-collection' );
var Buffer = require( '@stdlib/buffer/ctor' );


// MAIN //

/**
* Allocates a buffer using an octet array.
*
* @param {Collection} arr - octet array
* @throws {TypeError} must provide an array-like object
* @returns {Buffer} new `Buffer` instance
*
* @example
* var fromArray = require( '@stdlib/buffer/from-array' );
*
* var buf = fromArray( [ 1, 2, 3, 4 ] );
* // returns <Buffer>
*/
function fromArray( arr ) {
	if ( !isCollection( arr ) ) {
		throw new TypeError( 'invalid argument. Must provide an array-like object. Value: `' + arr + '`' );
	}
	return Buffer.from( arr );
}


// EXPORTS //

module.exports = fromArray;
