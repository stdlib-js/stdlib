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
import dcartesianPower = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [ 4, 2 ], {
		'dtype': 'float64'
	});
	const k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	dcartesianPower( [ x, out, k ] ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	dcartesianPower( '10' ); // $ExpectError
	dcartesianPower( 10 ); // $ExpectError
	dcartesianPower( true ); // $ExpectError
	dcartesianPower( false ); // $ExpectError
	dcartesianPower( null ); // $ExpectError
	dcartesianPower( undefined ); // $ExpectError
	dcartesianPower( [] ); // $ExpectError
	dcartesianPower( {} ); // $ExpectError
	dcartesianPower( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [ 4, 2 ], {
		'dtype': 'float64'
	});
	const k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	dcartesianPower(); // $ExpectError
	dcartesianPower( [ x, out, k ], {} ); // $ExpectError
}
