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

import mapFun = require( './index' );

/**
* Identity function.
*/
function identity( x: any ): any {
	return x;
}


// TESTS //

// The function return an array of values...
{
	mapFun( identity, 5 ); // $ExpectType any[]
	mapFun( identity, 5, {} ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	mapFun( 'abc', 5 ); // $ExpectError
	mapFun( 5, 5 ); // $ExpectError
	mapFun( true, 5 ); // $ExpectError
	mapFun( false, 5 ); // $ExpectError
	mapFun( [], 5 ); // $ExpectError
	mapFun( {}, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	mapFun( identity, 'abc' ); // $ExpectError
	mapFun( identity, identity ); // $ExpectError
	mapFun( identity, true ); // $ExpectError
	mapFun( identity, false ); // $ExpectError
	mapFun( identity, [] ); // $ExpectError
	mapFun( identity, {} ); // $ExpectError
}

// The function does not compile if provided fewer than two arguments...
{
	mapFun(); // $ExpectError
	mapFun( identity ); // $ExpectError
}
