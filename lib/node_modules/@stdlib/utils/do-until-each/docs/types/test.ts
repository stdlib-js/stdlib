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

import doUntilEach = require( './index' );

/**
* Dummy function.
*/
function fcn( v: any, index: number ): number {
	if ( v !== v ) {
		throw new Error( 'beep' );
	}
	return index;
}

/**
* Dummy function.
*/
function isNotNaN( v: number ): boolean {
	return ( v === v );
}


// TESTS //

// The function returns the input collection...
{
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, isNotNaN ); // $ExpectType Collection<number>
	doUntilEach( [ -1, 1, 2 ], fcn, isNotNaN, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	doUntilEach( 2, fcn, isNotNaN ); // $ExpectError
	doUntilEach( false, fcn, isNotNaN ); // $ExpectError
	doUntilEach( true, fcn, isNotNaN ); // $ExpectError
	doUntilEach( {}, fcn, isNotNaN ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	doUntilEach( [ 0, 1, 1, NaN, 2 ], 2, isNotNaN ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], false, isNotNaN ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], true, isNotNaN ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], 'abc', isNotNaN ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], {}, isNotNaN ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], [], isNotNaN ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, 2 ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, false ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, true ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, 'abc' ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, {} ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], fcn, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	doUntilEach(); // $ExpectError
	doUntilEach( [ 1, 2, 3 ] ); // $ExpectError
	doUntilEach( [ 1, 2, 3 ], fcn ); // $ExpectError
	doUntilEach( [ 1, 2, 3 ], fcn, isNotNaN, {}, 3 ); // $ExpectError
}
