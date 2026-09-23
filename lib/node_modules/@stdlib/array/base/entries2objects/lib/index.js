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
* Convert array entries to an array of objects.
*
* @module @stdlib/array/base/entries2objects
*
* @example
* var entries2objects = require( '@stdlib/array/base/entries2objects' );
*
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2objects( x, fields );
* // returns [ { 'x': 0, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 } ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
