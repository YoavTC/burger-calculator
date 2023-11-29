fetch('list.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Sort the data by score
                data.sort((a, b) => b.score - a.score);

                // Handle the sorted JSON data
                displayList(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });


function displayList(sortedList) {
    const toplistDiv = document.getElementById('toplist');

    // Create an unordered list
    const ul = document.createElement('ul');

    // Apply a style to hide the default marker
    ul.style.listStyleType = 'none';

    // Iterate over the sorted list and create list items
    sortedList.forEach((entry, index) => {
        const li = document.createElement('li');

        // Create a span to wrap the link and the text content
        const contentWrapper = document.createElement('span');

        // Create an <a> tag and set its href attribute
        const link = document.createElement('a');
        link.href = entry.url;
        link.target = "_blank"

        const icon = document.createElement('img');
        icon.src = "icon.svg"
        link.appendChild(icon);

        // Append the link to the span
        li.appendChild(link);

        // Append the text content to the span
        contentWrapper.textContent += ` ${entry.name}: ${entry.score}`;

        // Append the span to the list item
        li.appendChild(contentWrapper);

        // Append the list item to the unordered list
        ul.appendChild(li);
    });

    // Append the unordered list to the "toplist" div
    toplistDiv.appendChild(ul);
}