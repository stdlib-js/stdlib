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
* Test for deep equality between two values.
*
* @module @stdlib/assert/deep-equal
*
* @example
* var deepEqual = require( '@stdlib/assert/deep-equal' );
*
* var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
* // returns true
*
* bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
* // returns false
*
* bool = deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
* // returns false
*/

// MODULES //

var deepEqual = require( './main.js' );


// EXPORTS //

module.exports = deepEqual;
