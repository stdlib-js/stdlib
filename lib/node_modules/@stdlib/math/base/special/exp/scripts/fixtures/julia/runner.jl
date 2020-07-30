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

import JSON

"""
    gen( x, filepath )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `filepath::AbstractString`: filepath of the output file

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> gen( x, \"./data.json\" );
```
"""
function gen( x, filepath )
	y = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		y[i] = exp( x[i] );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

x = range( -300, stop = 300, length = 10000 );
out = joinpath( dir, "data.json" );
gen( x, out );
