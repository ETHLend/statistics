const LoanDataControllerABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "loanOffers",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "loanRequests",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLoanRequests",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInactiveLoans",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getCurrentState",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getLoanData",
      "outputs": [
        {
          "name": "mediumAmount",
          "type": "uint256"
        },
        {
          "name": "premiumAmount",
          "type": "uint256"
        },
        {
          "name": "collateralAmount",
          "type": "uint256"
        },
        {
          "name": "fundedCapital",
          "type": "uint256"
        },
        {
          "name": "outstandingLoanAmount",
          "type": "uint256"
        },
        {
          "name": "collateralToken",
          "type": "address"
        },
        {
          "name": "mediumOfExchangeToken",
          "type": "address"
        },
        {
          "name": "mediumOfExchange",
          "type": "uint8"
        },
        {
          "name": "collateralType",
          "type": "uint8"
        },
        {
          "name": "currentState",
          "type": "uint8"
        },
        {
          "name": "installments_count",
          "type": "uint8"
        },
        {
          "name": "peggedIndex",
          "type": "int8"
        },
        {
          "name": "startTimeoutTime",
          "type": "uint64"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getMediumAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },

    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getCollateralToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getCollateralType",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getCollateralAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getInstalmentAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getInstalmentPremium",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "isLastPayment",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getLoanTimes",
      "outputs": [
        {
          "name": "startTimeoutTime",
          "type": "uint256"
        },
        {
          "name": "startLoanTime",
          "type": "uint256"
        },
        {
          "name": "creationTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getLoanPartecipants",
      "outputs": [
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "lenders",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getLoanOfferInitialData",
      "outputs": [
        {
          "name": "minimumMediumAmount",
          "type": "uint256"
        },
        {
          "name": "maximumMediumAmount",
          "type": "uint256"
        },
        {
          "name": "minimumLoanDuration",
          "type": "uint256"
        },
        {
          "name": "maximumLoanDuration",
          "type": "uint256"
        },
        {
          "name": "acceptedCollaterals",
          "type": "bytes32[5]"
        },
        {
          "name": "creationTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLoanOffers",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },

  ];

  export default LoanDataControllerABI;