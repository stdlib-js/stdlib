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

# Define the path to an executable for checking CMake:
DEPS_CHECK_CMAKE ?= $(TOOLS_DIR)/scripts/check_cmake

# Define the path to an executable for checking git:
DEPS_CHECK_GIT ?= $(TOOLS_DIR)/scripts/check_git

# Define the path to an executable for checking Python:
DEPS_CHECK_PYTHON ?= $(TOOLS_DIR)/scripts/check_python

# Define the download URL:
DEPS_LLVM_URL ?= https://github.com/llvm/llvm-project.git

# Determine the basename for the download:
deps_llvm_basename := llvm

# Define the path to the file containing a checksum to verify a download:
DEPS_LLVM_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_llvm_basename))/sha256)

# Define the output path when downloading:
DEPS_LLVM_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_llvm_basename)

# Define the output path after extracting:
deps_llvm_extract_out := $(DEPS_BUILD_DIR)/llvm_extracted

# Define the path to the directory containing tests:
DEPS_LLVM_TEST_DIR ?= $(DEPS_DIR)/test/llvm

# Define the output directory path for compiled tests:
DEPS_LLVM_TEST_OUT ?= $(DEPS_LLVM_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_LLVM_TEST_INSTALL ?= $(DEPS_LLVM_TEST_DIR)/test_install.c

# Define output paths for a compiled test file:
DEPS_LLVM_TEST_INSTALL_WASM_OUT ?= $(DEPS_LLVM_TEST_OUT)/test.wasm


# RULES #

#/
# Downloads LLVM.
#
# @private
#/
$(DEPS_LLVM_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading LLVM...' >&2
	$(QUIET) $(GIT) clone --depth=1 $(DEPS_LLVM_URL) $(DEPS_LLVM_DOWNLOAD_OUT)

#/
# Extracts an LLVM download.
#
# @private
#/
$(DEPS_LLVM_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_LLVM_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting LLVM...' >&2
	$(QUIET) $(CP) -a $(DEPS_LLVM_DOWNLOAD_OUT) $(deps_llvm_extract_out)
	$(QUIET) mv $(deps_llvm_extract_out) $(DEPS_LLVM_BUILD_OUT)

#/
# Creates a directory for storing compiled LLVM tests.
#
# @private
#/
$(DEPS_LLVM_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_LLVM_TEST_OUT)

#/
# Compiles a WebAssembly test file for testing an LLVM installation.
#
# @private
#/
$(DEPS_LLVM_TEST_INSTALL_WASM_OUT): $(DEPS_LLVM_BUILD_OUT) $(DEPS_LLVM_TEST_OUT)
	$(QUIET) $(DEPS_LLVM_CLANG) $(DEPS_LLVM_TEST_INSTALL) \
		--target=wasm32 \
		--no-standard-libraries \
		-Wl,--export-all \
		-Wl,--no-entry \
		-o $(DEPS_LLVM_TEST_INSTALL_WASM_OUT)

#/
# Downloads LLVM.
#
# @private
#
# @example
# make deps-download-llvm
#/
deps-download-llvm: $(DEPS_LLVM_DOWNLOAD_OUT)

.PHONY: deps-download-llvm

#/
# Verifies an LLVM download.
#
# @private
#
# @example
# make deps-verify-llvm
#/
deps-verify-llvm: deps-download-llvm
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-llvm

#/
# Extracts an LLVM download.
#
# @private
#
# @example
# make deps-extract-llvm
#/
deps-extract-llvm: $(DEPS_LLVM_BUILD_OUT)

.PHONY: deps-extract-llvm

#/
# Checks a host system for LLVM installation prerequisites.
#
# @private
#
# @example
# make deps-prerequisites-llvm
#/
deps-prerequisites-llvm:
	$(QUIET) $(DEPS_CHECK_CMAKE)
	$(QUIET) $(DEPS_CHECK_GIT)
	$(QUIET) $(DEPS_CHECK_PYTHON)

.PHONY: deps-prerequisites-llvm

#/
# Installs LLVM.
#
# @private
#
# @example
# make deps-install-llvm
#/
deps-install-llvm: $(DEPS_LLVM_BUILD_OUT) deps-prerequisites-llvm
	$(QUIET) cd $(DEPS_LLVM_BUILD_OUT) && $(MKDIR_RECURSIVE) build
	$(QUIET) cd $(DEPS_LLVM_BUILD_OUT)/build && $(CMAKE) -DLLVM_ENABLE_PROJECTS="clang;lld;clang-tools-extra" -DCMAKE_BUILD_TYPE=Release -G "Unix Makefiles" ../llvm
	$(QUIET) cd $(DEPS_LLVM_BUILD_OUT)/build && $(MAKE)

.PHONY: deps-install-llvm

#/
# Updates an installed LLVM.
#
# @private
#
# @example
# make deps-update-llvm
#/
deps-update-llvm: deps-install-llvm deps-test-llvm

.PHONY: deps-update-llvm

#
# Tests an LLVM installation.
#
# @private
#
# @example
# make deps-test-llvm
#/
deps-test-llvm: $(DEPS_LLVM_TEST_INSTALL_WASM_OUT) deps-test-llvm-wasm
	$(QUIET) echo '' >&2
	$(QUIET) echo 'LLVM info...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) $(DEPS_LLVM_CLANG) --help >&2
	$(QUIET) echo '' >&2
	$(QUIET) cd $(DEPS_LLVM_BUILD_OUT)/build && $(MAKE) check-clang
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-llvm

#/
# Tests an LLVM installation for generating WebAssembly.
#
# @private
#
# @example
# make deps-test-llvm-wasm
#/
deps-test-llvm-wasm: $(DEPS_LLVM_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo 'Running wasm tests...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'TODO: make test more robust' >&2
	$(QUIET) test -f $(DEPS_LLVM_TEST_INSTALL_WASM_OUT) >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-llvm-wasm

#/
# Installs LLVM.
#
# @example
# make install-deps-llvm
#/
install-deps-llvm: deps-download-llvm deps-verify-llvm deps-extract-llvm deps-install-llvm deps-test-llvm

.PHONY: install-deps-llvm

#/
# Removes an LLVM installation (but does not remove an LLVM download if one exists).
#
# @example
# make clean-deps-llvm
#/
clean-deps-llvm: clean-deps-llvm-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_LLVM_BUILD_OUT)

.PHONY: clean-deps-llvm

#/
# Removes LLVM installation tests.
#
# @example
# make clean-deps-llvm-tests
#/
clean-deps-llvm-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_LLVM_TEST_OUT)

.PHONY: clean-deps-llvm-tests
