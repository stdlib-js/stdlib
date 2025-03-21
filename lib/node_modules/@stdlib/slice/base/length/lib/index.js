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
* Compute the number of elements in a normalized slice.
*
* @module @stdlib/slice/base/length
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
* var sliceLength = require( '@stdlib/slice/base/length' );
*
* var s = new Slice( 2, null, 1 );
* // returns <Slice>
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 8
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 9
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
