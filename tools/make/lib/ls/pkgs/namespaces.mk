#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
LIST_PACKAGE_NAMESPACES ?= $(TOOLS_PKGS_DIR)/pkgs/namespaces/bin/cli

# Define the command flags:
LIST_PACKAGE_NAMESPACES_FLAGS ?=

# Define the directory from which to search for namespaces:
LIST_PACKAGE_NAMESPACES_DIR ?= $(SRC_DIR)


# RULES #

#/
# Prints a list of all package namespaces.
#
# @param {string} [LIST_PKGS_NAMESPACES_DIR] - absolute path of the directory from which to search (default: source directory)
#
# @example
# make list-pkgs-namespaces
#
# @example
# make list-pkgs-namespaces LIST_PACKAGE_NAMESPACES_DIR="$PWD/lib/node_modules/\@stdlib/utils"
#/
list-pkgs-namespaces: $(LIST_PACKAGE_NAMESPACES) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(LIST_PACKAGE_NAMESPACES)" $(LIST_PACKAGE_NAMESPACES_FLAGS) "$(LIST_PACKAGE_NAMESPACES_DIR)"

.PHONY: list-pkgs-namespaces
