/**
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

'use strict';

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.unary',
	'path': '@stdlib/strided/base/unary',
	'value': require( '@stdlib/strided/base/unary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/unary',
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/ternary'
	]
});

ns.push({
	'alias': 'base.strided.unaryDtypeSignatures',
	'path': '@stdlib/strided/base/unary-dtype-signatures',
	'value': require( '@stdlib/strided/base/unary-dtype-signatures' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/unary-signature-callbacks'
	]
});

ns.push({
	'alias': 'base.strided.unarySignatureCallbacks',
	'path': '@stdlib/strided/base/unary-signature-callbacks',
	'value': require( '@stdlib/strided/base/unary-signature-callbacks' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/unary-dtype-signatures'
	]
});


// EXPORTS //

module.exports = ns;
