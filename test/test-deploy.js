const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory
    let simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function() {
        const currentValue = await simpleStorage.retrieve()
        const expectValue = 0;

        assert.equal(currentValue.toString(), expectValue)
        expect(currentValue.toString(), expectValue)
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"

        const transactionResponnse = await simpleStorage.store(expectedValue)
        await transactionResponnse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue.toString(), expectedValue)
    })
})