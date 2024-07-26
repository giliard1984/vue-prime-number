import dayjs from 'dayjs';

type PrimeResult = {
  approach: 'naive' | 'efficient'
  requestedAt: String
  message: String
  factors?: Number[]
  duration: Number
}

// this is the function that follows the naive approach
// this approach iterates through the array from 2 to the number - 1
export const isPrime = (n: number): PrimeResult => {
  const approach: PrimeResult['approach'] = 'naive';
  const start = performance.now();
  const factors = [1];

  // 1 is considered neither prime nor composite
  if (n <= 1)
    return {
      approach,
      requestedAt: dayjs().toISOString(),
      message: `1 is neither a prime number nor composite.`,
      factors,
      duration: performance.now() - start
    };

  // check from 2 to n-1
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) factors.push(i);
  }

  if (factors?.length > 2) {
    return {
      approach,
      requestedAt: dayjs().toISOString(),
      message: `${n} is NOT a prime number.`,
      factors,
      duration: performance.now() - start
    };
  }

  return {
    approach,
    requestedAt: dayjs().toISOString(),
    message: `${n} is a prime number.`,
    factors,
    duration: performance.now() - start
  };
};

// this is the function that follows the efficient approach
// 
export const isPrimeEfficent = (n: number): PrimeResult => {
  const approach: PrimeResult['approach'] = 'efficient';
  const start = performance.now();

  // 1 is considered neither prime nor composite
  if (n <= 1)
    return {
      approach,
      requestedAt: dayjs().toISOString(),
      message: `1 is neither a prime number nor composite.`,
      duration: performance.now() - start
    };

  // check if n is equal to 2 or 3.
  // the purpose is to skip processing as we know these numbers are prime
  if (n == 2 || n == 3)
    return {
      approach,
      requestedAt: dayjs().toISOString(),
      message: `${n} is a prime number.`,
      duration: performance.now() - start
    };

  // check whether n is divisible by 2 or 3
  // if a number is divisible by 2 or 3, which means its remaining value is zero, than it is not a prime number
  if (n % 2 == 0 || n % 3 == 0)
    return {
      approach,
      requestedAt: dayjs().toISOString(),
      message: `${n} is NOT a prime number.`,
      duration: performance.now() - start
    };

  // check from 5 to square root of n
  // we are not checking 4 here, because 4 is divisible by 2, which falls under the previous check
  // iterate i by (i+6)
  for (var i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0)
      return {
        approach,
        requestedAt: dayjs().toISOString(),
        message: `${n} is NOT a prime number.`,
        duration: performance.now() - start
      };
  }
  
  return {
    approach,
    requestedAt: dayjs().toISOString(),
    message: `${n} is a prime number.`,
    duration: performance.now() - start 
  };
};
