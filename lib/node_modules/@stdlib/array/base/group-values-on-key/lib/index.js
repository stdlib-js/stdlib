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
* Group the elements of an array according to a specified property name.
*
* @module @stdlib/array/base/group-values-on-key
*
* @example
* var groupValuesOnKey = require( '@stdlib/array/base/group-values-on-key' );
*
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 1,
*         'y': 3
*     }
* ];
*
* var out = groupValuesOnKey( x, 'y' );
* // returns { '2': [ { 'x': 1, 'y': 2 } ], '3': [ { 'x': 1, 'y': 3 } ] }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
