# 🏎️ @pmndrs/racing-game

![img](thumbnail.webp)

Live demo (current state): https://racing.pmnd.rs/

This project is a showcase for the feasibility of React in gaming. Every thing is a self contained component using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber) to express threejs with React semantics. If that seems strange to you read [this explanation](https://twitter.com/0xca0a/status/1282999626782650368).

This project is 100% open source and community built, CC0 assets only, everyone is invited to participate. If you have a PR merged you are added to the triage team. Refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for more information.

```jsx
/assets   - the blend files
/utils    - game state store, helpers
/models   - gltfjsx models, players, characters
/effects  - dust, trails, skids, shaders
/ui       - intros, heads up displays, leaderboards
```

There is a dedicated discord channel for this project here: https://discord.gg/dQW7fDmaAG

## Single File Build

1. Add vite-plugin-singlefile to the vite config with default settings
2. Add `glb`, `hdr`, `mp3`, and `SVG` to the vite config `assetsInclude` array so those assets are include but not transformed.
3. Add `typeRoots` to `tsconfig.json` and add `src/types` files for `glb`, `hdr`, `mp3` and `SVG` so that imports from these files don't throw type errors
4. Copy the `public` folder to `src/assets` and replace all public urls with imports
5. Rename `svg` assets to `SVG`. For some reason vite has [one specific rule](https://github.com/vitejs/vite/blob/161f8eac892e2f8a5383a90bc148326e624eddef/packages/vite/src/node/plugins/asset.ts#L287-L288) to never inline `svg` assets
