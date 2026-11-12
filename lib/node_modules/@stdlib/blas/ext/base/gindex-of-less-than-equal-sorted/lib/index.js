/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Return the index of the first element in a sorted strided array which is less than or equal to a specified search element.
*
* @module @stdlib/blas/ext/base/gindex-of-less-than-equal-sorted
*
* @example
* var gindexOfLessThanEqualSorted = require( '@stdlib/blas/ext/base/gindex-of-less-than-equal-sorted' );
*
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
* // returns 0
*
* @example
* var gindexOfLessThanEqualSorted = require( '@stdlib/blas/ext/base/gindex-of-less-than-equal-sorted' );
*
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, 0 );
* // returns 0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
