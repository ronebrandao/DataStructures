function transformArray(arr) {
  const b = [];
  for (let i = 0; i < arr.length; i++) {
    const first = i - 1 >= 0 ? arr[i - 1] : 0;
    const last = i + 1 > arr.length - 1 ? 0 : arr[i + 1];

    const sum = first + arr[i] + last;
    b.push(sum);
    console.log("resultado", sum);
  }

  return b;
}

function transformArray2(arr) {
  const b = [];
  for (let i = 0; i < arr.length; i++) {
    b[i] = arr[i];

    if (i > 0) {
      b[i] += arr[i - 1];
    }

    if (i < arr.length - 1) {
      b[i] += arr[i + 1];
    }
  }

  return b;
}

console.log(transformArray2([4, 0, 1, -2, 3]));
