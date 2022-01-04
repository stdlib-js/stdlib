/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import arraylike2object = require( './index' );


// TESTS //

// The function returns an array object...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];
	arraylike2object( x ); // $ExpectType ArrayObject
}

// The compiler throws an error if the function is not provided an array-like object...
{
	arraylike2object( 123 ); // $ExpectError
	arraylike2object( true ); // $ExpectError
	arraylike2object( false ); // $ExpectError
	arraylike2object( null ); // $ExpectError
	arraylike2object( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];
	arraylike2object(); // $ExpectError
	arraylike2object( x, 5 ); // $ExpectError
}
