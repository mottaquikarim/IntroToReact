SHELL := /bin/bash
app = gutenberg

## Download and install Rust
local_install_rust:
	curl https://sh.rustup.rs -sSf | sh

## Download and install cargo
local_install:
	cargo install mdbook

local: local_install_rust local_install

local_watch:
	npm run watch

install:
	(test -x ${HOME}/.cargo/bin/cargo-install-update || cargo install cargo-update)
	(test -x ${HOME}/.cargo/bin/mdbook || cargo install --vers "^0.1" mdbook)
	cargo install-update -a

build:
	mdbook build app
	mdbook test app
