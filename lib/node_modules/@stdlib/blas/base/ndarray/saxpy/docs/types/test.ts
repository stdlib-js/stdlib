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
import saxpy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const alpha = zeros( [], {
		'dtype': 'float32'
	});

	saxpy( [ x, y, alpha ] ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	saxpy( '10' ); // $ExpectError
	saxpy( 10 ); // $ExpectError
	saxpy( true ); // $ExpectError
	saxpy( false ); // $ExpectError
	saxpy( null ); // $ExpectError
	saxpy( undefined ); // $ExpectError
	saxpy( [] ); // $ExpectError
	saxpy( {} ); // $ExpectError
	saxpy( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const alpha = zeros( [], {
		'dtype': 'float32'
	});

	saxpy(); // $ExpectError
	saxpy( [ x, y, alpha ], {} ); // $ExpectError
}
