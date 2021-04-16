const headerBtn = document.querySelector('.header__button');
const sidebarBtn = document.querySelector('.sidebar__button');
const sb = document.querySelector('.sidebar');
const header = document.querySelector('.header')
const content = document.querySelector('.content'); ''


headerBtn.addEventListener('click', () => {
    sb.setAttribute('style', 'transform: none;')
    header.setAttribute('style', 'width: calc(100% - 240px);margin-left:240px;')
    headerBtn.setAttribute('style', 'display:none;')
    content.classList.add('content_wide')
})
sidebarBtn.addEventListener('click', () => {
    sb.setAttribute('style', 'transform: translateX(-240px); visibility: hidden;');
    header.setAttribute('style', 'width:100%;')
    headerBtn.removeAttribute('style', 'display:none;')
    content.classList.remove('content_wide')
})



//============================================================================================
function pushForward(arr, n) {
    let input = `[${arr}], K=${n}.`;
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    console.log(`Test with arguments: ${input} Result: [${arr}]`)
}

pushForward([1, 2, 3, 4, 5], 3)
pushForward([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 9)

function countSequences(str1, str2) {
    const result = [];
    const arr = str1.split('');

    arr.reduce((acc, item) => {
        if (str2.indexOf(`${acc}${item}`) === -1) {
            return item;
        }
        result.push(`${acc}${item}`);
        return `${acc}${item}`;
    }, '')

    const res = result.sort((a, b) => b.length - a.length)[0];
    console.log(`Test with arguments: "${str1}", "${str2}". Result: "${res}" with ${res.length} matches in a row.`);
    return res;
}

countSequences('aababba', 'abbaabcd')
countSequences('aasdscdcdcabbbavvvcvbgbbabadba', 'abbaaasdccadcdcagbbbavvvabcd')