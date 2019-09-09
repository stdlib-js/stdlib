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

import untilEach = require( './index' );

const log = ( v: any, index: number ): void => {
	console.log( `${index}: ${v}` );
};

const isNotNaN = ( v: number ): boolean => {
	return ( v === v );
};

// TESTS //

// The function returns the input collection...
{
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, log ); // $ExpectType Collection
	untilEach( [ -1, 1, 2 ], isNotNaN, log, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	untilEach( 2, isNotNaN, log ); // $ExpectError
	untilEach( false, isNotNaN, log ); // $ExpectError
	untilEach( true, isNotNaN, log ); // $ExpectError
	untilEach( {}, isNotNaN, log ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	untilEach( [ 0, 1, 1, NaN, 2 ], 2, log ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], false, log ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], true, log ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], 'abc', log ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], {}, log ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], [], log ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, 2 ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, false ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, true ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, 'abc' ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, {} ); // $ExpectError
	untilEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	untilEach(); // $ExpectError
	untilEach( [ 1, 2, 3 ] ); // $ExpectError
	untilEach( [ 1, 2, 3 ], isNotNaN ); // $ExpectError
	untilEach( [ 1, 2, 3 ], isNotNaN, log, {}, 3 ); // $ExpectError
}
