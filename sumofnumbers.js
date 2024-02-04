const testNums = [1, 2, 3, 4];

function sumFour(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFour(testNums));

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
};

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }

  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

const SumTheSimpleWay = (nums) => {
  const total = _.reduce(nums, function (memo, num) {
    return memo + num;
  }, 0);
  return total;
};

console.log(SumTheSimpleWay(testNums));
