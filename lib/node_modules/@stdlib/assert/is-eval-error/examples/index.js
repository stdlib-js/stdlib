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

var isEvalError = require( './../lib' );

var bool = isEvalError( new EvalError( 'eval error' ) );
console.log( bool );
// => true

bool = isEvalError( new Error( 'error' ) );
console.log( bool );
// => false

bool = isEvalError( new RangeError( 'range error' ) );
console.log( bool );
// => false

bool = isEvalError( new ReferenceError( 'reference error' ) );
console.log( bool );
// => false

bool = isEvalError( new SyntaxError( 'syntax error' ) );
console.log( bool );
// => false

bool = isEvalError( new TypeError( 'type error' ) );
console.log( bool );
// => false

bool = isEvalError( new URIError( 'URI error' ) );
console.log( bool );
// => false

bool = isEvalError( {} );
console.log( bool );
// => false

bool = isEvalError( null );
console.log( bool );
// => false
