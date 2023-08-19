// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoListContract {

    struct Todo {
        string name;
        bool ifCompleted;
    }

    mapping(address => Todo[]) private dataStorage;

    function getTodoList() view public returns (Todo[] memory){
        return dataStorage[msg.sender];
    }

    function addTodo(string memory name) public {
        dataStorage[msg.sender].push(Todo(name, false));
    }
}
