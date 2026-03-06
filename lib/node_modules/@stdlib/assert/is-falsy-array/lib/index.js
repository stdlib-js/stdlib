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
* Test if a value is an array-like object containing only falsy values.
*
* @module @stdlib/assert/is-falsy-array
*
* @example
* var isFalsyArray = require( '@stdlib/assert/is-falsy-array' );
*
* var bool = isFalsyArray( [ false, null, void 0, '', 0, NaN ] );
* // returns true
*
* bool = isFalsyArray( [ {}, [] ] );
* // returns false
*
* bool = isFalsyArray( [] );
* // returns false
*/

// MODULES //

var arrayfun = require( '@stdlib/assert/tools/array-like-function' );
var isFalsy = require( '@stdlib/assert/is-falsy' );


// MAIN //

var isFalsyArray = arrayfun( isFalsy );


// EXPORTS //

module.exports = isFalsyArray;
