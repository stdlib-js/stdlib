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
import scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
import gfindLastIndex = require( './index' );

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
	const fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	gfindLastIndex( [ x, fromIndex ], clbk ); // $ExpectType number
	gfindLastIndex( [ x, fromIndex ], clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gfindLastIndex( '10', clbk ); // $ExpectError
	gfindLastIndex( 10, clbk ); // $ExpectError
	gfindLastIndex( true, clbk ); // $ExpectError
	gfindLastIndex( false, clbk ); // $ExpectError
	gfindLastIndex( null, clbk ); // $ExpectError
	gfindLastIndex( undefined, clbk ); // $ExpectError
	gfindLastIndex( [], clbk ); // $ExpectError
	gfindLastIndex( {}, clbk ); // $ExpectError
	gfindLastIndex( ( x: number ): number => x, clbk ); // $ExpectError

	gfindLastIndex( '10', clbk, {} ); // $ExpectError
	gfindLastIndex( 10, clbk, {} ); // $ExpectError
	gfindLastIndex( true, clbk, {} ); // $ExpectError
	gfindLastIndex( false, clbk, {} ); // $ExpectError
	gfindLastIndex( null, clbk, {} ); // $ExpectError
	gfindLastIndex( undefined, clbk, {} ); // $ExpectError
	gfindLastIndex( [], clbk, {} ); // $ExpectError
	gfindLastIndex( {}, clbk, {} ); // $ExpectError
	gfindLastIndex( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	gfindLastIndex( [ x, fromIndex ], '10' ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], 10 ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], true ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], false ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], null ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], undefined ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], [] ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], {} ); // $ExpectError

	gfindLastIndex( [ x, fromIndex ], '10', {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], 10, {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], true, {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], false, {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], null, {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], undefined, {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], [], {} ); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	gfindLastIndex(); // $ExpectError
	gfindLastIndex( [ x, fromIndex ], clbk, {}, {} ); // $ExpectError
}
