/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var objectKeys = require( '@stdlib/utils/keys' );


// VARIABLES //

var RE_INTEGER_INDEX = /^[0-9]+$/;


// MAIN //

/**
* Returns an array of an object's own enumerable property names which are not integer indices.
*
* @param {ObjectLike} obj - input object
* @returns {Array} key array
*
* @example
* function Foo() {
*     this[ 0 ] = 3.14;
*     this.beep = 'boop';
*     return this;
* }
*
* Foo.prototype.foo = 'bar';
*
* var obj = new Foo();
*
* var keys = nonIndexKeys( obj );
* // e.g., returns [ 'beep' ]
*/
function nonIndexKeys( obj ) {
	var keys;
	var len;
	var N;
	var i;
	var j;

	keys = objectKeys( obj );
	len = keys.length;
	N = len;
	j = 0;

	// Compress the list of keys by using a lagging index and moving non-integer indices to earlier positions in the array...
	for ( i = 0; i < len; i++ ) {
		if ( RE_INTEGER_INDEX.test( keys[ i ] ) ) {
			N -= 1;
		} else {
			keys[ j ] = keys[ i ];
			j += 1;
		}
	}
	keys.length = N;
	return keys;
}


// EXPORTS //

module.exports = nonIndexKeys;
