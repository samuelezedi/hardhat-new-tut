// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12; // 0.8.19

contract SimpleStorage {
    // boolean, uint, int, address, bytes
    uint256 favoriteNumber;
    // People public person = People({favoriteNumber:2, name: "Samuel"});

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
