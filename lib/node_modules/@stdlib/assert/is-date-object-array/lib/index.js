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
* Test if a value is an array-like object containing only `Date` objects.
*
* @module @stdlib/assert/is-date-object-array
*
* @example
* var isDateObjectArray = require( '@stdlib/assert/is-date-object-array' );
*
* var bool = isDateObjectArray( [ new Date(), new Date() ] );
* // returns true
*
* bool = isDateObjectArray( [ {}, new Number( 3.0 ) ] );
* // returns false
*
* bool = isDateObjectArray( [ {}, '3.0' ] );
* // returns false
*/

// MODULES //

var arrayfun = require( '@stdlib/assert/tools/array-like-function' );
var isDateObject = require( '@stdlib/assert/is-date-object' );


// MAIN //

var isDateObjectArray = arrayfun( isDateObject );


// EXPORTS //

module.exports = isDateObjectArray;
