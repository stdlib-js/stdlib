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

// MAIN //

/**
* Fills an array-like object with zeros.
*
* @private
* @param {(Array|TypedArray|Buffer)} v - array-like object to fill
* @returns {(Array|TypedArray|Buffer)} input value
*
* @example
* var arr = zeros( new Array( 2 ) );
* // returns [ 0, 0 ]
*/
function zeros( v ) {
	var i;
	for ( i = 0; i < v.length; i++ ) {
		v[ i ] = 0;
	}
	return v;
}


// EXPORTS //

module.exports = zeros;
