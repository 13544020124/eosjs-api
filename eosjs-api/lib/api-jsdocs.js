// Generated file, see bin/api-docs.js

/** @namespace */
var eos = {}

/** @typedef {Buffer|hex} bytes  */


/**
Return general network information.

@async
@memberof eos

@return {string}

@example url_path: `/v1/chain/get_info`

@example ```js
eos.getInfo({})
```

*/
function getInfo() {}

/**
Fetch a blockchain account

@async
@memberof eos

@arg {name} account_name

@return {string}

@example url_path: `/v1/chain/get_account`

@example ```js
eos.getAccount(account_name)
```

*/
function getAccount(account_name) {}

/**
@typedef {object} getCodeResult
@property {name} account_name
@property {string} wast
@property {string} wasm
@property {sha256} code_hash
@property {optional<abi_def>} abi
*/

/**
Fetch smart contract code

@async
@memberof eos

@arg {name} account_name
@arg {bool} [code_as_wasm = false]

@return {getCodeResult}

@example url_path: `/v1/chain/get_code`

@example ```js
eos.getCode(account_name, code_as_wasm)
```

*/
function getCode(account_name, code_as_wasm) {}

/**
@typedef {object} getCodeHashResult
@property {name} account_name
@property {sha256} code_hash
*/

/**


@async
@memberof eos

@arg {name} account_name

@return {getCodeHashResult}

@example url_path: `/v1/chain/get_code_hash`

@example ```js
eos.getCodeHash(account_name)
```

*/
function getCodeHash(account_name) {}

/**
@typedef {object} getAbiResult
@property {name} account_name
@property {abi_def} [abi]
*/

/**
@async
@memberof eos

@arg {name} account_name

@return {getAbiResult}

@example url_path: `/v1/chain/get_abi`

@example ```js
eos.getAbi(account_name)
```

*/
function getAbi(account_name) {}

/**
@typedef {object} getRawCodeAndAbiResult
@property {name} account_name
@property {bytes} wasm
@property {abi_def} [abi]
*/

/**
@async
@memberof eos

@arg {name} account_name

@return {getRawCodeAndAbiResult}

@example url_path: `/v1/chain/get_raw_code_and_abi`

@example ```js
eos.getRawCodeAndAbi(account_name)
```

*/
function getRawCodeAndAbi(account_name) {}

/**
@typedef {object} abiJsonToBinResult
@property {bytes} binargs
*/

/**
Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.

@async
@memberof eos

@arg {name} code
@arg {name} action
@arg {bytes} args

@return {abiJsonToBinResult}

@example url_path: `/v1/chain/abi_json_to_bin`

@example ```js
eos.abiJsonToBin(code, action, args)
```

*/
function abiJsonToBin(code, action, args) {}

/**
@typedef {object} abiBinToJsonResult
@property {bytes} args
*/

/**
Convert bin hex back into Abi json definition.

@async
@memberof eos

@arg {name} code
@arg {name} action
@arg {bytes} binargs

@return {abiBinToJsonResult}

@example url_path: `/v1/chain/abi_bin_to_json`

@example ```js
eos.abiBinToJson(code, action, binargs)
```

*/
function abiBinToJson(code, action, binargs) {}

/**
@async
@memberof eos

@arg {transaction} transaction
@arg {set<public_key>} available_keys

@return {Set<public_key>}

@example url_path: `/v1/chain/get_required_keys`

@example ```js
eos.getRequiredKeys(transaction, available_keys)
```

*/
function getRequiredKeys(transaction, available_keys) {}

/**
Fetch a block from the blockchain.

@async
@memberof eos

@arg {string} block_num_or_id

@return {variant}

@example url_path: `/v1/chain/get_block`

@example ```js
eos.getBlock(block_num_or_id)
```

*/
function getBlock(block_num_or_id) {}

/**
Fetch the minimum state necessary to validate transaction headers.

@async
@memberof eos

@arg {string} block_num_or_id

@return {string}

@example url_path: `/v1/chain/get_block_header_state`

@example ```js
eos.getBlockHeaderState(block_num_or_id)
```

*/
function getBlockHeaderState(block_num_or_id) {}

/**
@typedef {object} getTableRowsResult
@property {vector} rows - One row per item, either encoded as hex String or JSON object
@property {bool} more - True if last element in data is not the end and sizeof data() < limit
*/

/**
Fetch smart contract data from an account.

@async
@memberof eos

@arg {bool} [json = false]
@arg {name} code
@arg {string} scope
@arg {name} table
@arg {string} table_key
@arg {string} [lower_bound = 0]
@arg {string} [upper_bound = -1]
@arg {uint32} [limit = 10]
@arg {string} key_type - The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name.
@arg {string} index_position - 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc

@return {getTableRowsResult}

@example url_path: `/v1/chain/get_table_rows`

@example ```js
eos.getTableRows(json, code, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position)
```

*/
function getTableRows(json, code, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position) {}

/**
@async
@memberof eos

@arg {name} code
@arg {name} account
@arg {optional<string>} symbol

@return {Array<asset>}

@example url_path: `/v1/chain/get_currency_balance`

@example ```js
eos.getCurrencyBalance(code, account, symbol)
```

*/
function getCurrencyBalance(code, account, symbol) {}

