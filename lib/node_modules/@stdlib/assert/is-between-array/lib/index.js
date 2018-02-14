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
* Test if a value is an array-like object where every element is between two values.
*
* @module @stdlib/assert/is-between-array
*
* @example
* var isBetweenArray = require( '@stdlib/assert/is-between-array' );
*
* var arr = [ 3.0, 3.14, 4.0 ];
*
* var bool = isBetweenArray( arr, 3.0, 4.0 );
* // returns true
*
* bool = isBetweenArray( arr, 3.14, 4.0 );
* // returns false
*
* bool = isBetweenArray( arr, 3.0, 3.14 );
* // returns false
*
* bool = isBetweenArray( arr, 3.0, 4.0, 'open', 'closed' );
* // returns false
*
* bool = isBetweenArray( arr, 3.0, 4.0, 'closed', 'open' );
* // returns false
*/

// MODULES //

var isBetweenArray = require( './main.js' );


// EXPORTS //

module.exports = isBetweenArray;
