/* eslint-disable max-lines */

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
	'alias': 'base.strided.gapx',
	'path': '@stdlib/blas/ext/base/gapx',
	'value': require( '@stdlib/blas/ext/base/gapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapx',
		'@stdlib/blas/ext/base/gwapx',
		'@stdlib/blas/ext/base/sapx'
	]
});

ns.push({
	'alias': 'base.strided.gapxsum',
	'path': '@stdlib/blas/ext/base/gapxsum',
	'value': require( '@stdlib/blas/ext/base/gapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumkbn',
	'path': '@stdlib/blas/ext/base/gapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/gapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/sapxsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumkbn2',
	'path': '@stdlib/blas/ext/base/gapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/gapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn2',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/sapxsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumors',
	'path': '@stdlib/blas/ext/base/gapxsumors',
	'value': require( '@stdlib/blas/ext/base/gapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumors',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/sapxsumors'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumpw',
	'path': '@stdlib/blas/ext/base/gapxsumpw',
	'value': require( '@stdlib/blas/ext/base/gapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.gasum',
	'path': '@stdlib/blas/base/gasum',
	'value': require( '@stdlib/blas/base/gasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/gasum'
	]
});

ns.push({
	'alias': 'base.strided.gasumpw',
	'path': '@stdlib/blas/ext/base/gasumpw',
	'value': require( '@stdlib/blas/ext/base/gasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/gnanasumpw',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/sasumpw',
		'@stdlib/blas/ext/gasumpw'
	]
});

ns.push({
	'alias': 'base.strided.gaxpy',
	'path': '@stdlib/blas/base/gaxpy',
	'value': require( '@stdlib/blas/base/gaxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/gaxpy'
	]
});

ns.push({
	'alias': 'base.strided.gcopy',
	'path': '@stdlib/blas/base/gcopy',
	'value': require( '@stdlib/blas/base/gcopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/gcopy'
	]
});

ns.push({
	'alias': 'base.strided.gcusum',
	'path': '@stdlib/blas/ext/base/gcusum',
	'value': require( '@stdlib/blas/ext/base/gcusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/gnancusum',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/gcusum'
	]
});

ns.push({
	'alias': 'base.strided.gcusumkbn',
	'path': '@stdlib/blas/ext/base/gcusumkbn',
	'value': require( '@stdlib/blas/ext/base/gcusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/gnancusumkbn',
		'@stdlib/blas/ext/base/scusumkbn',
		'@stdlib/blas/ext/gcusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gcusumkbn2',
	'path': '@stdlib/blas/ext/base/gcusumkbn2',
	'value': require( '@stdlib/blas/ext/base/gcusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn2',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/gnancusumkbn2',
		'@stdlib/blas/ext/base/scusumkbn2',
		'@stdlib/blas/ext/gcusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gcusumors',
	'path': '@stdlib/blas/ext/base/gcusumors',
	'value': require( '@stdlib/blas/ext/base/gcusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumors',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/gnancusumors',
		'@stdlib/blas/ext/base/scusumors',
		'@stdlib/blas/ext/gcusumors'
	]
});

ns.push({
	'alias': 'base.strided.gcusumpw',
	'path': '@stdlib/blas/ext/base/gcusumpw',
	'value': require( '@stdlib/blas/ext/base/gcusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gnancusumpw',
		'@stdlib/blas/ext/base/scusumpw',
		'@stdlib/blas/ext/gcusumpw'
	]
});

ns.push({
	'alias': 'base.strided.gdot',
	'path': '@stdlib/blas/base/gdot',
	'value': require( '@stdlib/blas/base/gdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/gdot'
	]
});

ns.push({
	'alias': 'base.strided.gfill',
	'path': '@stdlib/blas/ext/base/gfill',
	'value': require( '@stdlib/blas/ext/base/gfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dfill',
		'@stdlib/blas/ext/base/sfill',
		'@stdlib/blas/ext/gfill'
	]
});

ns.push({
	'alias': 'base.strided.gfillBy',
	'path': '@stdlib/blas/ext/base/gfill-by',
	'value': require( '@stdlib/blas/ext/base/gfill-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/gfill-by'
	]
});

ns.push({
	'alias': 'base.strided.gnannsumkbn',
	'path': '@stdlib/blas/ext/base/gnannsumkbn',
	'value': require( '@stdlib/blas/ext/base/gnannsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/gnannsum',
		'@stdlib/blas/ext/base/gnannsumkbn2',
		'@stdlib/blas/ext/base/gnannsumors',
		'@stdlib/blas/ext/base/gnannsumpw',
		'@stdlib/blas/ext/base/snannsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gnansum',
	'path': '@stdlib/blas/ext/base/gnansum',
	'value': require( '@stdlib/blas/ext/base/gnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/stats/base/nanmean'
	]
});

ns.push({
	'alias': 'base.strided.gnansumkbn',
	'path': '@stdlib/blas/ext/base/gnansumkbn',
	'value': require( '@stdlib/blas/ext/base/gnansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/snansumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gnansumkbn2',
	'path': '@stdlib/blas/ext/base/gnansumkbn2',
	'value': require( '@stdlib/blas/ext/base/gnansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gnansumors',
	'path': '@stdlib/blas/ext/base/gnansumors',
	'value': require( '@stdlib/blas/ext/base/gnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.gnansumpw',
	'path': '@stdlib/blas/ext/base/gnansumpw',
	'value': require( '@stdlib/blas/ext/base/gnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.gnrm2',
	'path': '@stdlib/blas/base/gnrm2',
	'value': require( '@stdlib/blas/base/gnrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dnrm2',
		'@stdlib/blas/base/snrm2',
		'@stdlib/blas/gnrm2'
	]
});

ns.push({
	'alias': 'base.strided.grev',
	'path': '@stdlib/blas/ext/base/grev',
	'value': require( '@stdlib/blas/ext/base/grev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/drev',
		'@stdlib/blas/ext/base/srev',
		'@stdlib/blas/ext/grev'
	]
});

ns.push({
	'alias': 'base.strided.gscal',
	'path': '@stdlib/blas/base/gscal',
	'value': require( '@stdlib/blas/base/gscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dscal',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/base/sscal',
		'@stdlib/blas/gscal'
	]
});

ns.push({
	'alias': 'base.strided.gsort2hp',
	'path': '@stdlib/blas/ext/base/gsort2hp',
	'value': require( '@stdlib/blas/ext/base/gsort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.gsort2ins',
	'path': '@stdlib/blas/ext/base/gsort2ins',
	'value': require( '@stdlib/blas/ext/base/gsort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.gsort2sh',
	'path': '@stdlib/blas/ext/base/gsort2sh',
	'value': require( '@stdlib/blas/ext/base/gsort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.gsorthp',
	'path': '@stdlib/blas/ext/base/gsorthp',
	'value': require( '@stdlib/blas/ext/base/gsorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.gsortins',
	'path': '@stdlib/blas/ext/base/gsortins',
	'value': require( '@stdlib/blas/ext/base/gsortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.gsortsh',
	'path': '@stdlib/blas/ext/base/gsortsh',
	'value': require( '@stdlib/blas/ext/base/gsortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.gsum',
	'path': '@stdlib/blas/ext/base/gsum',
	'value': require( '@stdlib/blas/ext/base/gsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gasum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/stats/base/mean'
	]
});

ns.push({
	'alias': 'base.strided.gsumkbn',
	'path': '@stdlib/blas/ext/base/gsumkbn',
	'value': require( '@stdlib/blas/ext/base/gsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gsumkbn2',
	'path': '@stdlib/blas/ext/base/gsumkbn2',
	'value': require( '@stdlib/blas/ext/base/gsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gsumors',
	'path': '@stdlib/blas/ext/base/gsumors',
	'value': require( '@stdlib/blas/ext/base/gsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.gsumpw',
	'path': '@stdlib/blas/ext/base/gsumpw',
	'value': require( '@stdlib/blas/ext/base/gsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.gswap',
	'path': '@stdlib/blas/base/gswap',
	'value': require( '@stdlib/blas/base/gswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/gswap'
	]
});


// EXPORTS //

module.exports = ns;
