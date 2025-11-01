FROM node:latest

ENV DEBIAN_FRONTEND=noninteractive
ENV NVIM_INSTALLER_DIR="/opt/nvim"
ARG USERNAME=devuser
ENV PATH="$NVIM_INSTALL_DIR/bin:$PATH"
ARG USERNAME=node

RUN apt update && \
    apt install -y git curl python3 python3-pip && \
    apt clean

# install neovim
RUN mkdir $NVIM_INSTALLER_DIR && \
    curl -LO https://github.com/neovim/neovim/releases/download/v0.11.4/nvim-linux-x86_64.tar.gz && \
    tar xzvf nvim-linux-x86_64.tar.gz --directory=$NVIM_INSTALLER_DIR --strip-components=1 && \
    ln -s $NVIM_INSTALLER_DIR/bin/nvim /usr/bin/nvim

# load dotfiles
RUN git clone https://github.com/lorenz-lb/personal_kickstart.nvim.git /home/$USERNAME/.config/nvim

RUN chown -R $USERNAME /usr/local 

WORKDIR /workspace 
USER $USERNAME

# rust for Wasm  
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="$PATH:$HOME/.cargo/bin"
RUN cargo install wasm-pack

# EXPOSE 9999 # TODO
CMD ["sleep", "infinity"]
