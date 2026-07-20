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
import rangeBy = require( './index' );

/**
* Callback function.
*
* @param value - ndarray element
* @returns result
*/
function clbk( value: any ): number {
	return value * 2.0;
}


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	rangeBy( [ x ], clbk ); // $ExpectType number
	rangeBy( [ x ], clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	rangeBy( '10', clbk ); // $ExpectError
	rangeBy( 10, clbk ); // $ExpectError
	rangeBy( true, clbk ); // $ExpectError
	rangeBy( false, clbk ); // $ExpectError
	rangeBy( null, clbk ); // $ExpectError
	rangeBy( undefined, clbk ); // $ExpectError
	rangeBy( [], clbk ); // $ExpectError
	rangeBy( {}, clbk ); // $ExpectError
	rangeBy( ( x: number ): number => x, clbk ); // $ExpectError

	rangeBy( '10', clbk, {} ); // $ExpectError
	rangeBy( 10, clbk, {} ); // $ExpectError
	rangeBy( true, clbk, {} ); // $ExpectError
	rangeBy( false, clbk, {} ); // $ExpectError
	rangeBy( null, clbk, {} ); // $ExpectError
	rangeBy( undefined, clbk, {} ); // $ExpectError
	rangeBy( [], clbk, {} ); // $ExpectError
	rangeBy( {}, clbk, {} ); // $ExpectError
	rangeBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	rangeBy( [ x ], '10' ); // $ExpectError
	rangeBy( [ x ], 10 ); // $ExpectError
	rangeBy( [ x ], true ); // $ExpectError
	rangeBy( [ x ], false ); // $ExpectError
	rangeBy( [ x ], null ); // $ExpectError
	rangeBy( [ x ], undefined ); // $ExpectError
	rangeBy( [ x ], [] ); // $ExpectError
	rangeBy( [ x ], {} ); // $ExpectError

	rangeBy( [ x ], '10', {} ); // $ExpectError
	rangeBy( [ x ], 10, {} ); // $ExpectError
	rangeBy( [ x ], true, {} ); // $ExpectError
	rangeBy( [ x ], false, {} ); // $ExpectError
	rangeBy( [ x ], null, {} ); // $ExpectError
	rangeBy( [ x ], undefined, {} ); // $ExpectError
	rangeBy( [ x ], [], {} ); // $ExpectError
	rangeBy( [ x ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	rangeBy(); // $ExpectError
	rangeBy( [ x ], clbk, {}, {} ); // $ExpectError
}
