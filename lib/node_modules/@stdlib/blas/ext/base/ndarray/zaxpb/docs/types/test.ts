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
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zaxpb = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex128'
	});
	const alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	const beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	zaxpb( [ x, alpha, beta ] ); // $ExpectType complex128ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	zaxpb( '10' ); // $ExpectError
	zaxpb( 5 ); // $ExpectError
	zaxpb( true ); // $ExpectError
	zaxpb( false ); // $ExpectError
	zaxpb( null ); // $ExpectError
	zaxpb( undefined ); // $ExpectError
	zaxpb( [] ); // $ExpectError
	zaxpb( {} ); // $ExpectError
	zaxpb( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex128'
	});
	const alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	const beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	zaxpb(); // $ExpectError
	zaxpb( [ x, alpha, beta ], {} ); // $ExpectError
}
