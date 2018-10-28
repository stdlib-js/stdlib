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
* Test if a value is a nonpositive integer.
*
* @module @stdlib/assert/is-nonpositive-integer
*
* @example
* var isNonPositiveInteger = require( '@stdlib/assert/is-nonpositive-integer' );
*
* var bool = isNonPositiveInteger( -5.0 );
* // returns true
*
* bool = isNonPositiveInteger( new Number( -5.0 ) );
* // returns true
*
* bool = isNonPositiveInteger( 5.0 );
* // returns false
*
* bool = isNonPositiveInteger( -3.14 );
* // returns false
*
* bool = isNonPositiveInteger( null );
* // returns false
*
* @example
* var isNonPositiveInteger = require( '@stdlib/assert/is-nonpositive-integer' ).isPrimitive;
*
* var bool = isNonPositiveInteger( -3.0 );
* // returns true
*
* bool = isNonPositiveInteger( new Number( -3.0 ) );
* // returns false
*
* @example
* var isNonPositiveInteger = require( '@stdlib/assert/is-nonpositive-integer' ).isObject;
*
* var bool = isNonPositiveInteger( -3.0 );
* // returns false
*
* bool = isNonPositiveInteger( new Number( -3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNonPositiveInteger = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isNonPositiveInteger, 'isPrimitive', isPrimitive );
setReadOnly( isNonPositiveInteger, 'isObject', isObject );


// EXPORTS //

module.exports = isNonPositiveInteger;
