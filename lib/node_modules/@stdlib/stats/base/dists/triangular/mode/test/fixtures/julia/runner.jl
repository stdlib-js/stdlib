#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

import Distributions: mode, TriangularDist
import JSON

"""
	gen( a, b, c, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `a`: minimum support
* `b`: maximum support
* `c`: mode
* `name::AbstractString`: output filename

# Examples

``` julia
julia> a = rand( 1000 ) .* 10.0;
julia> b = rand( 1000 ) .* 10.0;
julia> c = a .+ ( b .- a ) .* rand();
julia> gen( a, b, c, \"data.json\" );
```
"""
function gen( a, b, c, name )
	z = Array{Float64}( undef, length(a) );
	for i in eachindex(a)
		z[ i ] = mode( TriangularDist( a[i], b[i], c[i] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("a", a),
		("b", b),
		("c", c),
		("expected", z)
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

# Generate fixtures:
a = rand( 500 ) .* 10.0;
b = ( rand( 500 ) .* 10.0 ) .+ a;
c = a .+ ( b .- a ) .* rand();
gen( a, b, c, "data.json" );

