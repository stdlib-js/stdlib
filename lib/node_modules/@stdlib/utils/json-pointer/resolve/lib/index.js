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
* Resolve a JSON Pointer against a document and return the target, key, and value.
*
* @module @stdlib/utils/json-pointer/resolve
*
* @example
* var resolve = require( '@stdlib/utils/json-pointer/resolve' );
*
* var out = resolve( { 'foo': [ 'bar', 'baz' ] }, '/foo/0' );
* // returns { 'target': [ 'bar', 'baz' ], 'key': 0, 'value': 'bar' }
*
* out = resolve( { 'foo': 'bar' }, '/foo' );
* // returns { 'target': { 'foo': 'bar' }, 'key': 'foo', 'value': 'bar' }
*
* out = resolve( { 'foo': 'bar' }, '' );
* // returns { 'target': null, 'key': null, 'value': { 'foo': 'bar' } }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
