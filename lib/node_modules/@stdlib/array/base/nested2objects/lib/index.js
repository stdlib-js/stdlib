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
* Convert nested arrays to objects.
*
* @module @stdlib/array/base/nested2objects
*
* @example
* var nested2objects = require( '@stdlib/array/base/nested2objects' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var fields = [ 'x', 'y' ];
*
* var out = nested2objects( x, fields );
* // returns [ { 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 } ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
