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
	'alias': 'base.strided.sabs',
	'path': '@stdlib/math/strided/special/sabs',
	'value': require( '@stdlib/math/strided/special/sabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'base.strided.sabs2',
	'path': '@stdlib/math/strided/special/sabs2',
	'value': require( '@stdlib/math/strided/special/sabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'base.strided.sapx',
	'path': '@stdlib/blas/ext/base/sapx',
	'value': require( '@stdlib/blas/ext/base/sapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/swapx'
	]
});

ns.push({
	'alias': 'base.strided.sapxsum',
	'path': '@stdlib/blas/ext/base/sapxsum',
	'value': require( '@stdlib/blas/ext/base/sapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn',
	'path': '@stdlib/blas/ext/base/sapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn2',
	'path': '@stdlib/blas/ext/base/sapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumors',
	'path': '@stdlib/blas/ext/base/sapxsumors',
	'value': require( '@stdlib/blas/ext/base/sapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumpw',
	'path': '@stdlib/blas/ext/base/sapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sasum',
	'path': '@stdlib/blas/base/sasum',
	'value': require( '@stdlib/blas/base/sasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/sasum'
	]
});

ns.push({
	'alias': 'base.strided.sasumpw',
	'path': '@stdlib/blas/ext/base/sasumpw',
	'value': require( '@stdlib/blas/ext/base/sasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/snanasumpw',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/sasumpw'
	]
});

ns.push({
	'alias': 'base.strided.saxpy',
	'path': '@stdlib/blas/base/saxpy',
	'value': require( '@stdlib/blas/base/saxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/saxpy'
	]
});

ns.push({
	'alias': 'base.strided.scbrt',
	'path': '@stdlib/math/strided/special/scbrt',
	'value': require( '@stdlib/math/strided/special/scbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.sceil',
	'path': '@stdlib/math/strided/special/sceil',
	'value': require( '@stdlib/math/strided/special/sceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/sceil2',
		'@stdlib/math/strided/special/sceil10',
		'@stdlib/math/strided/special/sceilb',
		'@stdlib/math/strided/special/sceiln',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.scopy',
	'path': '@stdlib/blas/base/scopy',
	'value': require( '@stdlib/blas/base/scopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/scopy'
	]
});

ns.push({
	'alias': 'base.strided.scumax',
	'path': '@stdlib/stats/strided/scumax',
	'value': require( '@stdlib/stats/strided/scumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/strided/scumin',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumax'
	]
});

ns.push({
	'alias': 'base.strided.scumaxabs',
	'path': '@stdlib/stats/strided/scumaxabs',
	'value': require( '@stdlib/stats/strided/scumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/strided/dcumaxabs',
		'@stdlib/stats/strided/scumax',
		'@stdlib/stats/strided/scuminabs',
		'@stdlib/stats/base/snancumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.scumin',
	'path': '@stdlib/stats/strided/scumin',
	'value': require( '@stdlib/stats/strided/scumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/strided/dcumin',
		'@stdlib/stats/strided/scumax',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumin'
	]
});

ns.push({
	'alias': 'base.strided.scuminabs',
	'path': '@stdlib/stats/strided/scuminabs',
	'value': require( '@stdlib/stats/strided/scuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/strided/dcuminabs',
		'@stdlib/stats/strided/scumaxabs',
		'@stdlib/stats/strided/scumin',
		'@stdlib/stats/base/snancuminabs'
	]
});

ns.push({
	'alias': 'base.strided.scusum',
	'path': '@stdlib/blas/ext/base/scusum',
	'value': require( '@stdlib/blas/ext/base/scusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusumpw',
		'@stdlib/blas/ext/base/snancusum'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn',
	'path': '@stdlib/blas/ext/base/scusumkbn',
	'value': require( '@stdlib/blas/ext/base/scusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn2',
		'@stdlib/blas/ext/base/snancusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn2',
	'path': '@stdlib/blas/ext/base/scusumkbn2',
	'value': require( '@stdlib/blas/ext/base/scusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn',
		'@stdlib/blas/ext/base/snancusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.scusumors',
	'path': '@stdlib/blas/ext/base/scusumors',
	'value': require( '@stdlib/blas/ext/base/scusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumors'
	]
});

ns.push({
	'alias': 'base.strided.scusumpw',
	'path': '@stdlib/blas/ext/base/scusumpw',
	'value': require( '@stdlib/blas/ext/base/scusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdeg2rad',
	'path': '@stdlib/math/strided/special/sdeg2rad',
	'value': require( '@stdlib/math/strided/special/sdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/srad2deg'
	]
});

ns.push({
	'alias': 'base.strided.sdot',
	'path': '@stdlib/blas/base/sdot',
	'value': require( '@stdlib/blas/base/sdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/sdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsum',
	'path': '@stdlib/blas/ext/base/sdsapxsum',
	'value': require( '@stdlib/blas/ext/base/sdsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/sdssum'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsumpw',
	'path': '@stdlib/blas/ext/base/sdsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sdsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/sdsapxsum',
		'@stdlib/blas/ext/base/sdssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdsdot',
	'path': '@stdlib/blas/base/sdsdot',
	'value': require( '@stdlib/blas/base/sdsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/sdsdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsmean',
	'path': '@stdlib/stats/strided/sdsmean',
	'value': require( '@stdlib/stats/strided/sdsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/strided/smean'
	]
});

ns.push({
	'alias': 'base.strided.sdsmeanors',
	'path': '@stdlib/stats/strided/sdsmeanors',
	'value': require( '@stdlib/stats/strided/sdsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/sdsmean',
		'@stdlib/stats/base/sdsnanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmean',
	'path': '@stdlib/stats/base/sdsnanmean',
	'value': require( '@stdlib/stats/base/sdsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/strided/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmeanors',
	'path': '@stdlib/stats/base/sdsnanmeanors',
	'value': require( '@stdlib/stats/base/sdsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/sdsmeanors',
		'@stdlib/stats/base/sdsnanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansum',
	'path': '@stdlib/blas/ext/base/sdsnansum',
	'value': require( '@stdlib/blas/ext/base/sdsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansumpw',
	'path': '@stdlib/blas/ext/base/sdsnansumpw',
	'value': require( '@stdlib/blas/ext/base/sdsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/sdssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdssum',
	'path': '@stdlib/blas/ext/base/sdssum',
	'value': require( '@stdlib/blas/ext/base/sdssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.sdssumpw',
	'path': '@stdlib/blas/ext/base/sdssumpw',
	'value': require( '@stdlib/blas/ext/base/sdssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/sdsnansumpw',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/base/gsumpw'
	]
});

ns.push({
	'alias': 'base.strided.sfill',
	'path': '@stdlib/blas/ext/base/sfill',
	'value': require( '@stdlib/blas/ext/base/sfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dfill',
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/sfill'
	]
});

ns.push({
	'alias': 'base.strided.sfloor',
	'path': '@stdlib/math/strided/special/sfloor',
	'value': require( '@stdlib/math/strided/special/sfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor2',
		'@stdlib/math/strided/special/sfloor10',
		'@stdlib/math/strided/special/sfloorb',
		'@stdlib/math/strided/special/sfloorn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.sinv',
	'path': '@stdlib/math/strided/special/sinv',
	'value': require( '@stdlib/math/strided/special/sinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/inv'
	]
});

ns.push({
	'alias': 'base.strided.smap',
	'path': '@stdlib/strided/base/smap',
	'value': require( '@stdlib/strided/base/smap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.smap2',
	'path': '@stdlib/strided/base/smap2',
	'value': require( '@stdlib/strided/base/smap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap2',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.smax',
	'path': '@stdlib/stats/strided/smax',
	'value': require( '@stdlib/stats/strided/smax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/strided/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.smaxabs',
	'path': '@stdlib/stats/strided/smaxabs',
	'value': require( '@stdlib/stats/strided/smaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/strided/maxabs',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/sminabs',
		'@stdlib/stats/strided/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.smaxabssorted',
	'path': '@stdlib/stats/strided/smaxabssorted',
	'value': require( '@stdlib/stats/strided/smaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/strided/smaxabs',
		'@stdlib/stats/strided/smaxsorted',
		'@stdlib/stats/base/sminabssorted',
		'@stdlib/stats/base/snanmaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.smaxsorted',
	'path': '@stdlib/stats/strided/smaxsorted',
	'value': require( '@stdlib/stats/strided/smaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxsorted',
		'@stdlib/stats/strided/maxsorted',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/sminsorted',
		'@stdlib/stats/base/snanmaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.smean',
	'path': '@stdlib/stats/strided/smean',
	'value': require( '@stdlib/stats/strided/smean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/strided/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn',
	'path': '@stdlib/stats/base/smeankbn',
	'value': require( '@stdlib/stats/base/smeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn',
		'@stdlib/stats/base/meankbn',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/snanmeankbn'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn2',
	'path': '@stdlib/stats/base/smeankbn2',
	'value': require( '@stdlib/stats/base/smeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn2',
		'@stdlib/stats/base/meankbn2',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/snanmeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.smeanli',
	'path': '@stdlib/stats/strided/smeanli',
	'value': require( '@stdlib/stats/strided/smeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/smeanlipw',
		'@stdlib/stats/base/snanmeanli'
	]
});

ns.push({
	'alias': 'base.strided.smeanlipw',
	'path': '@stdlib/stats/base/smeanlipw',
	'value': require( '@stdlib/stats/base/smeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/strided/smeanli',
		'@stdlib/stats/base/snanmeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.smeanors',
	'path': '@stdlib/stats/base/smeanors',
	'value': require( '@stdlib/stats/base/smeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/strided/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.smeanpn',
	'path': '@stdlib/stats/strided/smeanpn',
	'value': require( '@stdlib/stats/strided/smeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/strided/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.smeanpw',
	'path': '@stdlib/stats/strided/smeanpw',
	'value': require( '@stdlib/stats/strided/smeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.smeanwd',
	'path': '@stdlib/stats/strided/smeanwd',
	'value': require( '@stdlib/stats/strided/smeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/strided/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.smediansorted',
	'path': '@stdlib/stats/strided/smediansorted',
	'value': require( '@stdlib/stats/strided/smediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmediansorted',
		'@stdlib/stats/strided/mediansorted',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/smedian',
		'@stdlib/stats/base/snanmediansorted'
	]
});

ns.push({
	'alias': 'base.strided.smidrange',
	'path': '@stdlib/stats/strided/smidrange',
	'value': require( '@stdlib/stats/strided/smidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmidrange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/base/snanmidrange',
		'@stdlib/stats/strided/srange'
	]
});

ns.push({
	'alias': 'base.strided.smin',
	'path': '@stdlib/stats/strided/smin',
	'value': require( '@stdlib/stats/strided/smin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.sminabs',
	'path': '@stdlib/stats/strided/sminabs',
	'value': require( '@stdlib/stats/strided/sminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminabs',
		'@stdlib/stats/strided/minabs',
		'@stdlib/stats/strided/smaxabs',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/strided/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.sminsorted',
	'path': '@stdlib/stats/strided/sminsorted',
	'value': require( '@stdlib/stats/strided/sminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminsorted',
		'@stdlib/stats/strided/minsorted',
		'@stdlib/stats/strided/smaxsorted',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/base/snanminsorted'
	]
});

ns.push({
	'alias': 'base.strided.smskabs',
	'path': '@stdlib/math/strided/special/smskabs',
	'value': require( '@stdlib/math/strided/special/smskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/sabs',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'base.strided.smskabs2',
	'path': '@stdlib/math/strided/special/smskabs2',
	'value': require( '@stdlib/math/strided/special/smskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/sabs2',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'base.strided.smskcbrt',
	'path': '@stdlib/math/strided/special/smskcbrt',
	'value': require( '@stdlib/math/strided/special/smskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.smskceil',
	'path': '@stdlib/math/strided/special/smskceil',
	'value': require( '@stdlib/math/strided/special/smskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/smskceil2',
		'@stdlib/math/strided/special/smskceil10',
		'@stdlib/math/strided/special/smskceilb',
		'@stdlib/math/strided/special/smskceiln',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.smskdeg2rad',
	'path': '@stdlib/math/strided/special/smskdeg2rad',
	'value': require( '@stdlib/math/strided/special/smskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskdeg2rad',
		'@stdlib/math/strided/special/sdeg2rad',
		'@stdlib/math/strided/special/smskrad2deg'
	]
});

ns.push({
	'alias': 'base.strided.smskfloor',
	'path': '@stdlib/math/strided/special/smskfloor',
	'value': require( '@stdlib/math/strided/special/smskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor2',
		'@stdlib/math/strided/special/smskfloor10',
		'@stdlib/math/strided/special/smskfloorb',
		'@stdlib/math/strided/special/smskfloorn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.smskinv',
	'path': '@stdlib/math/strided/special/smskinv',
	'value': require( '@stdlib/math/strided/special/smskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/dmskinv',
		'@stdlib/math/strided/special/mskinv'
	]
});

ns.push({
	'alias': 'base.strided.smskmap',
	'path': '@stdlib/strided/base/smskmap',
	'value': require( '@stdlib/strided/base/smskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/smskmap2'
	]
});

ns.push({
	'alias': 'base.strided.smskmap2',
	'path': '@stdlib/strided/base/smskmap2',
	'value': require( '@stdlib/strided/base/smskmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap2',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/smap2',
		'@stdlib/strided/base/smskmap'
	]
});

ns.push({
	'alias': 'base.strided.smskmax',
	'path': '@stdlib/stats/strided/smskmax',
	'value': require( '@stdlib/stats/strided/smskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/smskmin',
		'@stdlib/stats/strided/snanmax',
		'@stdlib/stats/strided/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.smskmin',
	'path': '@stdlib/stats/strided/smskmin',
	'value': require( '@stdlib/stats/strided/smskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/strided/smskmax',
		'@stdlib/stats/strided/snanmin',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.smskramp',
	'path': '@stdlib/math/strided/special/smskramp',
	'value': require( '@stdlib/math/strided/special/smskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskheaviside',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'base.strided.smskrange',
	'path': '@stdlib/stats/strided/smskrange',
	'value': require( '@stdlib/stats/strided/smskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskrange',
		'@stdlib/stats/strided/mskrange',
		'@stdlib/stats/strided/smskmax',
		'@stdlib/stats/strided/smskmin',
		'@stdlib/stats/strided/snanrange',
		'@stdlib/stats/strided/srange'
	]
});

ns.push({
	'alias': 'base.strided.smskrsqrt',
	'path': '@stdlib/math/strided/special/smskrsqrt',
	'value': require( '@stdlib/math/strided/special/smskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smsksqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.smsksqrt',
	'path': '@stdlib/math/strided/special/smsksqrt',
	'value': require( '@stdlib/math/strided/special/smsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smskcbrt',
		'@stdlib/math/strided/special/smskrsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.smsktrunc',
	'path': '@stdlib/math/strided/special/smsktrunc',
	'value': require( '@stdlib/math/strided/special/smsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smsktrunc2',
		'@stdlib/math/strided/special/smsktrunc10',
		'@stdlib/math/strided/special/smsktruncb',
		'@stdlib/math/strided/special/smsktruncn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.snanmax',
	'path': '@stdlib/stats/strided/snanmax',
	'value': require( '@stdlib/stats/strided/snanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmaxabs',
	'path': '@stdlib/stats/strided/snanmaxabs',
	'value': require( '@stdlib/stats/strided/snanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmaxabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/strided/smaxabs',
		'@stdlib/stats/strided/snanmax',
		'@stdlib/stats/strided/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.snanmean',
	'path': '@stdlib/stats/base/snanmean',
	'value': require( '@stdlib/stats/base/snanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/smean',
		'@stdlib/stats/base/nanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanors',
	'path': '@stdlib/stats/strided/snanmeanors',
	'value': require( '@stdlib/stats/strided/snanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanors',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanpn',
	'path': '@stdlib/stats/strided/snanmeanpn',
	'value': require( '@stdlib/stats/strided/snanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanpn',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/strided/smeanpn',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanwd',
	'path': '@stdlib/stats/strided/snanmeanwd',
	'value': require( '@stdlib/stats/strided/snanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanwd',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/strided/smeanwd',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmin',
	'path': '@stdlib/stats/strided/snanmin',
	'value': require( '@stdlib/stats/strided/snanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/strided/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.snanminabs',
	'path': '@stdlib/stats/strided/snanminabs',
	'value': require( '@stdlib/stats/strided/snanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanminabs',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/strided/sminabs',
		'@stdlib/stats/strided/snanmaxabs',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmax',
	'path': '@stdlib/stats/strided/snanmskmax',
	'value': require( '@stdlib/stats/strided/snanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/strided/smskmax',
		'@stdlib/stats/strided/snanmax',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmin',
	'path': '@stdlib/stats/strided/snanmskmin',
	'value': require( '@stdlib/stats/strided/snanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/strided/smskmin',
		'@stdlib/stats/strided/snanmin',
		'@stdlib/stats/strided/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.snanmskrange',
	'path': '@stdlib/stats/strided/snanmskrange',
	'value': require( '@stdlib/stats/strided/snanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskrange',
		'@stdlib/stats/base/nanmskrange',
		'@stdlib/stats/strided/smskrange',
		'@stdlib/stats/strided/snanrange',
		'@stdlib/stats/strided/snanmskmax',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanrange',
	'path': '@stdlib/stats/strided/snanrange',
	'value': require( '@stdlib/stats/strided/snanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/strided/snanmax',
		'@stdlib/stats/strided/snanmin',
		'@stdlib/stats/strided/srange'
	]
});

ns.push({
	'alias': 'base.strided.snanstdev',
	'path': '@stdlib/stats/base/snanstdev',
	'value': require( '@stdlib/stats/base/snanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/smskstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/sstdev'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevch',
	'path': '@stdlib/stats/base/snanstdevch',
	'value': require( '@stdlib/stats/base/snanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/strided/sstdevch'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevpn',
	'path': '@stdlib/stats/base/snanstdevpn',
	'value': require( '@stdlib/stats/base/snanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/strided/sstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevtk',
	'path': '@stdlib/stats/base/snanstdevtk',
	'value': require( '@stdlib/stats/base/snanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/strided/sstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevwd',
	'path': '@stdlib/stats/base/snanstdevwd',
	'value': require( '@stdlib/stats/base/snanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevyc',
	'path': '@stdlib/stats/base/snanstdevyc',
	'value': require( '@stdlib/stats/base/snanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/strided/sstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.snansum',
	'path': '@stdlib/blas/ext/base/snansum',
	'value': require( '@stdlib/blas/ext/base/snansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/stats/base/snanmean',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn',
	'path': '@stdlib/blas/ext/base/snansumkbn',
	'value': require( '@stdlib/blas/ext/base/snansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn2',
	'path': '@stdlib/blas/ext/base/snansumkbn2',
	'value': require( '@stdlib/blas/ext/base/snansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.snansumors',
	'path': '@stdlib/blas/ext/base/snansumors',
	'value': require( '@stdlib/blas/ext/base/snansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.snansumpw',
	'path': '@stdlib/blas/ext/base/snansumpw',
	'value': require( '@stdlib/blas/ext/base/snansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.snanvariance',
	'path': '@stdlib/stats/base/snanvariance',
	'value': require( '@stdlib/stats/base/snanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/smskvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancech',
	'path': '@stdlib/stats/base/snanvariancech',
	'value': require( '@stdlib/stats/base/snanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancech',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancepn',
	'path': '@stdlib/stats/base/snanvariancepn',
	'value': require( '@stdlib/stats/base/snanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancepn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancetk',
	'path': '@stdlib/stats/base/snanvariancetk',
	'value': require( '@stdlib/stats/base/snanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancetk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancewd',
	'path': '@stdlib/stats/base/snanvariancewd',
	'value': require( '@stdlib/stats/base/snanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancewd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.snanvarianceyc',
	'path': '@stdlib/stats/base/snanvarianceyc',
	'value': require( '@stdlib/stats/base/snanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvarianceyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.snrm2',
	'path': '@stdlib/blas/base/snrm2',
	'value': require( '@stdlib/blas/base/snrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dnrm2',
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/snrm2'
	]
});

ns.push({
	'alias': 'base.strided.sramp',
	'path': '@stdlib/math/strided/special/sramp',
	'value': require( '@stdlib/math/strided/special/sramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sheaviside'
	]
});

ns.push({
	'alias': 'base.strided.srange',
	'path': '@stdlib/stats/strided/srange',
	'value': require( '@stdlib/stats/strided/srange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/drange',
		'@stdlib/stats/strided/smax',
		'@stdlib/stats/strided/smin',
		'@stdlib/stats/strided/snanrange',
		'@stdlib/stats/base/range'
	]
});

ns.push({
	'alias': 'base.strided.srev',
	'path': '@stdlib/blas/ext/base/srev',
	'value': require( '@stdlib/blas/ext/base/srev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/drev',
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/srev'
	]
});

ns.push({
	'alias': 'base.strided.srsqrt',
	'path': '@stdlib/math/strided/special/srsqrt',
	'value': require( '@stdlib/math/strided/special/srsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.sscal',
	'path': '@stdlib/blas/base/sscal',
	'value': require( '@stdlib/blas/base/sscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/dscal',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/sscal'
	]
});

ns.push({
	'alias': 'base.strided.ssort2hp',
	'path': '@stdlib/blas/ext/base/ssort2hp',
	'value': require( '@stdlib/blas/ext/base/ssort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.ssort2ins',
	'path': '@stdlib/blas/ext/base/ssort2ins',
	'value': require( '@stdlib/blas/ext/base/ssort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.ssort2sh',
	'path': '@stdlib/blas/ext/base/ssort2sh',
	'value': require( '@stdlib/blas/ext/base/ssort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.ssorthp',
	'path': '@stdlib/blas/ext/base/ssorthp',
	'value': require( '@stdlib/blas/ext/base/ssorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.ssortins',
	'path': '@stdlib/blas/ext/base/ssortins',
	'value': require( '@stdlib/blas/ext/base/ssortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.ssortsh',
	'path': '@stdlib/blas/ext/base/ssortsh',
	'value': require( '@stdlib/blas/ext/base/ssortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.ssqrt',
	'path': '@stdlib/math/strided/special/ssqrt',
	'value': require( '@stdlib/math/strided/special/ssqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.sstdev',
	'path': '@stdlib/stats/strided/sstdev',
	'value': require( '@stdlib/stats/strided/sstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/sstdevm',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.sstdevch',
	'path': '@stdlib/stats/strided/sstdevch',
	'value': require( '@stdlib/stats/strided/sstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevch',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdevch',
		'@stdlib/stats/strided/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.sstdevpn',
	'path': '@stdlib/stats/strided/sstdevpn',
	'value': require( '@stdlib/stats/strided/sstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/sstdevmpn',
		'@stdlib/stats/base/stdevpn',
		'@stdlib/stats/strided/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.sstdevtk',
	'path': '@stdlib/stats/strided/sstdevtk',
	'value': require( '@stdlib/stats/strided/sstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevtk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdevtk',
		'@stdlib/stats/strided/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.sstdevwd',
	'path': '@stdlib/stats/base/sstdevwd',
	'value': require( '@stdlib/stats/base/sstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevwd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdevwd',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.sstdevyc',
	'path': '@stdlib/stats/strided/sstdevyc',
	'value': require( '@stdlib/stats/strided/sstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdevyc',
		'@stdlib/stats/strided/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.ssum',
	'path': '@stdlib/blas/ext/base/ssum',
	'value': require( '@stdlib/blas/ext/base/ssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sasum',
		'@stdlib/stats/strided/smean',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn',
	'path': '@stdlib/blas/ext/base/ssumkbn',
	'value': require( '@stdlib/blas/ext/base/ssumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn2',
	'path': '@stdlib/blas/ext/base/ssumkbn2',
	'value': require( '@stdlib/blas/ext/base/ssumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumors',
	'path': '@stdlib/blas/ext/base/ssumors',
	'value': require( '@stdlib/blas/ext/base/ssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumpw',
	'path': '@stdlib/blas/ext/base/ssumpw',
	'value': require( '@stdlib/blas/ext/base/ssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sswap',
	'path': '@stdlib/blas/base/sswap',
	'value': require( '@stdlib/blas/base/sswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/sswap'
	]
});

ns.push({
	'alias': 'base.strided.stdev',
	'path': '@stdlib/stats/base/stdev',
	'value': require( '@stdlib/stats/base/stdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdevm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.stdevch',
	'path': '@stdlib/stats/base/stdevch',
	'value': require( '@stdlib/stats/base/stdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/strided/sstdevch',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.stdevpn',
	'path': '@stdlib/stats/base/stdevpn',
	'value': require( '@stdlib/stats/base/stdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/strided/sstdevpn',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/stdevmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.stdevtk',
	'path': '@stdlib/stats/base/stdevtk',
	'value': require( '@stdlib/stats/base/stdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/strided/sstdevtk',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.stdevwd',
	'path': '@stdlib/stats/base/stdevwd',
	'value': require( '@stdlib/stats/base/stdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.stdevyc',
	'path': '@stdlib/stats/base/stdevyc',
	'value': require( '@stdlib/stats/base/stdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/strided/sstdevyc',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.strunc',
	'path': '@stdlib/math/strided/special/strunc',
	'value': require( '@stdlib/math/strided/special/strunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/strunc2',
		'@stdlib/math/strided/special/strunc10',
		'@stdlib/math/strided/special/struncb',
		'@stdlib/math/strided/special/struncn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/trunc'
	]
});

ns.push({
	'alias': 'base.strided.svariance',
	'path': '@stdlib/stats/base/svariance',
	'value': require( '@stdlib/stats/base/svariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.svariancech',
	'path': '@stdlib/stats/strided/svariancech',
	'value': require( '@stdlib/stats/strided/svariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancech',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/strided/sstdevch',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.svariancepn',
	'path': '@stdlib/stats/strided/svariancepn',
	'value': require( '@stdlib/stats/strided/svariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancepn',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/strided/sstdevpn',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.svariancetk',
	'path': '@stdlib/stats/strided/svariancetk',
	'value': require( '@stdlib/stats/strided/svariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancetk',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/strided/sstdevtk',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.svariancewd',
	'path': '@stdlib/stats/base/svariancewd',
	'value': require( '@stdlib/stats/base/svariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancewd',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.svarianceyc',
	'path': '@stdlib/stats/strided/svarianceyc',
	'value': require( '@stdlib/stats/strided/svarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvarianceyc',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/strided/sstdevyc',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/varianceyc'
	]
});


// EXPORTS //

module.exports = ns;
