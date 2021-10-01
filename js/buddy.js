const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = (data) => {
    const buddies = data.results;
    for (const buddie of buddies) {
        // console.log(buddie.name.first, buddie.name.last);
        const buddiesDiv = document.getElementById('buddie')
        const p = document.createElement('p')
        p.innerText = `name:${buddie.name.title} ${buddie.name.first}  ${buddie.name.last} email:${buddie.imail}`;
        buddiesDiv.appendChild(p);

    }
    // console.log(data.results);
}