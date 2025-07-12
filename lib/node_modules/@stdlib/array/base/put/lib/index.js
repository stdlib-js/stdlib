/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Replace specified elements of an array with provided values.
*
* @module @stdlib/array/base/put
*
* @example
* var put = require( '@stdlib/array/base/put' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
