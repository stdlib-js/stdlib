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
* Test if a value is an array-like object containing only finite numbers.
*
* @module @stdlib/assert/is-finite-array
*
* @example
* var isFiniteArray = require( '@stdlib/assert/is-finite-array' );
*
* var bool = isFiniteArray( [ -3.0, new Number(0.0), 2.0 ] );
* // returns true
*
* bool = isFiniteArray( [ -3.0, 1.0/0.0 ] );
* // returns false
*
* @example
* var isFiniteArray = require( '@stdlib/assert/is-finite-array' ).primitives;
*
* var bool = isFiniteArray( [ -1.0, 10.0 ] );
* // returns true
*
* bool = isFiniteArray( [ -1.5, 0.0, 5.0 ] );
* // returns true
*
* bool = isFiniteArray( [ -3.0, new Number(-1.0) ] );
* // returns false
*
* @example
* var isFiniteArray = require( '@stdlib/assert/is-finite-array' ).objects;
*
* var bool = isFiniteArray( [ new Number(1.0), new Number(3.0) ] );
* // returns true
*
* bool = isFiniteArray( [ -1.0, 0.0, 3.0 ] );
* // returns false
*
* bool = isFiniteArray( [ 3.0, new Number(-1.0) ] );
* // returns false
*/

// MODULES //

var isFinite = require( '@stdlib/assert/is-finite' ); // eslint-disable-line stdlib/no-redeclare
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isFiniteArray = arrayfun( isFinite );
setReadOnly( isFiniteArray, 'primitives', arrayfun( isFinite.isPrimitive ) );
setReadOnly( isFiniteArray, 'objects', arrayfun( isFinite.isObject ) );


// EXPORTS //

module.exports = isFiniteArray;
