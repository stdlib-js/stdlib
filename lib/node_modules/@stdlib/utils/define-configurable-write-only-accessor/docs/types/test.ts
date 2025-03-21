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

import setConfigurableWriteOnlyAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setConfigurableWriteOnlyAccessor( {}, 'foo', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setConfigurableWriteOnlyAccessor( {}, true, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, false, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, null, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, undefined, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, [], ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, {}, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, ( x: number ): number => x, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid setter...
{
	setConfigurableWriteOnlyAccessor( {}, 'foo', '5' ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', 5 ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', true ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', false ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', null ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', undefined ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', [] ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setConfigurableWriteOnlyAccessor(); // $ExpectError
	setConfigurableWriteOnlyAccessor( {} ); // $ExpectError
	setConfigurableWriteOnlyAccessor( {}, 'foo' ); // $ExpectError
}
