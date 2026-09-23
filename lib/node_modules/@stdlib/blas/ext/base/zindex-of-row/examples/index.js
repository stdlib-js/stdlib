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

var Complex128Array = require( '@stdlib/array/complex128' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var zindexOfRow = require( './../lib' );

var shape = [ 2, 2 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
console.log( x );

var workspace = new Uint8Array( shape[ 0 ] );

var out = zindexOfRow( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ], x, 1, workspace, 1 ); // eslint-disable-line max-len
console.log( out );
