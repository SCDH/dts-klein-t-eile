# DTS Klein T eile

*DTS Klein T eile* is the warthog amongst
[DTS](https://dtsapi.org/specifications/) browser clients. It doesn't
want to look nice or offer convenient UX. It's only purpose is to
demonstrate, how communication with distributed text services works:
Which API calls have to be made? Which follow-up calls are possible?
How to gather information in order to make the call you wish?


## Getting Started

### Online

Visit the github pages site of this repo:

Enter the URI of a DTS entry endpoint into the form and everything
will unfold with your clicks ...

### Building

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
server. The `--host` switch to tells the dev server
([vite](https://vite.dev/)) to listen not only on the container's
loopback device 127.0.0.1, but on each of the containers network
devices. You can inspect the network with `docker network inspect
bridge`.

Get a shell in the container:

```shell
devcontainer exec bash
```


If you are more concered about installing the Dev Container CLI than
about exposing your computer to supply chain attacks, feel free to
simply run `npm i && npm run dev`.

## Technical Details

- [htmx](htmx.org) for sending requests and inserting responses into
  the HTML DOM
- [Nunjucks](https://mozilla.github.io/nunjucks/) templates for
  transforming JSON responses to HTML snippets
- a RCF6570 conforming
  [library](https://www.npmjs.com/package/uri-template) for expanding
  URI templates
- Vite as dev server and JS bundler


## License

This project is licensed under CC0. You can reuse it or its components
without credeting the original authors.
