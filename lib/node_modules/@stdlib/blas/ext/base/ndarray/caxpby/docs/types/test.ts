/*
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

/* eslint-disable space-in-parens */

import zeros = require( '@stdlib/ndarray/zeros' );
import Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
import caxpby = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex64'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'complex64'
	});
	const alpha = new Complex64Tensor0D( 2.0, 1.0 );
	const beta = new Complex64Tensor0D( 1.0, -1.0 );

	caxpby( [ x, y, alpha, beta ] ); // $ExpectType complex64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	caxpby( '10' ); // $ExpectError
	caxpby( 5 ); // $ExpectError
	caxpby( true ); // $ExpectError
	caxpby( false ); // $ExpectError
	caxpby( null ); // $ExpectError
	caxpby( undefined ); // $ExpectError
	caxpby( [] ); // $ExpectError
	caxpby( {} ); // $ExpectError
	caxpby( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex64'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'complex64'
	});
	const alpha = new Complex64Tensor0D( 2.0, 1.0 );
	const beta = new Complex64Tensor0D( 1.0, -1.0 );

	caxpby(); // $ExpectError
	caxpby( [ x, y, alpha, beta ], {} ); // $ExpectError
}
