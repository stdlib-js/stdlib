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

var copy = require( '@stdlib/utils/copy' );
var recurse = require( './recurse.js' );


// MAIN //

/**
* Flattens an object.
*
* @private
* @param {ObjectLike} obj - object to flatten
* @param {Object} opts - options
* @param {NonNegativeInteger} opts.depth - maximum depth to flatten
* @param {boolean} opts.copy - boolean indicating whether to deep copy
* @param {boolean} opts.flattenArrays - boolean indicating whether to flatten arrays
* @param {string} opts.delimiter - key path delimiter
* @returns {Object} flattened object
*/
function flatten( obj, opts ) {
	var out;
	if ( opts.depth === 0 ) {
		out = obj;
	} else {
		out = recurse( {}, obj, '', opts.depth, opts );
	}
	if ( opts.copy ) {
		return copy( out );
	}
	return out;
}


// EXPORTS //

module.exports = flatten;
