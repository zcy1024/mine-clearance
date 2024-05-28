# Mine Clearance

**Notes:** As a beginner, this work still has many loopholes and room for improvement, especially the front-end part, which does not fully demonstrate the functions implemented on the chain.

## Sui Move

`cd simple_mine_clearance`

The source code on the chain is here, you can publish it yourself and play it yourself.

## Vite + React + TypeScript + MUI

```bash
cd simple_mine_clearance_frontend
pnpm install
pnpm run dev
o
```

You can view the front-end code here, or follow the steps above to open a browser and play.

# On-chain deployment information

## mainnet

```bash
╭────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                     │
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                   │
│  ┌──                                                                                               │
│  │ ObjectID: 0x3ff35e8d194640090ed39bedb36f6e57fe297a697627fb3677afbc93a65b952f                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Shared( 149128449 )                                                                      │
│  │ ObjectType: 0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7::admin::GameCap  │
│  │ Version: 149128449                                                                              │
│  │ Digest: BVa8bjZoQ2AcuihSaMUUed55DqJgMf7TRgGNHU8neLEL                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0x4da8f1bfcd44a9935da26ae9c695aad07a17998c17acd0904314876c31a3f65b                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::package::UpgradeCap                                                            │
│  │ Version: 149128449                                                                              │
│  │ Digest: ACftYZei3mM2G4N8GnymRfamm3WTGN1gAtnUdwhRuZJA                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0x7119025f2bf850aa6e5c53c3f53924b43cc45c9970409f29ee1a81888a94ea62                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Shared( 149128449 )                                                                      │
│  │ ObjectType: 0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7::task::TaskList  │
│  │ Version: 149128449                                                                              │
│  │ Digest: 3hnLjt7EwRC3QevbN8YwJBDqJESKLgtqYmKioYbeWSrz                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0x9e8a7b4db08298361ed45d3f05e8946cad8171e6871756a1b3cdbfaa9c7ebdc3                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::package::Publisher                                                             │
│  │ Version: 149128449                                                                              │
│  │ Digest: BhbvCYMbsCxkCfVoJvvLpS8scAYpvNJZAn43q9pmkD9y                                            │
│  └──                                                                                               │
│ Mutated Objects:                                                                                   │
│  ┌──                                                                                               │
│  │ ObjectID: 0x008696cb13e1f79d99f44ecfa62c4437979cf8e9e7db423fc01efc7213d8a9a4                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                      │
│  │ Version: 149128449                                                                              │
│  │ Digest: 12a4z57Ev45ma6AcGfaNyPrV2dZiAnkhja5TGaLkbCET                                            │
│  └──                                                                                               │
│ Published Objects:                                                                                 │
│  ┌──                                                                                               │
│  │ PackageID: 0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7                   │
│  │ Version: 1                                                                                      │
│  │ Digest: A6A79ca65fK6WG1TusQSAuJbGhHnG5yCh4LJCVDonbND                                            │
│  │ Modules: admin, game, player, task                                                              │
│  └──                                                                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

## testnet

```bash
╭────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                     │
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                   │
│  ┌──                                                                                               │
│  │ ObjectID: 0x7660b7ff6353bdb48f9008de1e4fc89a14ec5dbb4e41ed70025303a9e348a9ee                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::package::Publisher                                                             │
│  │ Version: 28132074                                                                               │
│  │ Digest: 9wvLJSrw72kG1gj7VpqKnvs8uWGi3293kjtsp3AKjcLa                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0x86e7b3970e297e2c6cacc38bfc159c378edb5434e5d0974e3124f6720bdc780e                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Shared                                                                                   │
│  │ ObjectType: 0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc::admin::GameCap  │
│  │ Version: 28132074                                                                               │
│  │ Digest: FaqL5SYeCpgJpYjP43JPQ999RQfJCWMeEvz5sJUbZ8t8                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0xc1c6b9aa44185f49aa5970531b95d775b8cf9852fa34aae6a5eeb67486d5f4fc                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Shared                                                                                   │
│  │ ObjectType: 0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc::task::TaskList  │
│  │ Version: 28132074                                                                               │
│  │ Digest: GfRbLBkcaetJpgfuS9B4Yf3ahtbr27SnZrhLVHLY4m7V                                            │
│  └──                                                                                               │
│  ┌──                                                                                               │
│  │ ObjectID: 0xd1253667c8c56971ed1dcbcee8d292e1dd6333501ca0ff79530973926da13ae6                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::package::UpgradeCap                                                            │
│  │ Version: 28132074                                                                               │
│  │ Digest: BaVFcmznjbVnxE9Ah1JsRHEf2AHpWbp4GDgYZWM6dfZ9                                            │
│  └──                                                                                               │
│ Mutated Objects:                                                                                   │
│  ┌──                                                                                               │
│  │ ObjectID: 0x01676de212960b0689245914312ac6be3b4d5cffa0cae91ef527441b894f746a                    │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                      │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )   │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                      │
│  │ Version: 28132074                                                                               │
│  │ Digest: 6r1UnSo33xXiheeG8xoR33biTXxeZHNZXQw7XtrU3Hvy                                            │
│  └──                                                                                               │
│ Published Objects:                                                                                 │
│  ┌──                                                                                               │
│  │ PackageID: 0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc                   │
│  │ Version: 1                                                                                      │
│  │ Digest: 6Ato2AnQSnzycdUn2Gq5MFv9S2zZcDADDa1mx3xpBc4s                                            │
│  │ Modules: admin, game, player, task                                                              │
│  └──                                                                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────────────╯
```