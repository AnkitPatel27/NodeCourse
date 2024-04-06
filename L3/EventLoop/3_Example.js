
AsyncForEach([5,6,7,8],function A(i) {
    console.log(i);
});

[1,2,3,4].forEach(function B(i)  {
    console.log(i);
});


function AsyncForEach(array, cb) {
    array.forEach(function C(i)  {
        setTimeout(function D()  {
            cb(i);
        }, 0);
    });
}
