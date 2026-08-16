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
import gfirstIndexEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	gfirstIndexEqual( [ x, y ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gfirstIndexEqual( '10' ); // $ExpectError
	gfirstIndexEqual( 10 ); // $ExpectError
	gfirstIndexEqual( true ); // $ExpectError
	gfirstIndexEqual( false ); // $ExpectError
	gfirstIndexEqual( null ); // $ExpectError
	gfirstIndexEqual( undefined ); // $ExpectError
	gfirstIndexEqual( [] ); // $ExpectError
	gfirstIndexEqual( {} ); // $ExpectError
	gfirstIndexEqual( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const y = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	gfirstIndexEqual(); // $ExpectError
	gfirstIndexEqual( [ x, y ], {} ); // $ExpectError
}
