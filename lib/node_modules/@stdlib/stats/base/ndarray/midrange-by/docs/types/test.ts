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
import midrangeBy = require( './index' );

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

	midrangeBy( [ x ], clbk ); // $ExpectType number
	midrangeBy( [ x ], clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	midrangeBy( '10', clbk ); // $ExpectError
	midrangeBy( 10, clbk ); // $ExpectError
	midrangeBy( true, clbk ); // $ExpectError
	midrangeBy( false, clbk ); // $ExpectError
	midrangeBy( null, clbk ); // $ExpectError
	midrangeBy( undefined, clbk ); // $ExpectError
	midrangeBy( [], clbk ); // $ExpectError
	midrangeBy( {}, clbk ); // $ExpectError
	midrangeBy( ( x: number ): number => x, clbk ); // $ExpectError

	midrangeBy( '10', clbk, {} ); // $ExpectError
	midrangeBy( 10, clbk, {} ); // $ExpectError
	midrangeBy( true, clbk, {} ); // $ExpectError
	midrangeBy( false, clbk, {} ); // $ExpectError
	midrangeBy( null, clbk, {} ); // $ExpectError
	midrangeBy( undefined, clbk, {} ); // $ExpectError
	midrangeBy( [], clbk, {} ); // $ExpectError
	midrangeBy( {}, clbk, {} ); // $ExpectError
	midrangeBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	midrangeBy( [ x ], '10' ); // $ExpectError
	midrangeBy( [ x ], 10 ); // $ExpectError
	midrangeBy( [ x ], true ); // $ExpectError
	midrangeBy( [ x ], false ); // $ExpectError
	midrangeBy( [ x ], null ); // $ExpectError
	midrangeBy( [ x ], undefined ); // $ExpectError
	midrangeBy( [ x ], [] ); // $ExpectError
	midrangeBy( [ x ], {} ); // $ExpectError

	midrangeBy( [ x ], '10', {} ); // $ExpectError
	midrangeBy( [ x ], 10, {} ); // $ExpectError
	midrangeBy( [ x ], true, {} ); // $ExpectError
	midrangeBy( [ x ], false, {} ); // $ExpectError
	midrangeBy( [ x ], null, {} ); // $ExpectError
	midrangeBy( [ x ], undefined, {} ); // $ExpectError
	midrangeBy( [ x ], [], {} ); // $ExpectError
	midrangeBy( [ x ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'generic'
	});

	midrangeBy(); // $ExpectError
	midrangeBy( [ x ], clbk, {}, {} ); // $ExpectError
}
