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
* Define (and/or modify) properties.
*
* @module @stdlib/utils/define-properties
*
* @example
* var defineProperties = require( '@stdlib/utils/define-properties' );
*
* var obj = {};
* defineProperties( obj, {
*     'foo': {
*         'value': 'bar',
*         'writable': false,
*         'configurable': false,
*         'enumerable': true
*     },
*     'baz': {
*         'value': 13
*     }
* });
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.log( err.message );
* }
*/

// MODULES //

var hasDefinePropertiesSupport = require( '@stdlib/assert/has-define-properties-support' ); // eslint-disable-line id-length
var builtin = require( './builtin.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var defineProperties;
if ( hasDefinePropertiesSupport() ) {
	defineProperties = builtin;
} else {
	defineProperties = polyfill;
}


// EXPORTS //

module.exports = defineProperties;
