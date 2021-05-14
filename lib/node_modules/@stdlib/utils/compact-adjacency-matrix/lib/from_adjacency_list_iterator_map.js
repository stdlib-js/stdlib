/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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


// MAIN //

/**
* Returns an array of iterated values.
*
* @private
* @param {Object} it - iterator
* @param {Function} clbk - callback to invoke for each iterated value
* @param {*} thisArg - invocation context
* @returns {(Array|TypeError)} array or an error
*/
function fromIteratorMap( it, clbk, thisArg ) {
	var out;
	var v;
	var z;
	var i;

	out = [];
	i = -1;
	while ( true ) {
		i += 1;
		v = it.next();
		z = v.value;
		if ( z ) {
			z = clbk.call( thisArg, z, i );
			if ( !isCollection( z ) ) {
				return new TypeError( 'invalid argument. Callback must return an array-like object containing vertices. Value: `'+z+'`.' );
			}
			out.push( z );
		}
		if ( v.done ) {
			break;
		}
	}
	return out;
}


// EXPORTS //

module.exports = fromIteratorMap;
