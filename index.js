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

$.get("https://quotable.io/quotes?page=1", function (response) {
    const quotes = response.results;

    quotes.map((quote) => {
        const content = $(`
                <div class="content">
                    <div class="content-title">
                        <p>${quote.content}</p>
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
});
