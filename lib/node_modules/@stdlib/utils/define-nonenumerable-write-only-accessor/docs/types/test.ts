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

import setNonEnumerableWriteOnlyAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setNonEnumerableWriteOnlyAccessor( {}, true, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, false, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, null, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, undefined, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, [], ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, {}, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, ( x: number ): number => x, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid setter...
{
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', '5' ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', 5 ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', true ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', false ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', null ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', undefined ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', [] ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setNonEnumerableWriteOnlyAccessor(); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {} ); // $ExpectError
	setNonEnumerableWriteOnlyAccessor( {}, 'foo' ); // $ExpectError
}
