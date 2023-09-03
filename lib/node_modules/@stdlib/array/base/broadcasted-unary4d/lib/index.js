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
* Apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a four-dimensional nested output array.
*
* @module @stdlib/array/base/broadcasted-unary4d
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
* var bunary4d = require( '@stdlib/array/base/broadcasted-unary4d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shapes = [
*     [ 1, 1, 1, 2 ],
*     [ 1, 1, 2, 2 ]
* ];
*
* var x = ones4d( shapes[ 0 ] );
* var y = zeros4d( shapes[ 1 ] );
*
* bunary4d( [ x, y ], shapes, scale );
*
* console.log( y );
* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
