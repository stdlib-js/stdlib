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

import doWhileEachRight = require( './index' );

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
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, isNotNaN ); // $ExpectType Collection<number>
	doWhileEachRight( [ -1, 1, 2 ], fcn, isNotNaN, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	doWhileEachRight( 2, fcn, isNotNaN ); // $ExpectError
	doWhileEachRight( false, fcn, isNotNaN ); // $ExpectError
	doWhileEachRight( true, fcn, isNotNaN ); // $ExpectError
	doWhileEachRight( {}, fcn, isNotNaN ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], 2, isNotNaN ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], false, isNotNaN ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], true, isNotNaN ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], 'abc', isNotNaN ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], {}, isNotNaN ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], [], isNotNaN ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, 2 ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, false ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, true ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, 'abc' ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, {} ); // $ExpectError
	doWhileEachRight( [ 0, 1, 1, NaN, 2 ], fcn, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	doWhileEachRight(); // $ExpectError
	doWhileEachRight( [ 1, 2, 3 ] ); // $ExpectError
	doWhileEachRight( [ 1, 2, 3 ], fcn ); // $ExpectError
	doWhileEachRight( [ 1, 2, 3 ], fcn, isNotNaN, {}, 3 ); // $ExpectError
}
