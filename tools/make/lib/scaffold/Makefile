#/
# @license Apache-2.0
#
# Copyright (c) 2022 The Stdlib Authors.
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
#/

# VARIABLES #

# Define the script to be executed:
SCAFFOLD_SCRIPT ?= $(TOOLS_PKGS_DIR)/scaffold/scripts/scaffold_ai.sh


# RULES #

#/
# Scaffolds required files for a new or existing package.
#
# ## Notes
#
# -   The package directory has to exist and must contain at least the package's `README.md` file for the command to work.
#
# @param {string} SCAFFOLD_PKG - package to scaffold (e.g., `math/base/special/sin`)
# @param {string} SCAFFOLD_API_KEY - API key for accessing the stdlib scaffolding service
#
# @example
# make scaffold SCAFFOLD_PKG=math/base/special/sin
#/
scaffold:
	$(QUIET) $(SCAFFOLD_API_KEY) $(SCAFFOLD_SCRIPT) $(SCAFFOLD_PKG)

.PHONY: scaffold
