/*
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

/* eslint-disable space-in-parens */

import zeros = require( '@stdlib/ndarray/zeros' );
import dztest2 = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float64'
	});

	dztest2( [ x, x, x, x, x, x, x, x ] ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	dztest2( '10' ); // $ExpectError
	dztest2( 10 ); // $ExpectError
	dztest2( true ); // $ExpectError
	dztest2( false ); // $ExpectError
	dztest2( null ); // $ExpectError
	dztest2( undefined ); // $ExpectError
	dztest2( [] ); // $ExpectError
	dztest2( {} ); // $ExpectError
	dztest2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float64'
	});

	dztest2(); // $ExpectError
	dztest2( [ x, x, x, x, x, x ], {} ); // $ExpectError
}
