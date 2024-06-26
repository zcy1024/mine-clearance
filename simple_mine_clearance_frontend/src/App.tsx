import './App.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectButton, useCurrentAccount, useSuiClientContext, useSignAndExecuteTransactionBlock } from '@mysten/dapp-kit';

const MaxRow = 10;
const MaxList = 20;

const suiMove = {
	mainnet: {
		Package: "0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7",
		GameCap: "0x3ff35e8d194640090ed39bedb36f6e57fe297a697627fb3677afbc93a65b952f",
		GameEvent: "0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7::game::GameEvent",
		GameSuccessEvent: "0x9c402b6dd551e052f24086e9e3533e0879f010527c0cfe3e4e2b153efa31ece7::game::GameSuccessEvent"
	},
	testnet: {
		Package: "0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc",
		GameCap: "0x86e7b3970e297e2c6cacc38bfc159c378edb5434e5d0974e3124f6720bdc780e",
		GameEvent: "0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc::game::GameEvent",
		GameSuccessEvent: "0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc::game::GameSuccessEvent"
	}
};

// const Package = "0xc24b22cc29dda175d6dadb44dc030d0416389f6790e709ddf39e979ff9b6b2cc";
// const GameCap = "0x86e7b3970e297e2c6cacc38bfc159c378edb5434e5d0974e3124f6720bdc780e";
// const GameEvent = `${Package}::game::GameEvent`;
// const GameSuccessEvent = `${Package}::game::GameSuccessEvent`;
// const GameOverEvent = `"${Package}::game::GameOverEvent"`;

function App() {
	const queryClient = new QueryClient();
	const [network, setNetwork] = React.useState("mainnet" as keyof typeof networks);
	const networks = {
		mainnet: { url: getFullnodeUrl('mainnet') },
		testnet: { url: getFullnodeUrl('testnet') },
	};

	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<SuiClientProvider networks={networks} network={network} onNetworkChange={(network) => setNetwork(network)}>
					<WalletProvider>
						<div className='ConnectButton'>
							<ConnectButton />
						</div>
						<NetworkSelector />
						<MineClearance network={network}/>
						<FeedBack />
					</WalletProvider>
				</SuiClientProvider>
			</QueryClientProvider>
		</div>
	);
}

