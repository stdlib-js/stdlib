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
* Test whether an object's own or inherited property is writable.
*
* @module @stdlib/assert/is-writable-property-in
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
* var isWritablePropertyIn = require( '@stdlib/assert/is-writable-property-in' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'beep'
* });
*
* var bool = isWritablePropertyIn( obj, 'boop' );
* // returns true
*
* bool = isWritablePropertyIn( obj, 'beep' );
* // returns false
*/

// MODULES //

var isWritablePropertyIn = require( './main.js' );


// EXPORTS //

module.exports = isWritablePropertyIn;
