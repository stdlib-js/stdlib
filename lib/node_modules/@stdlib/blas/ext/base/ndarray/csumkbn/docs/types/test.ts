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
import csumkbn = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex64'
	});

	csumkbn( [ x ] ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	csumkbn( '10' ); // $ExpectError
	csumkbn( 10 ); // $ExpectError
	csumkbn( true ); // $ExpectError
	csumkbn( false ); // $ExpectError
	csumkbn( null ); // $ExpectError
	csumkbn( undefined ); // $ExpectError
	csumkbn( [] ); // $ExpectError
	csumkbn( {} ); // $ExpectError
	csumkbn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'complex64'
	});

	csumkbn(); // $ExpectError
	csumkbn( [ x ], {} ); // $ExpectError
}
