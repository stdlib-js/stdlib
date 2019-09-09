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

const log = ( v: any, index: number ): void => {
	console.log( `${index}: ${v}` );
};

const isNotNaN = ( v: number ): boolean => {
	return ( v === v );
};

// TESTS //

// The function returns the input collection...
{
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, isNotNaN ); // $ExpectType Collection
	doUntilEach( [ -1, 1, 2 ], log, isNotNaN, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	doUntilEach( 2, log, isNotNaN ); // $ExpectError
	doUntilEach( false, log, isNotNaN ); // $ExpectError
	doUntilEach( true, log, isNotNaN ); // $ExpectError
	doUntilEach( {}, log, isNotNaN ); // $ExpectError
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
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, 2 ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, false ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, true ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, 'abc' ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, {} ); // $ExpectError
	doUntilEach( [ 0, 1, 1, NaN, 2 ], log, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	doUntilEach(); // $ExpectError
	doUntilEach( [ 1, 2, 3 ] ); // $ExpectError
	doUntilEach( [ 1, 2, 3 ], log ); // $ExpectError
	doUntilEach( [ 1, 2, 3 ], log, isNotNaN, {}, 3 ); // $ExpectError
}
