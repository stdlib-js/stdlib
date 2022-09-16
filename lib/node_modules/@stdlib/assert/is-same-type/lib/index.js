/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Test if two arguments have the same type.
*
* @module @stdlib/assert/is-same-type
*
* @example
* var isSameType = require( '@stdlib/assert/is-same-type' );
*
* var bool = isSameType( true, true );
* // returns true
*
* bool = isSameType( 3.14, -3.14 );
* // returns true
*
* bool = isSameType( {}, [] );
* // returns true
*
* bool = isSameType( NaN, NaN );
* // returns true
*
* bool = isSameType( '0.0', 0.0 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
