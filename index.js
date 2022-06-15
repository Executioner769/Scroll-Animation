/* 
<div class="content">
    <div class="content-title">
        <p></p>
    </div>
    <div class="content-text">
        <p></p>
    </div>
</div> 
*/

const list = $("#list");

function showContents(contents) {
    const trigger = window.innerHeight * 0.8;

    contents.each(function (index, content) {
        const contentPosition = content.getBoundingClientRect().top;

        if (contentPosition < trigger) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
}

// Make http:get to https://goquotes-api.herokuapp.com/api/v1/random?count=10
$.get(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=20",
    function ({ quotes }) {
        quotes.map((quote) => {
            const content = $(`
                <div class="content">
                    <div class="content-title">
                        <p>${quote.text}</p>
                    </div>
                    <div class="content-text">
                        <p>${quote.author}</p>
                    </div>
                </div>
            `);
            list.append(content);
        });

        const contents = $(".content");

        showContents(contents);

        // Add scroll event to the window
        $(window).on("scroll", showContents.bind(null, contents));
    }
);