function NetworkSelector() {
	const ctx = useSuiClientContext();
	const [network, setNetwork] = React.useState("mainnet");
	const changeNetwork = (event: SelectChangeEvent) => {
		setNetwork(event.target.value as string);
		ctx.selectNetwork(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120, textAlign: 'center', minHeight: 66}}>
			<FormControl>
				<InputLabel id="network-select-label">Network</InputLabel>
				<Select
					labelId="network-select-label"
					id="network-select"
					value={network}
					label="Network"
					onChange={changeNetwork}
				>
					{Object.keys(ctx.networks).map((network) => (
						<MenuItem value={network} key={network}>{network}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

function MineClearance({network}: {network: string}) {
	const account = useCurrentAccount();
	const { mutate: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock();
	const [gameInfoID, setGameInfoID] = React.useState("");

	const StartGame = () => {
		document.getElementById('NotConnect')!.hidden = true;

		if (!account) {
			document.getElementById('NotConnect')!.hidden = false;
			return;
		}

		// console.log("Connected");
		MoveCallStartGame(signAndExecuteTransactionBlock, setGameInfoID, network);
		ClearCheckerboard();
		return;
	};

	return (
		<div className='Game'>
			<div className='StartButton'>
				<Button variant="contained" onClick={StartGame}>Game</Button>
				<br></br>
				<i id="NotConnect" hidden={true}>Please Connect First!!!</i>
			</div>
			<div id='Checkerboard'>
				<DrawCheckerboard gameInfoID={gameInfoID} network={network}/>
			</div>
		</div>
	);
}

function DrawCheckerboard({gameInfoID, network}: {gameInfoID: string, network: string}) {
	const { mutate: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock();

	const clickBoard = (event: any) => {
		if (gameInfoID === "") {
			return;
		}

		const r = event.target.getAttribute('button-key')
		const l = event.target.parentElement.getAttribute('button-key');
		// console.log(`(${r}, ${l})`);

		// let str1 = event.currentTarget.innerHTML.split('<', 1)[0];
		// if (str1 !== "&nbsp;")
		// 	return;
		// const str2 = event.currentTarget.innerHTML.substring(str1.length);
		// str1 = str1 == "x" ? "1" : "x";
		// const str = str1.concat(str2);
		// // console.log(str);
		// event.currentTarget.innerHTML = str;

		let str = event.currentTarget.innerHTML.split('<', 1)[0];
		if (str !== "&nbsp;")
			return;

		// event.target.disabled = true;

		ShowFeedBack("circular_progress");
		// ShowFeedBack("success_alert");
		// ShowFeedBack("encourage_alert");
		// ShowFeedBack("failure_alert");

		MoveCallGameClick(Number(r), Number(l), gameInfoID, network, signAndExecuteTransactionBlock);
	}

	const childboard = [];
	let i = 1;
	while (i <= MaxRow) {
		childboard.push(<Button key={i} button-key={i} size="large" onClick={clickBoard} sx={{width: "1px"}}>&nbsp;</Button>);
		i += 1;
	}

	const checkerboard = [];
	let j = 1;
	while (j <= MaxList) {
		checkerboard.push(<ButtonGroup orientation='vertical' aria-label='Vertical button group' variant='outlined' key={j} button-key={j}>{childboard}</ButtonGroup>);
		j += 1;
	}

	return (
		<Box>
			{checkerboard}
		</Box>
	);
}

function FeedBack() {
	return (
		<div className='FeedBack'>
			<div id="circular_progress" hidden={true}>
				<CircularProgress />
			</div>
			<div id="success_alert" className='SuccessAlert' hidden={true}>
				<Alert variant="outlined" severity="success">
					Congratulations on your successful mine clearance!
				</Alert>
			</div>
			<div id="encourage_alert" className='EncourageAlert' hidden={true}>
				<Alert variant="outlined" severity="info">
					Fortunately you didn't touch a landmine, please consider your next step!
				</Alert>
			</div>
			<div id="failure_alert" className='FailureAlert' hidden={true}>
				<Alert variant="outlined" severity="error">
					Unfortunately, the minesweeper failed!
				</Alert>
			</div>
		</div>
	);
}

function ShowFeedBack(id: string) {
	HiddenFeedBack();
	// document.getElementById(id)!.hidden = false;
	if (id == "circular_progress")
		document.getElementById(id)!.hidden = false;
	else
		document.getElementById(id)!.style.display = "inline-flex";
}

function HiddenFeedBack() {
	document.getElementById("circular_progress")!.hidden = true;
	// document.getElementById("success_alert")!.hidden = true;
	// document.getElementById("encourage_alert")!.hidden = true;
	// document.getElementById("failure_alert")!.hidden = true;
	document.getElementById("success_alert")!.style.display = "none";
	document.getElementById("encourage_alert")!.style.display = "none";
	document.getElementById("failure_alert")!.style.display = "none";
}

function MoveCallStartGame(signAndExecuteTransactionBlock: any, setGameInfoID: any, network: string) {
	const txb = new TransactionBlock();
	const [coin] = txb.splitCoins(txb.gas, [666]);

	// console.log(network);

	txb.moveCall({
		target: `${suiMove[network as keyof typeof suiMove].Package}::player::start_game`,
		arguments: [
			txb.object(suiMove[network as keyof typeof suiMove].GameCap),
			coin,
		]
	});

	signAndExecuteTransactionBlock(
		{
			transactionBlock: txb,
			chain: `sui:$network`,
			options: {
				showObjectChanges: true,
			}
		},
		{
			onSuccess: (result: any) => {
				// console.log(result.objectChanges);
				for (let obj of result.objectChanges) {
					// console.log(obj);
					if (obj.type === "created") {
						// console.log(obj.objectId);
						setGameInfoID(obj.objectId);
						break;
					}
				}
			}
		}
	);
}

function MoveCallGameClick(r: number, l: number, gameInfoID: string, network: string, signAndExecuteTransactionBlock: any) {
	const txb = new TransactionBlock();

	txb.moveCall({
		target: `${suiMove[network as keyof typeof suiMove].Package}::player::game_click`,
		arguments: [
			txb.pure(r),
			txb.pure(l),
			txb.object(gameInfoID),
		]
	});

	signAndExecuteTransactionBlock(
		{
			transactionBlock: txb,
			chain: `sui:$network`,
			options: {
				showEvents: true,
			}
		},
		{
			onSuccess: (result: any) => {
				// console.log(result);
				let showed = false;
				for (let event of result.events) {
					if (event.type === suiMove[network as keyof typeof suiMove].GameEvent) {
						// console.log(event.parsedJson.checkerboard);
						ChangeCheckerboard(event.parsedJson.checkerboard);
					} else if (event.type === suiMove[network as keyof typeof suiMove].GameSuccessEvent) {
						ShowFeedBack("success_alert");
						showed = true;
					} else {
						ShowFeedBack("failure_alert");
						showed = true;
					}
				}
				if (!showed)
					ShowFeedBack("encourage_alert");
			}
		}
	);
}

function ChangeCheckerboard(checkerboard: any) {
	// console.log(checkerboard);
	// for (let row of checkerboard) {
	// 	console.log(row);
	// }
	const htmlCheckerboard = document.getElementById("Checkerboard")!.children[0].children;
	let i = 0, j = 0;
	for (let list of htmlCheckerboard) {
		// console.log(list);
		for (let row of list.children) {
			// console.log(row);
			// console.log(checkerboard[i][j]);
			const replace = checkerboard[i][j] !== "-" ? checkerboard[i][j] : "&nbsp;";
			ChangeChess(row, replace);
			i += 1;
		}
		j += 1;
		i = 0;
	}
}

function ChangeChess(html: Element, replace: string) {
	// console.log(html.innerHTML);
	const str1 = html.innerHTML.split('<', 1)[0];
	const str2 = html.innerHTML.substring(str1.length);
	html.innerHTML = replace.concat(str2);
}

function ClearCheckerboard() {
	const checkerboard = [];
	for (let i = 0; i < MaxRow; i++) {
		let rowStr = "";
		for (let j = 0; j < MaxList; j++)
			rowStr = rowStr.concat("-");
		checkerboard.push(rowStr);
	}
	ChangeCheckerboard(checkerboard);
	HiddenFeedBack();
}

export default App
