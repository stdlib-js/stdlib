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
import sxsa = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});

	sxsa( [ x, alpha ] ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	sxsa( '10' ); // $ExpectError
	sxsa( 5 ); // $ExpectError
	sxsa( true ); // $ExpectError
	sxsa( false ); // $ExpectError
	sxsa( null ); // $ExpectError
	sxsa( undefined ); // $ExpectError
	sxsa( [] ); // $ExpectError
	sxsa( {} ); // $ExpectError
	sxsa( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});

	sxsa(); // $ExpectError
	sxsa( [ x, alpha ], {} ); // $ExpectError
}
