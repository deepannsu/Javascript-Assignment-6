/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (categoryGenre !== null) {
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString() {
            return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
        `;
        }
    }

    const contentItems = [
        new ContentItem(0, "Virat Kohli", "Virat Kohli is an Indian cricketer and former captain of the Indian national cricket team. He is considered one of the best batsmen in the world.", "Cricket Player"),
        new ContentItem(1, "Steve Smith", "Steve Smith is an Australian cricketer known for his exceptional batting skills and former captain of the Australian national cricket team.", "Cricket Player"),
        new ContentItem(2, "Kane Williamson", "Kane Williamson is a New Zealand cricketer and the captain of the New Zealand national cricket team. He is known for his calm and composed style of play.", "Cricket Player"),
        new ContentItem(3, "Joe Root", "Joe Root is an English cricketer and the captain of the England national cricket team. He is known for his elegant batting technique.", "Cricket Player"),
        new ContentItem(4, "Babar Azam", "Babar Azam is a Pakistani cricketer and the captain of the Pakistan national cricket team. He is known for his aggressive batting style.", "Cricket Player")

    ];

    const themeTitle = "My Favorite Cricket Player";
    $('h2').text(themeTitle);

    const contentList = $('#content-item-list');
    contentItems.forEach(contentItem => {
        const itemHTML = contentItem.toString();
        contentList.append(itemHTML);
    });

    $('.content-item-wrapper').css({
        border: '1px solid #000',
        width: '300px',
        padding: '10px',
        margin: '10px auto',
    });

    $('#updateSuccessfulButton').click(function () {
        contentItems[0].updateContentItem(0, "Rohit Sharma", null, null);
        $('#content-item-0 h2').text(contentItems[0].name);
    });

    $('#updateUnsuccessfulButton').click(function () {
        contentItems[1].updateContentItem(0, "Shreyas Iyer", null, null);
        $('#content-item-1 h2').text(contentItems[1].name);
    });


});


