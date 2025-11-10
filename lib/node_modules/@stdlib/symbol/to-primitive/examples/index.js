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

var Number = require( '@stdlib/number/ctor' );
var defineProperty = require( '@stdlib/utils/define-property' );
var ToPrimitiveSymbol = require( './../lib' );

function CustomObject( value ) {
	if ( !(this instanceof CustomObject) ) {
		return new CustomObject( value );
	}
	this._value = value;
	return this;
}

/**
* Converts object to a primitive value.
*
* @private
* @param {string} hint - type hint
* @returns {*} primitive value
*/
function toPrimitive( hint ) {
	var value = this._value; // eslint-disable-line no-invalid-this
	if ( hint === 'string' ) {
		return 'CustomObject: ' + value;
	}
	if ( hint === 'number' ) {
		return value;
	}
	// Default hint:
	return value;
}

defineProperty( CustomObject.prototype, ToPrimitiveSymbol, {
	'configurable': false,
	'enumerable': false,
	'writable': false,
	'value': toPrimitive
});

var obj = new CustomObject( 42 );

console.log( String( obj ) );
// => 'CustomObject: 42'

console.log( Number( obj ) );
// => 42

console.log( obj + 10 );
// => 52
