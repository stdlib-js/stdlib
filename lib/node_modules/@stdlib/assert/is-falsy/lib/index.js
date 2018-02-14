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
* Test if a value is falsy.
*
* @module @stdlib/assert/is-falsy
*
* @example
* var isFalsy = require( '@stdlib/assert/is-falsy' );
*
* var bool = isFalsy( false );
* // returns true
*
* bool = isFalsy( null );
* // returns true
*
* bool = isFalsy( '' );
* // returns true
*
* bool = isFalsy( 0 );
* // returns true
*
* bool = isFalsy( void 0 );
* // returns true
*
* bool = isFalsy( NaN );
* // returns true
*
* bool = isFalsy( [] );
* // returns false
*/

// MODULES //

var isFalsy = require( './main.js' );


// EXPORTS //

module.exports = isFalsy;
