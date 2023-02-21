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
	'alias': 'base.strided.binary',
	'path': '@stdlib/strided/base/binary',
	'value': require( '@stdlib/strided/base/binary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap2',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/smap2',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.binaryDtypeSignatures',
	'path': '@stdlib/strided/base/binary-dtype-signatures',
	'value': require( '@stdlib/strided/base/binary-dtype-signatures' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary-signature-callbacks'
	]
});

ns.push({
	'alias': 'base.strided.binarySignatureCallbacks',
	'path': '@stdlib/strided/base/binary-signature-callbacks',
	'value': require( '@stdlib/strided/base/binary-signature-callbacks' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary-dtype-signatures'
	]
});


// EXPORTS //

module.exports = ns;
