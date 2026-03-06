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
* Prepends singleton dimensions in order to satisfy a minimum number of dimensions.
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {Array} shape - array dimensions
* @param {NonNegativeInteger} ndmin - minimum number of dimensions
* @returns {Array} output shape array
*/
function expandShape( ndims, shape, ndmin ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < ndmin-ndims; i++ ) {
		out.push( 1 );
	}
	for ( i = 0; i < ndims; i++ ) {
		out.push( shape[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = expandShape;
