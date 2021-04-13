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

/* tslint:disable:no-invalid-this */
/* tslint:disable:expect */

import inherit = require( './index' );

/**
* Foo constructor.
*
* @returns instance
*/
function Foo() {
	return this;
}

/**
* Bar constructor.
*
* @returns instance
*/
function Bar() {
	Foo.call( this );
	return this;
}

// TESTS //

// The function returns a child constructor...
{
	inherit( Bar, Foo ); // $ExpectType any
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	inherit(); // $ExpectError
	inherit( Bar ); // $ExpectError
	inherit( Bar, Foo, {} ); // $ExpectError
}
