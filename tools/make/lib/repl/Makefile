
# VARIABLES #

# Define the command for Node:
NODE ?= node

# Define the Node environment:
NODE_ENV_REPL ?= $(NODE_ENV)

# Define the Node path:
NODE_PATH_REPL ?= $(NODE_PATH)

# Define the path of the executable:
STDLIB ?= $(LOCAL_BIN_DIR)/cli

# Define the command to launch the REPL:
REPL ?= repl

# Define any command-line options to use when invoking the executable:
REPL_FLAGS ?=

# Define the path of the directory in which to run the REPL:
REPL_DIR ?= $(ROOT_DIR)


# TARGETS #

# Start a REPL environment.
#
# This target starts a REPL environment.

repl: $(NODE_MODULES) $(STDLIB)
	@cd $(REPL_DIR); \
	NODE_ENV=$(NODE_ENV_REPL) \
	NODE_PATH=$(NODE_PATH_REPL) \
	$(NODE) $(STDLIB) $(REPL) -- $(REPL_FLAGS)

.PHONY: repl
