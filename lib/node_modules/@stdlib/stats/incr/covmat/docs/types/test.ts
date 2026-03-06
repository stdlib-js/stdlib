/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import Float64Array = require( '@stdlib/array/float64' );
import ndarray = require( '@stdlib/ndarray/ctor' );
import incrcovmat = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	let buffer = new Float64Array( 4 );
	let shape = [ 2, 2 ];
	let strides = [ 2, 1 ];

	// Create a 2-dimensional output covariance matrix:
	const cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	incrcovmat( cov ); // $ExpectType accumulator
	incrcovmat( 2 ); // $ExpectType accumulator

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];

	const means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	means.set( 0, 3.0 );
	means.set( 1, -5.5 );
	incrcovmat( 2, means ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray or number...
{
	incrcovmat( '5' ); // $ExpectError
	incrcovmat( true ); // $ExpectError
	incrcovmat( false ); // $ExpectError
	incrcovmat( null ); // $ExpectError
	incrcovmat( undefined ); // $ExpectError
	incrcovmat( [] ); // $ExpectError
	incrcovmat( {} ); // $ExpectError
	incrcovmat( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	incrcovmat( 2, '5' ); // $ExpectError
	incrcovmat( 2, true ); // $ExpectError
	incrcovmat( 2, false ); // $ExpectError
	incrcovmat( 2, null ); // $ExpectError
	incrcovmat( 2, [] ); // $ExpectError
	incrcovmat( 2, {} ); // $ExpectError
	incrcovmat( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	let buffer = new Float64Array( 4 );
	let shape = [ 2, 2 ];
	let strides = [ 2, 1 ];

	// Create a 2-dimensional output covariance matrix:
	const cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];

	const means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	means.set( 0, 3.0 );
	means.set( 1, -5.5 );

	incrcovmat(); // $ExpectError
	incrcovmat( cov, means, {} ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrcovmat( 2 );
	acc(); // $ExpectType ndarray | null

	const buffer = new Float64Array( 2 );
	const shape = [ 2 ];
	const strides = [ 1 ];

	const vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	vec.set( 0, 37.0 );
	vec.set( 1, 45.0 );
	acc( vec ); // $ExpectType ndarray | null
}

// The function returns an accumulator function which returns an accumulated result (known means)...
{
	let buffer = new Float64Array( 2 );
	let shape = [ 2 ];
	let strides = [ 1 ];

	const means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	means.set( 0, 3.0 );
	means.set( 1, -5.5 );
	const acc = incrcovmat( 2, means );

	acc(); // $ExpectType ndarray | null
	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];

	const vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	vec.set( 0, 37.0 );
	vec.set( 1, 45.0 );
	acc( vec ); // $ExpectType ndarray | null
}

// The compiler throws an error if the returned accumulator function is provided an argument which is not an ndarray...
{
	const acc = incrcovmat( 2 );

	acc( 123 ); // $ExpectError
	acc( 'abc' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments (known means)...
{
	const buffer = new Float64Array( 2 );
	const shape = [ 2 ];
	const strides = [ 1 ];

	const means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );
	means.set( 0, 3.0 );
	means.set( 1, -5.5 );
	const acc = incrcovmat( 2, means );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
