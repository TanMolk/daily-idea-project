import {Web3} from "web3";
import TodoListContract from "../contract/TodoListContract.json"
import ApplicationConfig from "../config/ApplicationConfig";

class Web3Util {

    provider;
    client;
    contract;

    async init() {
        const ethereum = window.ethereum
        const metamask = ethereum.providerMap.get("MetaMask");

        if (ethereum && metamask) {
            let selectedAddress = metamask.selectedAddress;
            if (!selectedAddress) {
                await metamask.enable();
            }
            let web3 = new Web3(metamask);

            this.provider = metamask;
            this.client = web3;
            this.contract = new this.client.eth.Contract(TodoListContract.abi, ApplicationConfig.CONTRACT_ADDRESS)
        } else {
            alert("请安装MetaMask钱包")
        }
    }

    getTodoList() {
        return this.contract.methods.getTodoList().call({from: this.provider.selectedAddress});
    }

    addTodo(name) {
        return this.contract.methods.addTodo(name).send({from: this.provider.selectedAddress});
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Web3Util();