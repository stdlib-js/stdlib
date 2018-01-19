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

# Define the command flags:
FIND_TOOLS_PACKAGES_FLAGS ?= \
	-type f \
	-name "$(PACKAGES_PATTERN)" \
	-regex "$(PACKAGES_FILTER)" \
	$(FIND_TOOLS_PACKAGES_EXCLUDE_FLAGS) \
	-exec dirname {} \;

ifneq ($(OS), Darwin)
	FIND_TOOLS_PACKAGES_FLAGS := -regextype posix-extended $(FIND_TOOLS_PACKAGES_FLAGS)
endif

# Define a command for listing packages:
FIND_TOOLS_PACKAGES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TOOLS_PACKAGES_FLAGS)

# Define the list of packages:
TOOLS_PACKAGES ?= $(shell $(FIND_TOOLS_PACKAGES_CMD))


# TARGETS #

# List all packages.
#
# This target prints a list of all packages, excluding the `node_modules`, `build`, and `reports` directories.

list-tools-pkgs:
	$(QUIET) find $(find_kernel_prefix) $(TOOLS_DIR) $(TOOLS_PKGS_DIR) $(FIND_PACKAGES_FLAGS) | xargs printf '%s\n'

.PHONY: list-tools-pkgs
