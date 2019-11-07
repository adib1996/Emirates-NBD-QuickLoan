# Emirates NBD - Quick Loan

**SME Loans through Emirates NBD, powered by Oracle smart contracts**

[![Website](/assets/demo.gif)](http://ec2-34-248-9-135.eu-west-1.compute.amazonaws.com/)
**3rd place winner of the [in5 Blockchain Challenge](https://infive.ae/blockchainchallenge/)**
*** 

#### Requesting Loans
Requested loans are instantiated as smart contracts on the Oracle Blockchain. Users request an amount, provide details on reason, repayment timeline & offer other incentives which are all incorporated in the smart contract.

#### Investing in Loans
Other users of the platform can choose to invest in certain loans based on the amount required, incentives given and repayment timeline. When a user chooses to invest a transaction occurs using the [Emirates NBD API](https://www.emiratesnbdlab.com/) and this triggers the respective loan smart contract which gets updated with the appropriate transaction ID and details.

#### Example
A use case of this would be a coffee shop requesting an amount to purchase/repair a machine. They would request a loan, provide repayment timeline & offer a discount incentive to those who invest. Users on the platform would then have the opportunity to help support the business while making returns on their investment. The use of [Oracles Blockchain](https://www.oracle.com/ae/blockchain/) allows it to function as a decentralized P2P system.

## Architecture
![Architecture Diagram](/assets/architecture.png)

The following technologies are used:
* [Oracle Blockchain](https://www.oracle.com/ae/blockchain/) - Smart Contracts
* [Emirates NBD API](https://www.emiratesnbdlab.com/home) - Transactions