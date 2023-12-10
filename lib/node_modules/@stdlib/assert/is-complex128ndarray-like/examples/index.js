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

var ndarray = require( '@stdlib/ndarray/ctor' );
var Complex128Array = require( '@stdlib/array/complex128' );
var isComplex128ndarrayLike = require( './../lib' );

var buffer = new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
var arr = ndarray( 'complex128', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

console.log( isComplex128ndarrayLike( arr ) );
// => true

console.log( isComplex128ndarrayLike( [ 1, 2, 3, 4 ] ) );
// => false

console.log( isComplex128ndarrayLike( {} ) );
// => false

console.log( isComplex128ndarrayLike( null ) );
// => false
