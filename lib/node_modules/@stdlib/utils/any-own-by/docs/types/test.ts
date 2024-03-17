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

import anyOwnBy = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

const obj = {
	'a':-1,
	'b':2,
	'c':-3
};

// TESTS //

// The function returns a boolean...
{
	anyOwnBy( obj, isPositive ); // $ExpectType boolean
	anyOwnBy( obj, isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	anyOwnBy( 2, isPositive ); // $ExpectError
	anyOwnBy( false, isPositive ); // $ExpectError
	anyOwnBy( true, isPositive ); // $ExpectError
	anyOwnBy( [ 1, 2 ], isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	anyOwnBy( obj , 2 ); // $ExpectError
	anyOwnBy( obj , false ); // $ExpectError
	anyOwnBy( obj , true ); // $ExpectError
	anyOwnBy( obj , 'abc' ); // $ExpectError
	anyOwnBy( obj , {} ); // $ExpectError
	anyOwnBy( obj , [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	anyOwnBy(); // $ExpectError
	anyOwnBy( [ 1, 2, 3 ] ); // $ExpectError
	anyOwnBy( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}

