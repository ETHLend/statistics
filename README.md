# statistics
This repository contains the ABI interfaces to fetch data from the ETHLend smart contracts and the Aave API endpoints.

##Fetching data through the smart contract interfaces

The ETHLend smart contract infrastructure references one specific contract, called the Loan Data Controller, that acts as a container for all the data regarding the onchain activity of the users. In the contract all the information of the loans created on the platform is stored, and from that it's possible to calculate interesting statistics like the users activity, amount of assets locked and so on. The following document describes how to fetch data from the Loan Data Controller and to perform proper conversion. We also provide information about the API endpoints for statistics that do the heavy lifting for integrators and allows to fetch data quickly and easily.

###Loan Data Controller methods

Address of the Loan Data Controller

Mainnet:

0x551325450cc75a0122ad6d156823d05090151d0c

Kovan testnet:

0xec21584a997e5ff90becba025a467770e706bda2


###Description of the methods of the Loan Data Controller

```getLoanRequests() returns(address[])```

returns the list of all the loan requests created on the platform


```getLoanOffers() returns(address[])```

returns the list of all the loan offers created on the platform



```getLoanData() returns(LoanData)```

Returns an object defined as follows:

```
      {
          "name": "mediumAmount", //amount of the loan in wei, or if it's an ETHUSD loan, in USDcents
          "type": "uint256"
        },
        {
          "name": "premiumAmount", //amount of the total premium in wei, or if it's an ETHUSD loan, in USDcents
          "type": "uint256"
        },
        {
          "name": "collateralAmount", //amount of the collateral in wei
          "type": "uint256"
        },
        {
          "name": "fundedCapital", //actual amount funded: equal to mediumAmount if the loan is ETH/ERC20, or if it's pegged the equivalent amount in ETH of the                             //pegged loan at the instant of funding
          "type": "uint256"
        },
        {
          "name": "collateralToken", //address of the collateral token in the corresponding network
          "type": "address"
        },
        {
          "name": "mediumOfExchangeToken", //address of the medium of exchange (loan currency) in the corresponding network
          "type": "address"
        },
        {
          "name": "mediumOfExchange", //Type of the loan currency, check the MediumOfExchange enum below
          "type": "uint8"
        },
        {
          "name": "collateralType", //Type of the collateral, check the CollateralType enum below
          "type": "uint8"
        },
        {
          "name": "currentState", //state of the loan (look for the State enum below)
          "type": "uint8"
        },
        {
          "name": "installments_count",
          "type": "uint8"
        }
}
```




``` 

The following Enumeratives are used in the ```getLoanData()``` return value:

```
enum State {
    Init = 0,
    WaitingForCollateral = 1,
    Funding = 2,
    Funded = 3,
    WaitingForPayback = 4,
    Finished = 5,
    Cancelled = 6,
    Defaulted = 7,
    TokenPriceIsBad = 8,
    Timeout = 9,
    CollateralCalled = 10,
    WaitingForFunds = 11,
    WaitingForBorrower = 12,
    OfferTaken = 13
}

enum MediumOfExchange {
    ETH = 0,
    ERC20 = 1,
    BTC = 2
}

enum CollateralType {
    ERC20 = 0,
    ETH = 1,
    BTC = 2
}
```

