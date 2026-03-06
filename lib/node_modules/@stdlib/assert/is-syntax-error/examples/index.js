/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

var isSyntaxError = require( './../lib' );

var bool = isSyntaxError( new SyntaxError( 'syntax error' ) );
console.log( bool );
// => true

bool = isSyntaxError( new Error( 'error' ) );
console.log( bool );
// => false

bool = isSyntaxError( new EvalError( 'eval error' ) );
console.log( bool );
// => false

bool = isSyntaxError( new ReferenceError( 'reference error' ) );
console.log( bool );
// => false

bool = isSyntaxError( new RangeError( 'range error' ) );
console.log( bool );
// => false

bool = isSyntaxError( new TypeError( 'type error' ) );
console.log( bool );
// => false

bool = isSyntaxError( new URIError( 'URI error' ) );
console.log( bool );
// => false

bool = isSyntaxError( {} );
console.log( bool );
// => false

bool = isSyntaxError( null );
console.log( bool );
// => false
