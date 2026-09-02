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
* Create an array containing views with renamed keys for every element in a provided array.
*
* @module @stdlib/array/base/rekey-views
*
* @example
* var rekeyViews = require( '@stdlib/array/base/rekey-views' );
*
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 3,
*         'y': 4
*     }
* ];
* var mapping = {
*     'x': 'a',
*     'y': 'b'
* };
*
* var out = rekeyViews( x, mapping );
* // returns [ <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'a': 1, 'b': 2 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'a': 3, 'b': 4 }
*
* // Mutate the first element in the input array:
* x[ 0 ].x = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'a': 5, 'b': 2 }
*
* // Set a view property:
* out[ 1 ].b = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'a': 3, 'b': 'beep' }
*
* var y = x.slice();
* // returns [ { 'x': 5, 'y': 2 }, { 'x': 3, 'y': 'beep' } ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