/**
@typedef {object} getCurrencyStatsResult
@property {asset} supply
@property {asset} max_supply
@property {account_name} issuer
*/

/**
@async
@memberof eos

@arg {name} code
@arg {string} symbol

@return {getCurrencyStatsResult}

@example url_path: `/v1/chain/get_currency_stats`

@example ```js
eos.getCurrencyStats(code, symbol)
```

*/
function getCurrencyStats(code, symbol) {}

/**
@typedef {object} getProducersResult
@property {vector} rows - one row per item, either encoded as hex String or JSON object
@property {double} total_producer_vote_weight - total vote
@property {string} more - fill lower_bound with this value to fetch more rows
*/

/**
Fetch smart contract data from producer.

@async
@memberof eos

@arg {bool} [json = false]
@arg {string} lower_bound
@arg {uint32} [limit = 50]

@return {getProducersResult}

@example url_path: `/v1/chain/get_producers`

@example ```js
eos.getProducers(json, lower_bound, limit)
```

*/
function getProducers(json, lower_bound, limit) {}

/**
@typedef {object} getProducerScheduleResult
@property {proposed} vector
*/

/**


@async
@memberof eos


@return {getProducerScheduleResult}

@example url_path: `/v1/chain/get_producer_schedule`

@example ```js
eos.getProducerSchedule()
```

*/
function getProducerSchedule() {}

/**
@typedef {object} getScheduledTransactionsResult
@property {transactions} vector
@property {string} more - fill lower_bound with this to fetch next set of transactions
*/

/**


@async
@memberof eos

@arg {bool} [json = false]
@arg {string} lower_bound - timestamp OR transaction ID
@arg {uint32} [limit = 50]

@return {getScheduledTransactionsResult}

@example url_path: `/v1/chain/get_scheduled_transactions`

@example ```js
eos.getScheduledTransactions(json, lower_bound, limit)
```

*/
function getScheduledTransactions(json, lower_bound, limit) {}

/**
@typedef {object} pushBlockResult
*/

/**
Append a block to the chain database.

@async
@memberof eos

@arg {signed_block} block

@example url_path: `/v1/chain/push_block`

@example ```js
eos.pushBlock(block)
```

*/
function pushBlock(block) {}

/**
@typedef {object} pushTransactionResult
@property {fixed_bytes32} transaction_id
@property {bytes} processed
*/

/**
Attempts to push the transaction into the pending queue.

@async
@memberof eos

@arg {signed_transaction} signed_transaction

@return {pushTransactionResult}

@example url_path: `/v1/chain/push_transaction`

@example ```js
eos.pushTransaction(signed_transaction)
```

*/
function pushTransaction(signed_transaction) {}

/**
Attempts to push transactions into the pending queue.

@async
@memberof eos

@arg {signed_transaction} signed_transaction

@return {vector<push_transaction.results>}

@example url_path: `/v1/chain/push_transactions`

@example ```js
eos.pushTransactions(signed_transaction)
```

*/
function pushTransactions(signed_transaction) {}

/**
@typedef {object} getActionsResult
@property {Array<ordered_action_result>} actions
@property {uint32} last_irreversible_block
@property {bool} [time_limit_exceeded_error]
*/

/**
@async
@memberof eos

@arg {account_name} account_name
@arg {int32} [pos] - An absolute sequence positon -1 is the end/last action
@arg {int32} [offset] - The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset)

@return {getActionsResult}

@example url_path: `/v1/history/get_actions`

@example ```js
eos.getActions(account_name, pos, offset)
```

*/
function getActions(account_name, pos, offset) {}

/**
@typedef {object} getTransactionResult
@property {transaction_id_type} id
@property {variant} trx
@property {block_timestamp_type} block_time
@property {uint32} block_num
@property {uint32} last_irreversible_block
@property {Array<variant>} traces
*/

/**
Retrieve a transaction from the blockchain.

@async
@memberof eos

@arg {transaction_id_type} id
@arg {uint32} [block_num_hint = 0] - A non-zero block number allows shorter transaction IDs (8 hex, 4 bytes)

@return {getTransactionResult}

@example url_path: `/v1/history/get_transaction`

@example ```js
eos.getTransaction(id, block_num_hint)
```

*/
function getTransaction(id, block_num_hint) {}

/**
@typedef {object} getKeyAccountsResult
@property {Array<account_name>} account_names
*/

/**
@async
@memberof eos

@arg {public_key_type} public_key

@return {getKeyAccountsResult}

@example url_path: `/v1/history/get_key_accounts`

@example ```js
eos.getKeyAccounts(public_key)
```

*/
function getKeyAccounts(public_key) {}

/**
@typedef {object} getControlledAccountsResult
@property {Array<account_name>} controlled_accounts
*/

/**
@async
@memberof eos

@arg {account_name} controlling_account

@return {getControlledAccountsResult}

@example url_path: `/v1/history/get_controlled_accounts`

@example ```js
eos.getControlledAccounts(controlling_account)
```

*/
function getControlledAccounts(controlling_account) {}

