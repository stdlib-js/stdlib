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

import whileEach = require( './index' );

const log = ( v: any, index: number ): void => {
	console.log( `${index}: ${v}` );
};

const isNotNaN = ( v: number ): boolean => {
	return ( v === v );
};

// TESTS //

// The function returns the input collection...
{
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, log ); // $ExpectType Collection
	whileEach( [ -1, 1, 2 ], isNotNaN, log, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	whileEach( 2, isNotNaN, log ); // $ExpectError
	whileEach( false, isNotNaN, log ); // $ExpectError
	whileEach( true, isNotNaN, log ); // $ExpectError
	whileEach( {}, isNotNaN, log ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	whileEach( [ 0, 1, 1, NaN, 2 ], 2, log ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], false, log ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], true, log ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], 'abc', log ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], {}, log ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], [], log ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, 2 ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, false ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, true ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, 'abc' ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, {} ); // $ExpectError
	whileEach( [ 0, 1, 1, NaN, 2 ], isNotNaN, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	whileEach(); // $ExpectError
	whileEach( [ 1, 2, 3 ] ); // $ExpectError
	whileEach( [ 1, 2, 3 ], isNotNaN ); // $ExpectError
	whileEach( [ 1, 2, 3 ], isNotNaN, log, {}, 3 ); // $ExpectError
}
