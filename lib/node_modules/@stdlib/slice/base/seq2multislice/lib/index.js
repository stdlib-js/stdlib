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
* Convert a multidimensional subsequence string to a MultiSlice object.
*
* @module @stdlib/slice/base/seq2multislice
*
* @example
* var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
*
* var s = seq2multislice( '0:10:2', [ 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice> ]
*
* var s0 = data[ 0 ];
* // returns <Slice>
*
* var v = s0.start;
* // returns 0
*
* v = s0.stop;
* // returns 10
*
* v = s0.step;
* // returns 2
*
* @example
* var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
*
* var s = seq2multislice( '2,0:10:2,-4', [ 10, 10, 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ 2, <Slice>, -4 ]
*
* @example
* var seq2multislice = require( '@stdlib/slice/base/seq2multislice' );
*
* var s = seq2multislice( '::-2,...,:', [ 10, 10, 10, 10, 10 ], false );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, <Slice>, <Slice>, <Slice>, <Slice> ]
*
* var s1 = data[ 1 ];
* // returns <Slice>
*
* var v = s1.start;
* // returns 0
*
* v = s1.stop;
* // returns 10
*
* v = s1.step;
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
