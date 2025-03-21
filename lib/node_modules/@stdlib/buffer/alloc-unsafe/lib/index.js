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

/**
* Allocate a buffer having a specified number of bytes.
*
* @module @stdlib/buffer/alloc-unsafe
*
* @example
* var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
*
* var buf = allocUnsafe( 10 );
* // returns <Buffer>
*/

// MODULES //

var hasAllocUnsafe = require( './has_alloc_unsafe.js' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var allocUnsafe;
if ( hasAllocUnsafe ) {
	allocUnsafe = main;
} else {
	allocUnsafe = polyfill;
}


// EXPORTS //

module.exports = allocUnsafe;
