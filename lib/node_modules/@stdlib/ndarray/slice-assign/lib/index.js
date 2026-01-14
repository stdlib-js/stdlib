/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Assign element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* @module @stdlib/ndarray/slice-assign
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var sliceAssign = require( '@stdlib/ndarray/slice-assign' );
*
* // Define an input array:
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1, s2 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, s );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
