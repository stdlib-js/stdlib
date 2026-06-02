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
import snanmskmin = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const mask = zeros( [ 10 ], {
		'dtype': 'uint8'
	});

	snanmskmin( [ x, mask ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	snanmskmin( '10' ); // $ExpectError
	snanmskmin( 10 ); // $ExpectError
	snanmskmin( true ); // $ExpectError
	snanmskmin( false ); // $ExpectError
	snanmskmin( null ); // $ExpectError
	snanmskmin( undefined ); // $ExpectError
	snanmskmin( [] ); // $ExpectError
	snanmskmin( {} ); // $ExpectError
	snanmskmin( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const mask = zeros( [ 10 ], {
		'dtype': 'uint8'
	});

	snanmskmin(); // $ExpectError
	snanmskmin( [ x, mask ], {} ); // $ExpectError
}
