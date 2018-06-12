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

var hasGeneratorsSupport = require( '@stdlib/assert/has-generator-support' );
var evil = require( '@stdlib/utils/eval' );
var isGeneratorObject = require( './../lib' );

function createGenerator() {
	var str = '(function () {';
	str += 'function* generator() {';
	str += '  while ( true ) {';
	str += '    yield 1.0;';
	str += '  }';
	str += '}';
	str += 'return generator;';
	str += '})()';
	return evil( str );
}

var generator;
if ( hasGeneratorsSupport() ) {
	generator = createGenerator();
	console.log( isGeneratorObject( generator() ) );
	// => true
}

console.log( isGeneratorObject( {} ) );
// => false

console.log( isGeneratorObject( [] ) );
// => false

console.log( isGeneratorObject( null ) );
// => false
