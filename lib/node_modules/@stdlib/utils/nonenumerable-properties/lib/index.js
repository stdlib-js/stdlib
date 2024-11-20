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
* Return an array of an object's own non-enumerable property names and symbols.
*
* @module @stdlib/utils/nonenumerable-properties
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
* var nonEnumerableProperties = require( '@stdlib/utils/nonenumerable-properties' );
*
* var obj = {};
*
* obj.a = 'a';
* defineProperty( obj, 'b', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'b'
* });
*
* var props = nonEnumerableProperties( obj );
* // returns [ 'b' ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
