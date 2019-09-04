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

import prepend = require( './index' );


// TESTS //

// The function returns a collection...
{
	prepend( [ 0, 0 ], [ 1, 1 ] ); // $ExpectType Collection
	prepend( [ false, true ], [ 0, 1 ] ); // $ExpectType Collection
	prepend( [ 'abc', 'abc' ], [ 0, 1 ] ); // $ExpectType Collection
	prepend( [ true, true ], [ false, false ] ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	prepend( true, [] ); // $ExpectError
	prepend( false, [] ); // $ExpectError
	prepend( 5, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	prepend( [], true ); // $ExpectError
	prepend( [], false ); // $ExpectError
	prepend( [], 5 ); // $ExpectError
}

// The compiler throws an error if the function is not provided two arguments...
{
	prepend(); // $ExpectError
	prepend( [ true, true ] ); // $ExpectError
	prepend( [ true, true ], [ true, false ], 3 ); // $ExpectError
}
