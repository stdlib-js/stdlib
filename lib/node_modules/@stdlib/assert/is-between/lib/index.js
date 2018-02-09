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
* Test if a value is between two values.
*
* @module @stdlib/assert/is-between
*
* @example
* var isBetween = require( '@stdlib/assert/is-between' );
*
* var bool = isBetween( 3.14, 3.0, 4.0 );
* // returns true
*
* bool = isBetween( 4.5, 3.0, 4.0 );
* // returns false
*
* bool = isBetween( 3.14, 3.14, 4.0 );
* // returns true
*
* bool = isBetween( 3.14, 3.14, 4.0, 'open', 'closed' );
* // returns false
*
* bool = isBetween( 3.14, 3.0, 3.14 );
* // returns true
*
* bool = isBetween( 3.14, 3.0, 3.14, 'closed', 'open' );
* // returns false
*/

// MODULES //

var isBetween = require( './main.js' );


// EXPORTS //

module.exports = isBetween;
