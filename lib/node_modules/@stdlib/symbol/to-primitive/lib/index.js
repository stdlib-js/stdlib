/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Symbol which specifies a method for converting an object to a primitive value.
*
* @module @stdlib/symbol/to-primitive
*
* @example
* var Number = require( '@stdlib/number/ctor' );
* var ToPrimitiveSymbol = require( '@stdlib/symbol/to-primitive' );
*
* function valueOf( hint ) {
*     if ( hint === 'string' ) {
*         return 'CustomObject';
*     }
*     if ( hint === 'number' ) {
*         return 123;
*     }
*     return null;
* }
*
* var obj = {};
* obj[ ToPrimitiveSymbol ] = valueOf;
*
* var str = String( obj );
* // returns 'CustomObject'
*
* var num = Number( obj );
* // returns 123
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
