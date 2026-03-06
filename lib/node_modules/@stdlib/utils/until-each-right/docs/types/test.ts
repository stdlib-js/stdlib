/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import untilEachRight = require( './index' );

/**
* Test function.
*
* @param v - value
* @param index - index
*/
function fcn( v: number, index: number ): void {
	if ( v !== v ) {
		throw new Error( 'beep' );
	}
	if ( index !== index ) {
		throw new Error( 'beep' );
	}
}

/**
* Test function.
*
* @param v - value
* @returns result
*/
function isnan( v: number ): boolean {
	return ( v !== v );
}


// TESTS //

// The function returns the input collection...
{
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, fcn ); // $ExpectType Collection<number>
	untilEachRight( [ -1, 1, 2 ], isnan, fcn, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	untilEachRight( 2, isnan, fcn ); // $ExpectError
	untilEachRight( false, isnan, fcn ); // $ExpectError
	untilEachRight( true, isnan, fcn ); // $ExpectError
	untilEachRight( {}, isnan, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	untilEachRight( [ 0, 1, 1, NaN, 2 ], 2, fcn ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], false, fcn ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], true, fcn ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], 'abc', fcn ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], {}, fcn ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], [], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, 2 ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, false ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, true ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, 'abc' ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, {} ); // $ExpectError
	untilEachRight( [ 0, 1, 1, NaN, 2 ], isnan, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	untilEachRight(); // $ExpectError
	untilEachRight( [ 1, 2, 3 ] ); // $ExpectError
	untilEachRight( [ 1, 2, 3 ], isnan ); // $ExpectError
	untilEachRight( [ 1, 2, 3 ], isnan, fcn, {}, 3 ); // $ExpectError
}
