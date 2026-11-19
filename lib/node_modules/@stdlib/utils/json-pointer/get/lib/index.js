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
* Retrieve the value at a specified JSON Pointer from a document.
*
* @module @stdlib/utils/json-pointer/get
*
* @example
* var get = require( '@stdlib/utils/json-pointer/get' );
*
* var out = get( { 'foo': [ 'bar', 'baz' ] }, '/foo/0' );
* // returns 'bar'
*
* out = get( { 'foo': 'bar' }, '/foo' );
* // returns 'bar'
*
* out = get( { 'foo': 'bar' }, '' );
* // returns { 'foo': 'bar' }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
