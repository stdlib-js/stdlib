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
* Typed array pool.
*
* @module @stdlib/array/pool
*
* @example
* var typedarraypool = require( '@stdlib/array/pool' );
*
* // Allocate an array of doubles:
* var arr = typedarraypool( 5, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* arr[ 0 ] = 3.14;
* arr[ 1 ] = 3.14;
*
* // ...
*
* // Free the allocated memory to be used in a future allocation:
* typedarraypool.free( arr );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var typedarraypool = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( typedarraypool, 'factory', factory );


// EXPORTS //

module.exports = typedarraypool;
