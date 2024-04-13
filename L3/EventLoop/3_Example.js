



function AsyncForEach(array) {
    array.forEach((i) => {
        setTimeout(() => {
            console.log(i);
        }, 0);
    });
}

AsyncForEach([5,6,7,8]);


[1,2,3,4].forEach((i) => {
    console.log(i);
    // delay()
});
