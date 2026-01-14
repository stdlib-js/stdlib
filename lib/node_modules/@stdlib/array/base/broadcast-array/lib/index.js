/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Broadcast an array to a specified shape.
*
* @module @stdlib/array/base/broadcast-array
*
* @example
* var broadcastArray = require( '@stdlib/array/base/broadcast-array' );
*
* var x = [ 1, 2 ];
*
* var out = broadcastArray( x, [ 2 ], [ 2, 2 ] );
* // returns {...}
*
* var shape = out.shape;
* // returns [ 2, 2 ]
*
* var strides = out.strides;
* // returns [ 0, 1 ]
*
* var ref = out.ref;
* // returns [ 1, 2 ]
*
* var bool = ( x === ref );
* // returns true
*
* var data = out.data;
* // returns [ [ 1, 2 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
