/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Resolve a JSON Pointer reference token against a container.
*
* @module @stdlib/utils/json-pointer/base/resolve-token
*
* @example
* var resolveToken = require( '@stdlib/utils/json-pointer/base/resolve-token' );
*
* var obj = {
*     'foo': 'bar'
* };
* var arr = [ 1, 2, 3 ];
*
* var key = resolveToken( obj, 'foo' );
* // returns 'foo'
*
* key = resolveToken( arr, '0' );
* // returns 0
*
* key = resolveToken( arr, '-' );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
