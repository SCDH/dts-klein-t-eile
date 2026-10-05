# DTS Klein T eilt


## Getting Started

This project uses a dev container for minimizing the blast radius of
potential nodejs supply chain attacks. If you do not use an editor
that can spin up the container, you can use the [Dev Container
CLI](https://github.com/devcontainers/cli) instead.

`cd` into the cloned project and spin up the devcontainer from the
commandline:

```shell
devcontainer up
```

Build the node project using the node installation inside the dev
container:

```shell
devcontainer exec npm install
```

Start the dev server insde the devcontainer:

```shell
devcontainer exec npm run dev -- --host
```

Visit the *DTS Klein T eilt* on http://127.x.x.x:5173/ in your
browser. The exact address will be printed to the console by the dev
server. The `--host` switch to vite (the dev server tells it to listen
not only on the container's loopback device 127.0.0.1, but on each of
the containers network devices. You can inspect the network with
`docker network inspect bridge`.

Get a shell in the container:

```shell
devcontainer exec bash
```


If you are more concered about installing the Dev Container CLI than
about exposing your computer to supply chain attacks, feel free to
simply run `npm i && npm run dev`.
