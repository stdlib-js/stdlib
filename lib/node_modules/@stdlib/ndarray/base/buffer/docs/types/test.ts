/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import buffer = require( './index' );


// TESTS //

// The function returns an array, typed array, buffer, or null...
{
	buffer( 'int32', 20 ); // $ExpectType ArrayOrBufferOrTypedArray
	buffer( 'float32', 3 ); // $ExpectType ArrayOrBufferOrTypedArray
}

// The compiler throws an error if the function is provided a first argument which is not a recognized ndarray data type...
{
	buffer( 'abc', 3 );  // $ExpectError
	buffer( 123, 3 );  // $ExpectError
	buffer( true, 3 ); // $ExpectError
	buffer( false, 3 ); // $ExpectError
	buffer( {}, 3 ); // $ExpectError
	buffer( [], 3 ); // $ExpectError
	buffer( null, 3 ); // $ExpectError
	buffer( undefined, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	buffer( 'float64', 'abc' ); // $ExpectError
	buffer( 'float64', [] ); // $ExpectError
	buffer( 'float64', {} ); // $ExpectError
	buffer( 'float64', true ); // $ExpectError
	buffer( 'float64', false ); // $ExpectError
	buffer( 'float64', null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	buffer(); // $ExpectError
	buffer( 'int32' ); // $ExpectError
	buffer( 'int32', 3, 3 ); // $ExpectError
}
