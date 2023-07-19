/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import enum2str = require( './index' );


// TESTS //

// The function returns a string or null...
{
	enum2str( 0 ); // $ExpectType string | null
}

// The compiler throws an error if not provided a number...
{
	enum2str( '10' ); // $ExpectError
	enum2str( true ); // $ExpectError
	enum2str( false ); // $ExpectError
	enum2str( null ); // $ExpectError
	enum2str( undefined ); // $ExpectError
	enum2str( [] ); // $ExpectError
	enum2str( {} ); // $ExpectError
	enum2str( ( x: number ): number => x ); // $ExpectError
}
