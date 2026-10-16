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
import gcopyWithin = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const target = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	const start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	const end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});
	const w = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	gcopyWithin( [ x, target, start, end, w ] ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gcopyWithin( '10' ); // $ExpectError
	gcopyWithin( 10 ); // $ExpectError
	gcopyWithin( true ); // $ExpectError
	gcopyWithin( false ); // $ExpectError
	gcopyWithin( null ); // $ExpectError
	gcopyWithin( undefined ); // $ExpectError
	gcopyWithin( [] ); // $ExpectError
	gcopyWithin( {} ); // $ExpectError
	gcopyWithin( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const target = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	const start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	const end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});
	const w = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	gcopyWithin(); // $ExpectError
	gcopyWithin( [ x, target, start, end, w ], {} ); // $ExpectError
}
