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
import broadcastScalar = require( '@stdlib/ndarray/broadcast-scalar' );
import gjoinBetween = require( './index' );


// TESTS //

// The function returns a string...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	const suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	const separators = broadcastScalar( ',', [ 9 ], {
		'dtype': 'generic'
	});

	gjoinBetween( [ x, prefix, suffix, separators ] ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gjoinBetween( '10' ); // $ExpectError
	gjoinBetween( 10 ); // $ExpectError
	gjoinBetween( true ); // $ExpectError
	gjoinBetween( false ); // $ExpectError
	gjoinBetween( null ); // $ExpectError
	gjoinBetween( undefined ); // $ExpectError
	gjoinBetween( [] ); // $ExpectError
	gjoinBetween( {} ); // $ExpectError
	gjoinBetween( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	const suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	const separators = zeros( [ 9 ], {
		'dtype': 'generic'
	});

	gjoinBetween(); // $ExpectError
	gjoinBetween( [ x, prefix, suffix, separators ], {} ); // $ExpectError
}
