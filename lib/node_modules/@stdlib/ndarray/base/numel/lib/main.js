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
* Returns the number of elements in an array.
*
* @param {(NonNegativeIntegerArray|EmptyArray)} shape - array shape
* @returns {NonNegativeInteger} number of elements
*
* @example
* var n = numel( [ 3, 3, 3 ] );
* // returns 27
*/
function numel( shape ) {
	var ndims;
	var n;
	var i;

	ndims = shape.length;
	if ( ndims === 0 ) {
		return 0;
	}
	n = 1;
	for ( i = 0; i < ndims; i++ ) {
		n *= shape[ i ];
	}
	return n;
}


// EXPORTS //

module.exports = numel;
