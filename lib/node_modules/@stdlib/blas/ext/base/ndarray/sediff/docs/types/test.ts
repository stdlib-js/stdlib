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
import sediff = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const p = zeros( [ 1 ], {
		'dtype': 'float32'
	});
	const a = zeros( [ 1 ], {
		'dtype': 'float32'
	});
	const out = zeros( [ 10 ], {
		'dtype': 'float32'
	});

	sediff( [ x, p, a, out ] ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	sediff( '10' ); // $ExpectError
	sediff( 10 ); // $ExpectError
	sediff( true ); // $ExpectError
	sediff( false ); // $ExpectError
	sediff( null ); // $ExpectError
	sediff( undefined ); // $ExpectError
	sediff( [] ); // $ExpectError
	sediff( {} ); // $ExpectError
	sediff( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float32'
	});
	const p = zeros( [ 1 ], {
		'dtype': 'float32'
	});
	const a = zeros( [ 1 ], {
		'dtype': 'float32'
	});
	const out = zeros( [ 10 ], {
		'dtype': 'float32'
	});

	sediff(); // $ExpectError
	sediff( [ x, p, a, out ], {} ); // $ExpectError
}
