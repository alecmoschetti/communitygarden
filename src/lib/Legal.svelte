<ul class="legal">
    <div class="contact">
        <li><a href=".">1-234-567-8910</a></li>
        <li><a href=".">communitytoolshed@gmail.com</a></li>
    </div>
    <div class="info">
        <li><a href=".">Code of Conduct</a></li>
        <li><a href=".">Accessibility Statement</a></li>
        <li><a href=".">Privacy Policy</a></li>
        <li><a href=".">Leave us a Review</a></li>
    </div>
</ul>

<style>
    ul.legal {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    a {
        font-size: .9rem;
    }
    .contact,
    .info
     {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    @media (min-width: 780px) {
        ul.legal {
            flex-flow: column wrap;
            justify-content: space-between;
            width: 50rem;
        }
        .contact,
        .info {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        li {
            margin: 0 .333rem;
        }
    }
</style>