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

/* eslint-disable stdlib/no-redeclare */

'use strict';

/**
* Test if a value is a finite number.
*
* @module @stdlib/assert/is-finite
*
* @example
* var isFinite = require( '@stdlib/assert/is-finite' );
*
* var bool = isFinite( 5.0 );
* // returns true
*
* bool = isFinite( new Number( 5.0 ) );
* // returns true
*
* bool = isFinite( 1.0/0.0 );
* // returns false
*
* bool = isFinite( null );
* // returns false
*
* @example
* var isFinite = require( '@stdlib/assert/is-finite' ).isPrimitive;
*
* var bool = isFinite( -3.0 );
* // returns true
*
* bool = isFinite( new Number( -3.0 ) );
* // returns false
*
* @example
* var isFinite = require( '@stdlib/assert/is-finite' ).isObject;
*
* var bool = isFinite( 3.0 );
* // returns false
*
* bool = isFinite( new Number( 3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFinite = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isFinite, 'isPrimitive', isPrimitive );
setReadOnly( isFinite, 'isObject', isObject );


// EXPORTS //

module.exports = isFinite;
