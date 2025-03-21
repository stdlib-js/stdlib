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

# Define the path for saving dependency downloads:
DEPS_TMP_DIR ?= $(DEPS_DIR)/tmp

# Define the path for dependency checksums:
DEPS_CHECKSUMS_DIR ?= $(DEPS_DIR)/checksums

# Define the path to an executable for downloading a remote resource:
DEPS_DOWNLOAD_BIN ?= $(TOOLS_DIR)/scripts/download

# Define the path to an executable for verifying a download:
DEPS_CHECKSUM_BIN ?= $(TOOLS_DIR)/scripts/checksum


# DEPENDENCIES #

# Note: keep in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/install/boost.mk
include $(TOOLS_MAKE_LIB_DIR)/install/cephes.mk
include $(TOOLS_MAKE_LIB_DIR)/install/cppcheck.mk
include $(TOOLS_MAKE_LIB_DIR)/install/electron.mk
include $(TOOLS_MAKE_LIB_DIR)/install/emsdk.mk
include $(TOOLS_MAKE_LIB_DIR)/install/llvm.mk
include $(TOOLS_MAKE_LIB_DIR)/install/node.mk
include $(TOOLS_MAKE_LIB_DIR)/install/openblas.mk
include $(TOOLS_MAKE_LIB_DIR)/install/python_deps.mk
include $(TOOLS_MAKE_LIB_DIR)/install/r_deps.mk
include $(TOOLS_MAKE_LIB_DIR)/install/shellcheck.mk
include $(TOOLS_MAKE_LIB_DIR)/install/wabt.mk
include $(TOOLS_MAKE_LIB_DIR)/install/wasi_libc.mk


# RULES #

#/
# Creates a directory for storing external library downloads.
#
# @private
#/
$(DEPS_TMP_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_TMP_DIR)

#/
# Creates a directory for storing external libraries.
#
# @private
#/
$(DEPS_BUILD_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_BUILD_DIR)

#/
# Runs the project's (minimal) install sequence.
#
# @example
# make install
#/
install: clean-deps-electron install-node install-deps-electron

.PHONY: install

#/
# Runs the project's full install sequence.
#
# @example
# make install-all
#/
install-all: install install-deps-all

.PHONY: install-all

#/
# Installs external library dependencies and development dependencies.
#
# @example
# make install-deps-all
#/
install-deps-all: install-deps install-deps-dev

.PHONY: install-deps-all

#/
# Removes all external library dependencies.
#
# @example
# make clean-deps-all
#/
clean-deps-all: clean-deps-downloads-all clean-deps-build-all clean-deps-tests-all

.PHONY: clean-deps-all

#/
# Removes all external library installation test artifacts.
#
# @example
# make clean-deps-tests-all
#/
clean-deps-tests-all: clean-deps-tests clean-deps-dev-test

.PHONY: clean-deps-tests-all

#/
# Installs external library dependencies.
#
# ## Notes
#
# -   This rule does **not** install dependencies used during development.
#
# @example
# make install-deps
#/
install-deps: install-deps-openblas

.PHONY: install-deps

#/
# Removes external library dependencies.
#
# @example
# make clean-deps
#/
clean-deps: clean-deps-openblas

.PHONY: clean-deps

#/
# Removes external library installation test artifacts.
#
# @example
# make clean-deps-tests
#/
clean-deps-tests: clean-deps-openblas-tests

.PHONY: clean-deps-tests

#/
# Installs all external library dependencies used during development.
#
# @example
# make install-deps-dev
#/
install-deps-dev: install-deps-boost install-deps-cephes install-deps-cppcheck install-deps-python install-deps-r install-deps-shellcheck

.PHONY: install-deps-dev

#/
# Removes external library development dependencies.
#
# @example
# make clean-deps-dev
#/
clean-deps-dev: clean-deps-boost clean-deps-cephes clean-deps-cppcheck clean-deps-python clean-deps-r clean-deps-shellcheck

.PHONY: clean-deps-dev

#/
# Removes all external development library installation test artifacts.
#
# @example
# make clean-deps-dev-tests
#/
clean-deps-dev-tests: clean-deps-boost-tests clean-deps-cephes-tests clean-deps-cppcheck-tests clean-deps-shellcheck-tests

.PHONY: clean-deps-dev-tests

#/
# Removes all external library downloads.
#
# @example
# make clean-deps-downloads-all
#/
clean-deps-downloads-all:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_TMP_DIR)

.PHONY: clean-deps-downloads-all

#/
# Removes all external library build artifacts.
#
# @example
# make clean-deps-build-all
#/
clean-deps-build-all:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BUILD_DIR)

.PHONY: clean-deps-build-all
