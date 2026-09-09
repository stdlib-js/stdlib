#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON
using SpecialFunctions

"""
	gen( domain, name )

Generate fixture data and write to file.

# Arguments

* `domain`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( 0.5f0, stop = 1.5f0, length = 3000 );
julia> gen( x, \"medium.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = Float32.( erfcinv.( Float64.( x ) ) );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("expected", y)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixture data for medium values:
x = range( 0.5f0, stop = 1.5f0, length = 3000 );
gen( x, "medium.json" );

# Generate fixture data for small values:
x = range( 0.25f0, stop = 0.5f0, length = 500 );
gen( x, "small.json" );

# Generate fixture data for smaller values:
x = range( 0.0002f0, stop = 0.25f0, length = 500 );
gen( x, "smaller.json" );

# Generate fixture data for tiny values (log-spaced):
x = Float32.( exp10.( range( -38, stop = log10( 0.0002 ), length = 500 ) ) );
gen( x, "tiny.json" );

# Generate fixture data for subnormal values (log-spaced):
x = Float32.( exp10.( range( -44, stop = -38, length = 500 ) ) );
gen( x, "subnormal.json" );

# Generate fixture data for large values:
x = range( 1.5f0, stop = 1.75f0, length = 500 );
gen( x, "large.json" );

# Generate fixture data for larger values:
x = range( 1.75f0, stop = 1.9998f0, length = 500 );
gen( x, "larger.json" );

# Generate fixture data for huge values (the stop value is the largest single-precision floating-point number less than two):
x = range( 1.9998f0, stop = 1.9999999f0, length = 500 );
gen( x, "huge.json" );
