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
* Test if a value is equal to positive zero.
*
* @module @stdlib/assert/is-positive-zero
*
* @example
* var isPositiveZero = require( '@stdlib/assert/is-positive-zero' );
*
* var bool = isPositiveZero( 0.0 );
* // returns true
*
* bool = isPositiveZero( new Number( 0.0 ) );
* // returns true
*
* bool = isPositiveZero( -3.14 );
* // returns false
*
* bool = isPositiveZero( 5.0 );
* // returns false
*
* bool = isPositiveZero( -0.0 );
* // returns false
*
* bool = isPositiveZero( null );
* // returns false
*
* @example
* var isPositiveZero = require( '@stdlib/assert/is-positive-zero' ).isPrimitive;
*
* var bool = isPositiveZero( 0.0 );
* // returns true
*
* bool = isPositiveZero( new Number( 0.0 ) );
* // returns false
*
* @example
* var isPositiveZero = require( '@stdlib/assert/is-positive-zero' ).isObject;
*
* var bool = isPositiveZero( 0.0 );
* // returns false
*
* bool = isPositiveZero( new Number( 0.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isPositiveZero = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isPositiveZero, 'isPrimitive', isPrimitive );
setReadOnly( isPositiveZero, 'isObject', isObject );


// EXPORTS //

module.exports = isPositiveZero;
