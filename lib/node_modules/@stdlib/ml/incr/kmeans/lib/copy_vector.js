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

var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;


// MAIN //

/**
* Copies vector elements to another vector.
*
* @private
* @param {ndarray} out - destination vector
* @param {ndarray} src - source vector
* @returns {ndarray} destination vector
*/
function copyVector( out, src ) {
	gcopy( src.shape[0], src.data, src.strides[0], src.offset, out.data, out.strides[0], out.offset ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = copyVector;
