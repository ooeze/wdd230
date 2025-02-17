document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('memberContainer');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error fetching member data:', error));

    function displayMembers(members) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;
            memberContainer.appendChild(memberCard);
        });
    }

    gridViewButton.addEventListener('click', () => {
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });

    listViewButton.addEventListener('click', () => {
        memberContainer.classList.add('list-view');
        memberContainer.classList.remove('grid-view');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });
});
