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

var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var numel = require( '@stdlib/ndarray/base/numel' );
var array = require( '@stdlib/array/base/zeros' );
var getter = require( './getter.js' );
var setter = require( './setter.js' );


// MAIN //

/**
* Returns a zero-filled ndarray-like object.
*
* @private
* @param {ndarrayLike} arr - input ndarray
* @returns {Object} output ndarray-like object
*/
function zeros( arr ) {
	var sh = arr.shape;
	var st = arr.strides;
	var N = numel( sh );
	return {
		'ref': null,
		'dtype': 'generic',
		'data': array( N ),
		'length': N,
		'shape': sh,
		'strides': st,
		'offset': strides2offset( sh, st ),
		'order': arr.order,
		'accessors': false,
		'getter': getter,
		'setter': setter
	};
}


// EXPORTS //

module.exports = zeros;
