#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

include $(TOOLS_MAKE_LIB_DIR)/deps/boost.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/cephes.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/electron.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/emsdk.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/openblas.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/wabt.mk


# TARGETS #

# Create directory for temporary files.
#
# This target creates a directory for storing external library downloads.

$(DEPS_TMP_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_TMP_DIR)


# Create directory for dependency builds.
#
# This target creates a directory for storing external libraries.

$(DEPS_BUILD_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_BUILD_DIR)


# Install external libraries.
#
# This target installs external library dependencies.

install-deps: install-deps-boost install-deps-openblas install-deps-emsdk install-deps-wabt install-deps-cephes install-deps-electron

.PHONY: install-deps


# Clean external libraries.
#
# This target removes external libraries.

clean-deps: clean-deps-downloads clean-deps-build clean-deps-tests

.PHONY: clean-deps


# Clean builds.
#
# This target removes external library builds.

clean-deps-build:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BUILD_DIR)

.PHONY: clean-deps-build


# Clean install tests.
#
# This target removes external library installation tests.

clean-deps-tests: clean-deps-boost-tests clean-deps-openblas-tests clean-deps-emsdk-tests clean-deps-wabt-tests clean-deps-cephes-tests clean-deps-electron-tests

.PHONY: clean-deps-tests


# Clean downloads.
#
# This target removes external library downloads.

clean-deps-downloads:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_TMP_DIR)

.PHONY: clean-deps-downloads
