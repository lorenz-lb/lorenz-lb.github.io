# =========================
# BASE
# =========================
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm AS base

ENV DEBIAN_FRONTEND=noninteractive
ENV NVIM_INSTALL_DIR=/opt/nvim
ENV XDG_CONFIG_HOME=/opt/xdg

RUN apt update && \
    apt install -y \
      git \
      curl \
      ca-certificates \
      tar \
      gzip \
      unzip \
      build-essential \
      && apt clean && rm -rf /var/lib/apt/lists/*

# install latest neovim (no apt)
RUN curl -LO https://github.com/neovim/neovim/releases/download/v0.11.4/nvim-linux-x86_64.tar.gz && \
    mkdir -p "$NVIM_INSTALL_DIR" && \
    tar xzf nvim-linux-x86_64.tar.gz --directory="$NVIM_INSTALL_DIR" --strip-components=1 && \
    ln -s "$NVIM_INSTALL_DIR/bin/nvim" /usr/local/bin/nvim && \
    rm nvim-linux-x86_64.tar.gz

RUN mkdir -p "$XDG_CONFIG_HOME" && \
    git clone https://github.com/lorenz-lb/personal_kickstart.nvim.git "$XDG_CONFIG_HOME/nvim" && \
    chmod -R 777 "$XDG_CONFIG_HOME/nvim"

RUN curl https://sh.rustup.rs -sSf | bash -s -- -y

# workspace
WORKDIR /workspace

CMD ["sleep", "infinity"]

