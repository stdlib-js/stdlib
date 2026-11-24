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
* Zip one or more arrays to an array of objects.
*
* @module @stdlib/array/base/zip2objects
*
* @example
* var zip2objects = require( '@stdlib/array/base/zip2objects' );
*
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var labels = [ 'x', 'y' ];
*
* var z = zip2objects( [ x, y ], labels );
* // returns [ { 'x': 1, 'y': 'a' }, { 'x': 2, 'y': 'b' }, { 'x': 3, 'y': 'c' } ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
