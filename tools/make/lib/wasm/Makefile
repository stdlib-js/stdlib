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

# Define a WebAssembly package pattern filter when compiling WebAssembly artifacts:
ifndef PKGS_WASM_PATTERN
	pkgs_wasm_pattern := **/package.json
else
	pkgs_wasm_pattern := "**/$(PKGS_WASM_PATTERN)/**/package.json"
endif

# Define command-line flags when listing packages containing WebAssembly:
pkgs_wasm_list_wasm_flags := "--pattern $(pkgs_wasm_pattern)"

# Define the path to a script for compiling WebAssembly for a provided package path:
compile_wasm_bin := $(TOOLS_DIR)/scripts/compile_wasm


# RULES #

#/
# Compiles WebAssembly artifacts.
#
# ## Notes
#
# -   If unable to compile WebAssemby artifacts, the recipe prints an error message and tries compiling WebAssembly artifacts for the next package.
#
# @param {string} [PKGS_WASM_PATTERN] - package pattern (e.g., `blas/base/daxpy-wasm`)
#
# @example
# make wasm
#
# @example
# make wasm PKGS_WASM_PATTERN="blas/base/daxpy-wasm"
#/
wasm: $(NODE_MODULES)
	$(QUIET) $(MAKE) LIST_PKGS_WASM_FLAGS=$(pkgs_wasm_list_wasm_flags) -f $(this_file) list-pkgs-wasm | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Compiling WebAssembly: $$pkg"; \
		NODE="$(NODE)" \
		NODE_PATH="$(NODE_PATH)" \
		SRC_FOLDER="$(SRC_FOLDER)" \
		CLANG_COMPILER="$(DEPS_LLVM_CLANG)" \
		CLANG_SYSROOT="$(DEPS_WASI_LIBC_SYSROOT)" \
		EMCC_COMPILER="$(DEPS_EMSDK_EMSCRIPTEN_EMCC)" \
		WASM2WAT="$(DEPS_WABT_WASM2WAT)" \
		WASM2JS="$(DEPS_EMSDK_EMSCRIPTEN_WASM2JS)" \
		"${compile_wasm_bin}" $$pkg \
		|| { echo "Error: failed to compile WebAssembly: $$pkg"; exit 0; } \
	done

.PHONY: wasm

#/
# Removes all compiled and generated WebAssembly files.
#
# @param {string} [PKGS_WASM_PATTERN] - package pattern (e.g., `blas/base/daxpy-wasm`)
#
# @example
# make clean-wasm
#
# @example
# make clean-wasm PKGS_WASM_PATTERN="blas/base/daxpy-wasm"
#/
clean-wasm: $(NODE_MODULES)
	$(QUIET) $(MAKE) LIST_PKGS_WASM_FLAGS=$(pkgs_wasm_list_wasm_flags) -f $(this_file) list-pkgs-wasm | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning WebAssembly: $$pkg"; \
		cd $$pkg/src && $(MAKE) clean-wasm || exit 1; \
	done

.PHONY: clean-wasm
