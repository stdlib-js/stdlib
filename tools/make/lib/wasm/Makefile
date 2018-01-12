
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
#
# @param {string} [PKGS_WASM_PATTERN] - package pattern (e.g., `**/math/base/special/**/package.json`)
#
# @example
# make wasm
#
# @example
# make wasm PKGS_WASM_PATTERN=**/math/base/special/**/package.json
#/
wasm: $(NODE_MODULES)
	$(QUIET) $(MAKE) LIST_PACKAGE_WASM_FLAGS=$(pkgs_wasm_list_wasm_flags) -f $(this_file) list-pkgs-wasm | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Compiling WebAssembly: $$pkg"; \
		NODE="$(NODE)" \
		NODE_PATH="$(NODE_PATH)" \
		SRC_FOLDER="$(SRC_FOLDER)" \
		EMCC_COMPILER="$(DEPS_EMSDK_EMSCRIPTEN_EMCC)" \
		WASM2WAT="$(DEPS_WABT_WASM2WAT)" \
		"${compile_wasm_bin}" $$pkg \
		|| { echo "Error: failed to compile WebAssembly: $$pkg"; exit 0; } \
	done

.PHONY: wasm

#/
# Removes all compiled and generated WebAssembly files.
#
# @param {string} [PKGS_WASM_PATTERN] - package pattern (e.g., `**/math/base/special/**/package.json`)
#
# @example
# make clean-wasm
#
# @example
# make clean-wasm PKGS_WASM_PATTERN=**/math/base/special/**/package.json
#/
clean-wasm: $(NODE_MODULES)
	$(QUIET) $(MAKE) LIST_PACKAGE_WASM_FLAGS=$(pkgs_wasm_list_wasm_flags) -f $(this_file) list-pkgs-wasm | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning WebAssembly: $$pkg"; \
		cd $$pkg/src && $(MAKE) clean-wasm || exit 1; \
	done

.PHONY: clean-wasm
