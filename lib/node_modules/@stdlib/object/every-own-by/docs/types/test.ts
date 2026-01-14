/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import everyOwnBy = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

var obj = {
	'a':1,
	'b':2,
	'c':3
};

// The function returns a boolean...
{
	everyOwnBy( obj, isPositive ); // $ExpectType boolean
	everyOwnBy( obj, isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	everyOwnBy( 2, isPositive ); // $ExpectError
	everyOwnBy( false, isPositive ); // $ExpectError
	everyOwnBy( true, isPositive ); // $ExpectError
	everyOwnBy( [ 1, 2 ], isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	everyOwnBy( obj , 2 ); // $ExpectError
	everyOwnBy( obj , false ); // $ExpectError
	everyOwnBy( obj , true ); // $ExpectError
	everyOwnBy( obj , 'abc' ); // $ExpectError
	everyOwnBy( obj , {} ); // $ExpectError
	everyOwnBy( obj , [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	everyOwnBy(); // $ExpectError
	everyOwnBy( [ 1, 2, 3 ] ); // $ExpectError
	everyOwnBy( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}
