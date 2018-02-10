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
* Test if a value is truthy.
*
* @module @stdlib/assert/is-truthy
*
* @example
* var isTruthy = require( '@stdlib/assert/is-truthy' );
*
* var bool = isTruthy( true );
* // returns true
*
* bool = isTruthy( [] );
* // returns true
*
* bool = isTruthy( false );
* // returns false
*
* bool = isTruthy( null );
* // returns false
*
* bool = isTruthy( '' );
* // returns false
*
* bool = isTruthy( 0 );
* // returns false
*
* bool = isTruthy( void 0 );
* // returns false
*
* bool = isTruthy( NaN );
* // returns false
*/

// MODULES //

var isTruthy = require( './main.js' );


// EXPORTS //

module.exports = isTruthy;
