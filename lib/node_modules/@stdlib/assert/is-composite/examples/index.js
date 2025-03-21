/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number/ctor' );
var isComposite = require( './../lib' );

console.log( isComposite( 4.0 ) );
// => true

console.log( isComposite( new Number( 4.0 ) ) );
// => true

console.log( isComposite( 10.0 ) );
// => true

console.log( isComposite( 7.0 ) );
// => false

console.log( isComposite( 3.14 ) );
// => false

console.log( isComposite( -4.0 ) );
// => false

console.log( isComposite( NaN ) );
// => false

console.log( isComposite( '0.5' ) );
// => false

console.log( isComposite( null ) );
// => false
