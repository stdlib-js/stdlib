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

import defaults = require( './index' );


// TESTS //

// The function returns an object...
{
	defaults(); // $ExpectType Defaults
}

// The compiler throws an error if the function is provided any arguments...
{
	defaults( 9 ); // $ExpectError
}

// Attached to the function is a `get` method for returning a default setting...
{
	defaults.get( 'order' ); // $ExpectType any
}

// The compiler throws an error if the method is not provided a string...
{
	defaults.get( 5 ); // $ExpectError
	defaults.get( true ); // $ExpectError
	defaults.get( false ); // $ExpectError
	defaults.get( null ); // $ExpectError
	defaults.get( [] ); // $ExpectError
	defaults.get( {} ); // $ExpectError
	defaults.get( ( x: number ) => x ); // $ExpectError
}

// The compiler throws an error if the method is provided an unsupported number of arguments...
{
	defaults.get(); // $ExpectError
	defaults.get( 'foo', 5 ); // $ExpectError
}
