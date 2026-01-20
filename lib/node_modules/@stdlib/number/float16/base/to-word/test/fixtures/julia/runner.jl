#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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

"""
	gen( x, name )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( x, name )
	y = Array{Any}( undef, length(x) );
	for i in eachindex(x)
		# Mimic implicit type promotion in JavaScript:
		y[i] = bitstring( convert( Float16, x[i] ) );
	end

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

# Positive normal values:
x = range( 0, stop = 1001, length = 500 );
gen( x, "positive_normal.json" );

# Negative normal values:
x = range( -1001, stop = 0, length = 500 );
gen( x, "negative_normal.json" );

# Positive small values:
x = range( 0, stop = 1, length = 500 );
gen( x, "positive_small.json" );

# Negative small values:
x = range( -1, stop = 0, length = 500 );
gen( x, "negative_small.json" );

# Positive tiny values:
x = range( 1e-4, stop = 1e-3, length = 500 );
gen( x, "positive_tiny.json" );

# Negative tiny values:
x = range( -1e-4, stop = -1e-3, length = 500 );
gen( x, "negative_tiny.json" );

# Positive subnormal values:
x = range( 1e-7, stop = 6e-5, length = 500 );
gen( x, "positive_subnormal.json" );

# Negative subnormal values:
x = range( -1e-7, stop = -6e-5, length = 500 );
gen( x, "negative_subnormal.json" );

# Large positive values:
x = range( 1e3, stop = 6.5e4, length = 500 );
gen( x, "positive_large.json" );

# Large negative values:
x = range( -1e3, stop = -6.5e4, length = 500 );
gen( x, "negative_large.json" );
