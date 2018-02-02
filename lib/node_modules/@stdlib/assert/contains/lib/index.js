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
* Test if an array-like value contains another value.
*
* @module @stdlib/assert/contains
*
* @example
* var contains = require( '@stdlib/assert/contains' );
*
* var bool = contains( 'Hello World', 'World' );
* // returns true
*
* bool = contains( 'Hello World', 'world' );
* // returns false
*
* bool = contains( [ 1, 2, 3, 4 ], 2 );
* // returns true
*
* bool = contains( [ NaN, 2, 3, 4 ], NaN );
* // returns true
*/

// MODULES //

var contains = require( './contains.js' );


// EXPORTS //

module.exports = contains;
