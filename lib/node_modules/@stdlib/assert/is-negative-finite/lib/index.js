/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Test if a value is a finite negative number.
*
* @module @stdlib/assert/is-negative-finite
*
* @example
* var isNegativeFinite = require( '@stdlib/assert/is-negative-finite' );
*
* var bool = isNegativeFinite( -5.0 );
* // returns true
*
* bool = isNegativeFinite( new Number( -5.0 ) );
* // returns true
*
* bool = isNegativeFinite( -3.14 );
* // returns true
*
* bool = isNegativeFinite( 5.0 );
* // returns false
*
* bool = isNegativeFinite( null );
* // returns false
*
* bool = isNegativeFinite( -1.0/0.0 );
* // returns false
*
* @example
* var isNegativeFinite = require( '@stdlib/assert/is-negative-finite' ).isPrimitive;
*
* var bool = isNegativeFinite( -3.0 );
* // returns true
*
* bool = isNegativeFinite( new Number( -3.0 ) );
* // returns false
*
* bool = isNegativeFinite( new Number( -1.0/0.0 ) );
* // returns false
*
* @example
* var isNegativeFinite = require( '@stdlib/assert/is-negative-finite' ).isObject;
*
* var bool = isNegativeFinite( -3.0 );
* // returns false
*
* bool = isNegativeFinite( new Number( -3.0 ) );
* // returns true
*
* bool = isNegativeFinite( new Number( -1.0/0.0 ) );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( main, 'isPrimitive', isPrimitive );
setReadOnly( main, 'isObject', isObject );


// EXPORTS //

module.exports = main;
