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
	'alias': 'base.kernelBetainc',
	'path': '@stdlib/math/base/special/kernel-betainc',
	'value': require( '@stdlib/math/base/special/kernel-betainc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betainc'
	]
});

ns.push({
	'alias': 'base.kernelBetaincinv',
	'path': '@stdlib/math/base/special/kernel-betaincinv',
	'value': require( '@stdlib/math/base/special/kernel-betaincinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betaincinv'
	]
});

ns.push({
	'alias': 'base.kernelCos',
	'path': '@stdlib/math/base/special/kernel-cos',
	'value': require( '@stdlib/math/base/special/kernel-cos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/kernel-sin',
		'@stdlib/math/base/special/kernel-tan'
	]
});

ns.push({
	'alias': 'base.kernelLog1p',
	'path': '@stdlib/math/base/special/kernel-log1p',
	'value': require( '@stdlib/math/base/special/kernel-log1p' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log1p'
	]
});

ns.push({
	'alias': 'base.kernelSin',
	'path': '@stdlib/math/base/special/kernel-sin',
	'value': require( '@stdlib/math/base/special/kernel-sin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kernel-cos',
		'@stdlib/math/base/special/kernel-tan',
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.kernelTan',
	'path': '@stdlib/math/base/special/kernel-tan',
	'value': require( '@stdlib/math/base/special/kernel-tan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kernel-cos',
		'@stdlib/math/base/special/kernel-sin',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.kroneckerDelta',
	'path': '@stdlib/math/base/special/kronecker-delta',
	'value': require( '@stdlib/math/base/special/kronecker-delta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirac-delta'
	]
});

ns.push({
	'alias': 'base.kroneckerDeltaf',
	'path': '@stdlib/math/base/special/kronecker-deltaf',
	'value': require( '@stdlib/math/base/special/kronecker-deltaf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirac-deltaf',
		'@stdlib/math/base/special/kronecker-delta'
	]
});


// EXPORTS //

module.exports = ns;
