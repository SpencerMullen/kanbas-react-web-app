function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <>
            <h2>Array Index and Length</h2>
            length1 = {length1}<br />
            index1 = {index1}<br />
        </>
    );
}

function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');
    numberArray1.splice(2, 1);  // remove 1 item starting at 2
    stringArray1.splice(1, 1);

    return (
        <>
            <h2>Add and remove data to/from arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
        </>
    );
}

function ForLoops() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
        i < stringArray1.length;
        i++) {
        const string1 = stringArray1[i];
        stringArray2.push(
            string1.toUpperCase());
    }

    return (
        <>
            <h2>For Loops</h2>
            stringArray2 = {stringArray2}<br />
        </>
    )
}

function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <>
            <h2>Map Function</h2>
            squares = {squares}<br />
            cubes = {cubes}<br />
        </>
    )
}

function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');

    return (
        <>
            <h2>Find Function</h2>
            four = {four}<br />
            string3 = {string3}<br />
        </>
    )
}

function FindIndexFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <>
            <h2>FindIndex Function</h2>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<br />
        </>
    )
}

function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <>
            <h2>Filter Function</h2>
            numbersGreaterThan2 = {numbersGreaterThan2}<br />
            evenNumbers = {evenNumbers}<br />
            oddNumbers = {oddNumbers}<br />
        </>
    )
}

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];

    return (
        <>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndexFunction />
            <FilterFunction />
        </>
    )
}

export default WorkingWithArrays