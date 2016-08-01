
# VARIABLES #

# Define the Node environment:
NODE_ENV_REPL ?= $(NODE_ENV)

# Define the Node path:
NODE_PATH_REPL ?= $(NODE_PATH)

# Define the path of the REPL executable:
REPL ?= $(LOCAL_BIN_DIR)/repl

# Define any command-line options to use when invoking the REPL executable:
REPL_FLAGS ?=

# Define the path of the directory in which to run the REPL:
REPL_DIR ?= $(ROOT_DIR)


# TARGETS #

# Start a REPL environment.
#
# This target starts a REPL environment.

repl: $(NODE_MODULES) $(REPL)
	@cd $(REPL_DIR); \
	NODE_ENV=$(NODE_ENV_REPL) \
	NODE_PATH=$(NODE_PATH_REPL) \
	$(REPL) $(REPL_FLAGS)

.PHONY: repl
