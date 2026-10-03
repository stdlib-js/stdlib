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
import ctriu2tril = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'complex64'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'complex64'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	ctriu2tril( [ A, B, k ] ); // $ExpectType complex64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	ctriu2tril( '10' ); // $ExpectError
	ctriu2tril( 10 ); // $ExpectError
	ctriu2tril( true ); // $ExpectError
	ctriu2tril( false ); // $ExpectError
	ctriu2tril( null ); // $ExpectError
	ctriu2tril( undefined ); // $ExpectError
	ctriu2tril( [] ); // $ExpectError
	ctriu2tril( {} ); // $ExpectError
	ctriu2tril( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'complex64'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'complex64'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	ctriu2tril(); // $ExpectError
	ctriu2tril( [ A, B, k ], {} ); // $ExpectError
}
