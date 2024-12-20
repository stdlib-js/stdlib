#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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

import Distributions: median, Kumaraswamy
import JSON

"""
	gen( a, b, name )

Generate fixture data and write to file.

# Arguments

* `a`: shape parameter a (must be positive)
* `b`: shape parameter b (must be positive)
* `name::AbstractString`: output filename

# Examples

``` julia
julia> a = rand( 1000 );
julia> b = rand( 1000 );
julia> gen( a, b, \"data.json\" );
```
"""
function gen( a, b, name )
	z = Array{Float64}( undef, length(a) );
	for i in eachindex(a)
		z[ i ] = median( Kumaraswamy( a[ i ], b[ i ] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("a", a),
		("b", b),
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
a = rand( 1000 );
b = rand( 1000 );
gen( a, b, "data.json" );
