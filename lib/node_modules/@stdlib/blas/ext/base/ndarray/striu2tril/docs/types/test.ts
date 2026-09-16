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
import scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
import striu2tril = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	striu2tril( [ A, B, k ] ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	striu2tril( '10' ); // $ExpectError
	striu2tril( 10 ); // $ExpectError
	striu2tril( true ); // $ExpectError
	striu2tril( false ); // $ExpectError
	striu2tril( null ); // $ExpectError
	striu2tril( undefined ); // $ExpectError
	striu2tril( [] ); // $ExpectError
	striu2tril( {} ); // $ExpectError
	striu2tril( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	striu2tril(); // $ExpectError
	striu2tril( [ A, B, k ], {} ); // $ExpectError
}
