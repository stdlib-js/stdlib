#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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

# Define the path of the executable:
LIST_PKGS_INCLUDES ?= $(TOOLS_PKGS_DIR)/pkgs/includes/bin/cli

# Define the command flags:
LIST_PKGS_INCLUDES_FLAGS ?=

# Define the directory from which to search for packages:
LIST_PKGS_INCLUDES_DIR ?= $(SRC_DIR)


# RULES #

#/
# Prints a list of package `include` directories.
#
# @param {string} [LIST_PKGS_INCLUDES_DIR] - absolute path of the directory from which to search (default: source directory)
#
# @example
# make list-pkgs-includes
#
# @example
# make list-pkgs-includes LIST_PKGS_INCLUDES_DIR="$PWD/lib/node_modules/\@stdlib/blas"
#/
list-pkgs-includes: $(LIST_PKGS_INCLUDES) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(LIST_PKGS_INCLUDES)" $(LIST_PKGS_INCLUDES_FLAGS) "$(LIST_PKGS_INCLUDES_DIR)"

.PHONY: list-pkgs-includes
