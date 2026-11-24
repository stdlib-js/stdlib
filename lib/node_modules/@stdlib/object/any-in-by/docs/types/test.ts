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

import anyInBy = require( './index' );

const obj = {
	'a': 1,
	'b': 2,
	'c': 3
};

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	anyInBy( obj, isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	anyInBy( obj, 2 ); // $ExpectError
	anyInBy( obj, false ); // $ExpectError
	anyInBy( obj, true ); // $ExpectError
	anyInBy( obj, 'abc' ); // $ExpectError
	anyInBy( obj, {} ); // $ExpectError
	anyInBy( obj, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	anyInBy(); // $ExpectError
	anyInBy( obj ); // $ExpectError
	anyInBy( obj, isPositive, {}, 3 ); // $ExpectError
}
