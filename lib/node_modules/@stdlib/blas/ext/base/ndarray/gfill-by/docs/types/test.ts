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
import gfillBy = require( './index' );

/**
* Callback function.
*
* @returns fill value
*/
function clbk(): number {
	return 5.0;
}


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	const end = scalar2ndarray( 10, {
		'dtype': 'generic'
	});

	gfillBy( [ x, start, end ], clbk ); // $ExpectType genericndarray<number>
	gfillBy( [ x, start, end ], clbk, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	gfillBy( '10', clbk ); // $ExpectError
	gfillBy( 10, clbk ); // $ExpectError
	gfillBy( true, clbk ); // $ExpectError
	gfillBy( false, clbk ); // $ExpectError
	gfillBy( null, clbk ); // $ExpectError
	gfillBy( undefined, clbk ); // $ExpectError
	gfillBy( [], clbk ); // $ExpectError
	gfillBy( {}, clbk ); // $ExpectError
	gfillBy( ( x: number ): number => x, clbk ); // $ExpectError

	gfillBy( '10', clbk, {} ); // $ExpectError
	gfillBy( 10, clbk, {} ); // $ExpectError
	gfillBy( true, clbk, {} ); // $ExpectError
	gfillBy( false, clbk, {} ); // $ExpectError
	gfillBy( null, clbk, {} ); // $ExpectError
	gfillBy( undefined, clbk, {} ); // $ExpectError
	gfillBy( [], clbk, {} ); // $ExpectError
	gfillBy( {}, clbk, {} ); // $ExpectError
	gfillBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	const end = scalar2ndarray( 10, {
		'dtype': 'generic'
	});

	gfillBy( [ x, start, end ], '10' ); // $ExpectError
	gfillBy( [ x, start, end ], 10 ); // $ExpectError
	gfillBy( [ x, start, end ], true ); // $ExpectError
	gfillBy( [ x, start, end ], false ); // $ExpectError
	gfillBy( [ x, start, end ], null ); // $ExpectError
	gfillBy( [ x, start, end ], undefined ); // $ExpectError
	gfillBy( [ x, start, end ], [] ); // $ExpectError
	gfillBy( [ x, start, end ], {} ); // $ExpectError

	gfillBy( [ x, start, end ], '10', {} ); // $ExpectError
	gfillBy( [ x, start, end ], 10, {} ); // $ExpectError
	gfillBy( [ x, start, end ], true, {} ); // $ExpectError
	gfillBy( [ x, start, end ], false, {} ); // $ExpectError
	gfillBy( [ x, start, end ], null, {} ); // $ExpectError
	gfillBy( [ x, start, end ], undefined, {} ); // $ExpectError
	gfillBy( [ x, start, end ], [], {} ); // $ExpectError
	gfillBy( [ x, start, end ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});
	const start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	const end = scalar2ndarray( 10, {
		'dtype': 'generic'
	});

	gfillBy(); // $ExpectError
	gfillBy( [ x, start, end ], clbk, {}, {} ); // $ExpectError
}
