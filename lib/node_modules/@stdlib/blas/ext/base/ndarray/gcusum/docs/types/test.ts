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
import gcusum = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x1 = zeros( [ 10 ], {
		'dtype': 'float64'
	});
	const y1 = zeros( [ 10 ], {
		'dtype': 'float64'
	});
	const initial1 = zeros( [], {
		'dtype': 'float64'
	});

	gcusum( [ x1, y1, initial1 ] ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gcusum( '10' ); // $ExpectError
	gcusum( 10 ); // $ExpectError
	gcusum( true ); // $ExpectError
	gcusum( false ); // $ExpectError
	gcusum( null ); // $ExpectError
	gcusum( undefined ); // $ExpectError
	gcusum( [] ); // $ExpectError
	gcusum( {} ); // $ExpectError
	gcusum( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'float64'
	});
	const initial = zeros( [], {
		'dtype': 'float64'
	});

	gcusum(); // $ExpectError
	gcusum( [ x, y, initial ], {} ); // $ExpectError
}
