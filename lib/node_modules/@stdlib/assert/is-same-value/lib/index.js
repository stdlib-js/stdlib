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
* Test if two arguments are the same value.
*
* @module @stdlib/assert/is-same-value
*
* @example
* var isSameValue = require( '@stdlib/assert/is-same-value' );
*
* var bool = isSameValue( true, true );
* // returns true
*
* bool = isSameValue( 3.14, 3.14 );
* // returns true
*
* bool = isSameValue( {}, {} );
* // returns false
*
* bool = isSameValue( -0.0, -0.0 );
* // returns true
*
* bool = isSameValue( -0.0, 0.0 );
* // returns false
*
* bool = isSameValue( NaN, NaN );
* // returns true
*
* bool = isSameValue( [], [] );
* // returns false
*/

// MODULES //

var isSameValue = require( './main.js' );


// EXPORTS //

module.exports = isSameValue;
