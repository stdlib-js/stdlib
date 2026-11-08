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
import stril2triu = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	stril2triu( [ A, B, k ] ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	stril2triu( '10' ); // $ExpectError
	stril2triu( 10 ); // $ExpectError
	stril2triu( true ); // $ExpectError
	stril2triu( false ); // $ExpectError
	stril2triu( null ); // $ExpectError
	stril2triu( undefined ); // $ExpectError
	stril2triu( [] ); // $ExpectError
	stril2triu( {} ); // $ExpectError
	stril2triu( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const B = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});
	const k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	stril2triu(); // $ExpectError
	stril2triu( [ A, B, k ], {} ); // $ExpectError
}
