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

var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var dgttrf = require( './../lib' );

var N = 9;

var DL = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ] );
var D = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var DU = new Float64Array( [ 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0 ] );
var DU2 = new Float64Array( N-2 );
var IPIV = new Int32Array( N );

/*
	A = [
		[ 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0 ],
		[ 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0 ],
		[ 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0 ],
		[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0 ],
		[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0 ],
	]
*/

// Perform the `A = LU` factorization:
var info = dgttrf( N, DL, D, DU, DU2, IPIV );

console.log( DL );
console.log( D );
console.log( DU );
console.log( DU2 );
console.log( IPIV );
console.log( info );
