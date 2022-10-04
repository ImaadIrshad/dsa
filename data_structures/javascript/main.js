const address = ["0xC6562870DAFD763290e2E7B7fCcb5bf3A5c11864"];
const large = new Array(10).fill(
  "0xC6562870DAFD763290e2E7B7fCcb5bf3A5c11864"
);
function findAddress(array) {
  // O(n) --> Linear Time, n - number of inputs
  for (i = 0; i < array.length; i++) {
    if (array[i] === "0xC6562870DAFD763290e2E7B7fCcb5bf3A5c11864") {
      console.log(`Found address 0xC6562870DAFD763290e2E7B7fCcb5bf3A5c11864`);
    } else {
      break;
      console.log(`Address not found`);
    }
  }
}
findAddress(large)

// Log all pairs of array

const nonce = ["a", "b", "c", "d", "z"];

function pairsOfNonce(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
pairsOfNonce(nonce)

function test(n) {
  let nArray = [];
  for (let i = 0; i < n; i++) {
    nArray[i] = "ok";
  }
  console.log(`${nArray}`);
}
test(20)