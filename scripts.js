function makeHomework(course, callback) {
    console.log(`Okay, ok, I'm going to do my ${course}"homework now!`);
    setTimeout(callback, 2000)
}

function doneWithHomework() {
    console.log("Look mom and dad! I'm done with my homework")
}

makeHomework("math", doneWithHomework)