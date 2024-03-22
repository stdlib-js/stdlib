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

# Define the path of the executable for [node-gyp][1].
#
# [1]: https://github.com/nodejs/node-gyp
NODE_GYP ?= $(BIN_DIR)/node-gyp

# Define command-line options when invoking node-gyp.
NODE_GYP_FLAGS ?=

# Define GYP "defines":
ifndef NODE_GYP_DEFINES
	NODE_GYP_DEFINES := fortran_compiler=$(FC)
ifneq (, $(BLAS))
	NODE_GYP_DEFINES += blas=$(BLAS)
ifdef BLAS_DIR
	NODE_GYP_DEFINES += blas_dir=$(BLAS_DIR)
endif
endif
endif

# Define an add-on package pattern filter:
ifndef NODE_ADDONS_PATTERN
	node_addons_pattern := **/package.json
else
	node_addons_pattern := "**/$(NODE_ADDONS_PATTERN)/**/package.json"
endif

# Define command-line flags when listing add-ons:
install_node_addons_list_addons_flags := "--pattern $(node_addons_pattern)"


# RULES #

#/
# Installs Node.js native add-ons.
#
# ## Notes
#
# -   When `FAST_FAIL` is `0`, if unable to install a native add-on, the recipe prints an error message and proceeds to try installing the next add-on.
#
# @param {integer} [FAST_FAIL] - flag indicating whether to immediately exit if unable to install a native add-on (default: 1)
#
# @example
# make install-node-addons
#
# @example
# FAST_FAIL=0 make install-node-addons
#
# @example
# FAST_FAIL=1 make install-node-addons
#/
install-node-addons: $(NODE_MODULES) clean-node-addons
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(MAKE) LIST_PKGS_ADDONS_FLAGS=$(install_node_addons_list_addons_flags) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Building add-on: $$pkg"; \
		cd $$pkg && \
			MAKEFLAGS= \
			NODE_PATH="$(NODE_PATH)" \
			GYP_DEFINES="$(NODE_GYP_DEFINES)" \
			$(NODE_GYP) $(NODE_GYP_FLAGS) rebuild \
		|| { echo "Error: failed to build add-on: $$pkg"; exit 1; } \
	done
else
	$(QUIET) $(MAKE) LIST_PKGS_ADDONS_FLAGS=$(install_node_addons_list_addons_flags) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Building add-on: $$pkg"; \
		cd $$pkg && \
			MAKEFLAGS= \
			NODE_PATH="$(NODE_PATH)" \
			GYP_DEFINES="$(NODE_GYP_DEFINES)" \
			$(NODE_GYP) $(NODE_GYP_FLAGS) rebuild \
		|| { echo "Error: failed to build add-on: $$pkg"; exit 0; } \
	done
endif

.PHONY: install-node-addons

#/
# Removes all compiled and generated files for Node.js native add-ons.
#
# ## Notes
#
# -   When `FAST_FAIL` is `0`, if unable to clean a native add-on, the recipe prints an error message and proceeds to try cleaning the next add-on.
#
# @param {integer} [FAST_FAIL] - flag indicating whether to immediately exit if unable to clean a native add-on (default: 1)
#
# @example
# make clean-node-addons
#
# @example
# FAST_FAIL=0 make clean-node-addons
#
# @example
# FAST_FAIL=1 make clean-node-addons
#/
clean-node-addons: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(MAKE) LIST_PKGS_ADDONS_FLAGS=$(install_node_addons_list_addons_flags) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning add-on: $$pkg"; \
		cd $$pkg/src && $(MAKE) clean && \
		cd $$pkg && $(NODE_GYP) clean \
		|| { echo "Error: failed to clean add-on: $$pkg"; exit 1; } \
	done
else
	$(QUIET) $(MAKE) LIST_PKGS_ADDONS_FLAGS=$(install_node_addons_list_addons_flags) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning add-on: $$pkg"; \
		cd $$pkg/src && $(MAKE) clean && \
		cd $$pkg && $(NODE_GYP) clean \
		|| { echo "Error: failed to clean add-on: $$pkg"; exit 0; } \
	done
endif

.PHONY: clean-node-addons
