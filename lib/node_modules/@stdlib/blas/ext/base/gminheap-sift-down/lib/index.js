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
* Sift a value down from a specified index in a strided min-heap until the heap property is restored.
*
* @module @stdlib/blas/ext/base/gminheap-sift-down
*
* @example
* var gminheapSiftDown = require( '@stdlib/blas/ext/base/gminheap-sift-down' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* gminheapSiftDown( 5, 0, 7.0, x, 1 );
* // x => [ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*
* @example
* var gminheapSiftDown = require( '@stdlib/blas/ext/base/gminheap-sift-down' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* gminheapSiftDown.ndarray( 5, 0, 7.0, x, 1, 0 );
* // x => [ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
