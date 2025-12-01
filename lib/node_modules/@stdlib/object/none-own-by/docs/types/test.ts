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

import noneOwnBy = require( './index' );

const isUnderAge = ( v: number ): boolean => {
	return ( v < 18 );
};

// TESTS //

const obj = {
	'a': 10,
	'b': 12,
	'c': 22
};

// The function returns a boolean...
{
	noneOwnBy( obj, isUnderAge ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	noneOwnBy( 2, isUnderAge ); // $ExpectError
	noneOwnBy( false, isUnderAge ); // $ExpectError
	noneOwnBy( true, isUnderAge ); // $ExpectError
	noneOwnBy( [ 1, 2 ], isUnderAge ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	noneOwnBy( obj , 2 ); // $ExpectError
	noneOwnBy( obj , false ); // $ExpectError
	noneOwnBy( obj , true ); // $ExpectError
	noneOwnBy( obj , 'abc' ); // $ExpectError
	noneOwnBy( obj , {} ); // $ExpectError
	noneOwnBy( obj , [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	noneOwnBy(); // $ExpectError
	noneOwnBy( [ 1, 2, 3 ] ); // $ExpectError
	noneOwnBy( [ 1, 2, 3 ], isUnderAge, {}, 3 ); // $ExpectError
}
