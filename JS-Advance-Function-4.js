function solution() {
    let input = ''
    function append(string) {
        input += string;
    }
    function removeStart(n) {
       input = input.slice(n);
    }
    function removeEnd(n) {
      input = input.slice(0, input.length-n);
    }
    function print() {
        console.log(input);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print,
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();