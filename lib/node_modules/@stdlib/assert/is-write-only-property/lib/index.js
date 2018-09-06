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
* Test whether an object's own property is write-only.
*
* @module @stdlib/assert/is-write-only-property
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
* var isWriteOnlyProperty = require( '@stdlib/assert/is-write-only-property' );
*
* var obj = {
*     'boop': true
* };
*
* function setter( v ) {
*     obj.boop = v;
* }
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': true,
*     'set': setter
* });
*
* var bool = isWriteOnlyProperty( obj, 'boop' );
* // returns false
*
* bool = isWriteOnlyProperty( obj, 'beep' );
* // returns true
*/

// MODULES //

var isWriteOnlyProperty = require( './main.js' );


// EXPORTS //

module.exports = isWriteOnlyProperty;
