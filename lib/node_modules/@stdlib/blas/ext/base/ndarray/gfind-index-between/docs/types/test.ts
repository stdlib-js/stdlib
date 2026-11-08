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
import gfindIndexBetween = require( './index' );

/**
* Callback function.
*
* @param value - ndarray element
* @returns result
*/
function clbk( value: any ): boolean {
	return value % 2.0 === 0.0;
}


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const fromIndex = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	const toIndex = scalar2ndarray( 8, {
		'dtype': 'generic'
	});

	gfindIndexBetween( [ x, fromIndex, toIndex ], clbk ); // $ExpectType number
	gfindIndexBetween( [ x, fromIndex, toIndex ], clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gfindIndexBetween( '10', clbk ); // $ExpectError
	gfindIndexBetween( 10, clbk ); // $ExpectError
	gfindIndexBetween( true, clbk ); // $ExpectError
	gfindIndexBetween( false, clbk ); // $ExpectError
	gfindIndexBetween( null, clbk ); // $ExpectError
	gfindIndexBetween( undefined, clbk ); // $ExpectError
	gfindIndexBetween( [], clbk ); // $ExpectError
	gfindIndexBetween( {}, clbk ); // $ExpectError
	gfindIndexBetween( ( x: number ): number => x, clbk ); // $ExpectError

	gfindIndexBetween( '10', clbk, {} ); // $ExpectError
	gfindIndexBetween( 10, clbk, {} ); // $ExpectError
	gfindIndexBetween( true, clbk, {} ); // $ExpectError
	gfindIndexBetween( false, clbk, {} ); // $ExpectError
	gfindIndexBetween( null, clbk, {} ); // $ExpectError
	gfindIndexBetween( undefined, clbk, {} ); // $ExpectError
	gfindIndexBetween( [], clbk, {} ); // $ExpectError
	gfindIndexBetween( {}, clbk, {} ); // $ExpectError
	gfindIndexBetween( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const fromIndex = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	const toIndex = scalar2ndarray( 8, {
		'dtype': 'generic'
	});

	gfindIndexBetween( [ x, fromIndex, toIndex ], '10' ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], 10 ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], true ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], false ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], null ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], undefined ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], [] ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], {} ); // $ExpectError

	gfindIndexBetween( [ x, fromIndex, toIndex ], '10', {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], 10, {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], true, {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], false, {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], null, {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], undefined, {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], [], {} ); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const fromIndex = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	const toIndex = scalar2ndarray( 8, {
		'dtype': 'generic'
	});

	gfindIndexBetween(); // $ExpectError
	gfindIndexBetween( [ x, fromIndex, toIndex ], clbk, {}, {} ); // $ExpectError
}
