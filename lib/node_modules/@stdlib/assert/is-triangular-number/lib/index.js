/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Test if a value is a triangular number.
*
* @module @stdlib/assert/is-triangular-number
*
* @example
* var isTriangularNumber = require( '@stdlib/assert/is-triangular-number' );
*
* var bool = isTriangularNumber( 36.0 );
* // returns true
*
* bool = isTriangularNumber( new Number( 36.0 ) );
* // returns true
*
* bool = isTriangularNumber( 3.14 );
* // returns false
*
* bool = isTriangularNumber( -5.0 );
* // returns false
*
* bool = isTriangularNumber( null );
* // returns false
*
* @example
* var isTriangularNumber = require( '@stdlib/assert/is-triangular-number' ).isPrimitive;
*
* var bool = isTriangularNumber( 36.0 );
* // returns true
*
* bool = isTriangularNumber( new Number( 36.0 ) );
* // returns false
*
* @example
* var isTriangularNumber = require( '@stdlib/assert/is-triangular-number' ).isObject;
*
* var bool = isTriangularNumber( 36.0 );
* // returns false
*
* bool = isTriangularNumber( new Number( 36.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isTriangularNumber = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isTriangularNumber, 'isPrimitive', isPrimitive );
setReadOnly( isTriangularNumber, 'isObject', isObject );


// EXPORTS //

module.exports = isTriangularNumber;
