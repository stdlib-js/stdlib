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
julia> x = range( -10, stop = 10, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = besselj1.( x );

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

# Subnormal float32 values:
x = Float32.( range( 1.0e-40, stop = 1.0e-45, length = 5003 ) );
gen( x, "subnormal.json" );

# Positive tiny values:
x = Float32.( range( 1.0e-30, stop = 1.0e-38, length = 5003 ) );
gen( x, "tiny_positive.json" );

# Small(er) values:
x = Float32.( range( 0.0, stop = 0.8, length = 5003 ) );
gen( x, "smaller.json" );

# Positive small values:
x = Float32.( range( 0.8, stop = 3.0, length = 5003 ) );
gen( x, "small_positive.json" );

# Positive medium values:
x = Float32.( range( 3.0, stop = 20.0, length = 5003 ) );
gen( x, "medium_positive.json" );

# Large positive values:
x = Float32.( range( 20.0, stop = 50.0, length = 5003 ) );
gen( x, "large_positive.json" );

# Very large positive values:
x = Float32.( range( 50.0, stop = 500.0, length = 5003 ) );
gen( x, "very_large_positive.json" );

# Huge positive values:
x = Float32.( range( 1.0e30, stop = 3.4e38, length = 5003 ) );
gen( x, "huge_positive.json" );

# Negative small values:
x = Float32.( range( -0.8, stop = -3.0, length = 5003 ) );
gen( x, "small_negative.json" );

# The full gamut of positive magnitudes:
x = Float32.( [ 10.0^x for x in range( -38.0, stop = 38.0, length = 317 ) ] );
gen( x, "positive_gamut.json" );

# The full gamut of negative magnitudes:
x = Float32.( [ -(10.0^x) for x in range( -38.0, stop = 38.0, length = 317 ) ] );
gen( x, "negative_gamut.json" );
