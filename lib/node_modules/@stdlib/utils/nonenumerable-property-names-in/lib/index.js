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
* Return an array of an object's own and inherited non-enumerable property names.
*
* @module @stdlib/utils/nonenumerable-property-names-in
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
* var nonEnumerablePropertyNamesIn = require( '@stdlib/utils/nonenumerable-property-names-in' );
*
* var obj = {};
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'boop'
* });
*
* var keys = nonEnumerablePropertyNamesIn( obj );
* // e.g., returns [ 'beep', ... ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
