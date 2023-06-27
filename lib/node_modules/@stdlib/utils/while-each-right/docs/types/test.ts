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

import whileEachRight = require( './index' );

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
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, fcn ); // $ExpectType Collection<number>
	whileEachRight( [ -1, 1, 2 ], isnan, fcn, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	whileEachRight( 2, isnan, fcn ); // $ExpectError
	whileEachRight( false, isnan, fcn ); // $ExpectError
	whileEachRight( true, isnan, fcn ); // $ExpectError
	whileEachRight( {}, isnan, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	whileEachRight( [ 0, 1, 1, NaN, 2 ], 2, fcn ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], false, fcn ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], true, fcn ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], 'abc', fcn ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], {}, fcn ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], [], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, 2 ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, false ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, true ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, 'abc' ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, {} ); // $ExpectError
	whileEachRight( [ 0, 1, 1, NaN, 2 ], isnan, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	whileEachRight(); // $ExpectError
	whileEachRight( [ 1, 2, 3 ] ); // $ExpectError
	whileEachRight( [ 1, 2, 3 ], isnan ); // $ExpectError
	whileEachRight( [ 1, 2, 3 ], isnan, fcn, {}, 3 ); // $ExpectError
}
