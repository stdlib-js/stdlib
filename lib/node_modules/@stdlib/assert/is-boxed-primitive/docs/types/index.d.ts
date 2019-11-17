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

// TypeScript Version: 2.0

/**
* Tests if a value is a JavaScript boxed primitive.
*
* @param value - value to test
* @returns boolean indicating if a value is a JavaScript boxed primitive
*
* @example
* var bool = isBoxedPrimitive( new String( 'beep' ) );
* // returns true
*
* @example
* var bool = isBoxedPrimitive( new Number( 3.21 ) );
* // returns true
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
* var bool = isBoxedPrimitive( Object( Symbol( 'beep' ) ) );
* // returns true
*
* @example
* var bool = isBoxedPrimitive( true );
* // returns false
*
* @example
* var bool = isBoxedPrimitive( {} );
* // returns false
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
* var bool = isBoxedPrimitive( Symbol( 'beep' ) );
* // returns false
*/
declare function isBoxedPrimitive( value: any ): boolean;


// EXPORTS //

export = isBoxedPrimitive;
