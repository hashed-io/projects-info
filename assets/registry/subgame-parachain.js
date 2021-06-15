// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

const definitions = {
    types: [
      {
        // on all versions
        minmax: [0, undefined],
        types: {
          "Address": "AccountId",
          "BlockNumber": "U32",
          "LeasePeriod": "BlockNumber",
          "Weight": "u64",
          "Keys": "SessionKeysPolkadot",
          "DispatchInfo": {
            "type": "struct",
            "type_mapping": [
              [
                "weight",
                "Weight"
              ],
              [
                "class",
                "DispatchClass"
              ],
              [
                "paysFee",
                "Pays"
              ]
            ]
          },
          "DispatchResult": {
            "type": "enum",
            "type_mapping": [
              [
                "Ok",
                "Null"
              ],
              [
                "Error",
                "DispatchError"
              ]
            ]
          },
          "Timepoint": {
            "type": "struct",
            "type_mapping": [
              [
                "height",
                "BlockNumber"
              ],
              [
                "index",
                "u32"
              ]
            ]
          },
          "Multisig": {
            "type": "struct",
            "type_mapping": [
              [
                "when",
                "Timepoint"
              ],
              [
                "deposit",
                "Balance"
              ],
              [
                "depositor",
                "AccountId"
              ],
              [
                "approvals",
                "Vec<AccountId>"
              ]
            ]
          },
          "BalanceLock<Balance, BlockNumber>": {
            "type": "struct",
            "type_mapping": [
              [
                "id",
                "LockIdentifier"
              ],
              [
                "amount",
                "Balance"
              ],
              [
                "reasons",
                "Reasons"
              ]
            ]
          },
          "ProxyType": {
            "type": "enum",
            "value_list": [
              "Any",
              "NonTransfer",
              "Governance",
              "Staking",
              "DeprecatedSudoBalances",
              "IdentityJudgement",
              "CancelProxy"
            ]
          },
          "ReferendumInfo": {
            "type": "enum",
            "type_mapping": [
              [
                "Ongoing",
                "ReferendumStatus"
              ],
              [
                "Finished",
                "ReferendumInfoFinished"
              ]
            ]
          },
          "CompactAssignments#23-?": "CompactAssignmentsLatest",
          "RefCount": "u32",
          "Box<<T as Config>::Call>": "Call",
          "Box<<T as Config<I>>::Proposal>": "Proposal",
          "AccountInfo": "AccountInfoWithProviders",
          "Address#28-?": "MultiAddress",
          "LookupSource#28-?": "MultiAddress",
          "Keys#28-29": {
            "type": "struct",
            "type_mapping": [
              [
                "grandpa",
                "AccountId"
              ],
              [
                "babe",
                "AccountId"
              ],
              [
                "im_online",
                "AccountId"
              ],
              [
                "para_validator",
                "AccountId"
              ],
              [
                "para_assignment",
                "AccountId"
              ],
              [
                "authority_discovery",
                "AccountId"
              ]
            ]
          },
          "ValidatorPrefs#28-?": "ValidatorPrefsWithBlocked",
          "Keys#30-?": "SessionKeys7B",
          "AccountInfo#30-?": "AccountInfoWithTripleRefCount",
          "GameIndex": "u32",
          "ChipBalance": "u128",
          "GameMode": "u8",
          "CommodityId": "u128",
          "CommodityInfo": "Vec<u8>",
          "CommodityLimit": "u128",
          "UserCommodityLimit": "u64",
          "BlockHash": "h256",
          "ChipsDetail": {
            "type": "struct",
            "type_mapping": [
              [
                "balance",
                "Balance"
              ],
              [
                "reserve",
                "Reserve"
              ]
            ]
          },
          "Template": {
            "type": "struct",
            "type_mapping": [
              [
                "template_id",
                "TemplateId"
              ],
              [
                "template_name",
                "TemplateName"
              ]
            ]
          },
          "GameInfo": {
            "type": "struct",
            "type_mapping": [
              [
                "owner",
                "Owner"
              ],
              [
                "block_number",
                "BlockNumber"
              ],
              [
                "bet_block_number",
                "DrawBlockNumber"
              ],
              [
                "amount",
                "Amount"
              ]
            ]
          }
        }
      }
    ]
  };
  
  export default definitions;
