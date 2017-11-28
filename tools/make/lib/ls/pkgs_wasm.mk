
# VARIABLES #

# Define the path of the executable:
LIST_PACKAGE_WASM ?= $(TOOLS_PKGS_DIR)/pkgs/wasm/bin/cli

# Define the command flags:
LIST_PACKAGE_WASM_FLAGS ?=


# TARGETS #

# List all packages containing WebAssembly.
#
# This target prints a list of all packages containing WebAssembly.

list-pkgs-wasm: $(LIST_PACKAGE_WASM) $(NODE_MODULES)
	$(QUIET) $(NODE) $(LIST_PACKAGE_WASM) $(LIST_PACKAGE_WASM_FLAGS) $(SRC_DIR)

.PHONY: list-pkgs-wasm
