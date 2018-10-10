$('#inputButton').click(() => {
    const words = $('#inputBox').val().match(/[\w-]+/g);

    const counts = {};
    words.forEach(word => {
        counts[word] = (counts[word] || 0) + 1;
    });

    const keys = Object.keys(counts);
    console.log(keys);
    const aCounts = keys.map(k => [k, counts[k]]);
    console.log(aCounts);

    const tBody = $('#word-values tbody');
    aCounts.forEach((count) => {
       // console.log(count, count[0], count[1]);
       tBody.append(`<tr><td>${count[0]}</td><td>${count[1]}</td></tr>`)
    });
});
