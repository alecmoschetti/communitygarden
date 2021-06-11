<script context="module">
	export const prerender = true;
</script>
<script>
    import { mapAPI } from '../../static/_config.js';
    import { onMount } from 'svelte';
    let map;
    let maxBounds = [
        [5.499550, -167.276413], //Southwest
        [83.162102, -52.233040]  //Northeast
    ];
    onMount(async () => {
        setTimeout(() => {
            map = L.map('camasMap').setMaxBounds(maxBounds);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: mapAPI.apiKey,
        }).addTo(map);
        map.setView([45.587063, -122.399536], 9);
        L.marker([45.587063, -122.399536]).addTo(map);
        return () => {
            console.log('contact map destroyed');
        }
        }, 500);
    });
</script>

<svelte:head>
    <title>Contact</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
</svelte:head>

<h1>
    Contact Us!
</h1>
<div class="grid">
    <div>
        <h3>We are located in Camas, Washington</h3>
        <h4>Roughly 20 minutes outside of Portland, Oregon</h4>
        <p>Once you place an order for a rental, you'll get a confirmation email of your order and the exact address of the toolshed</p>
        <p>Need to cancel or change your rental order? <span>email us at: communitytoolshed@gmail.com</span></p>
        <p>Need to reach us even faster? <br><span>call us at: 1-234-567-8910</span></p>
    </div>
    <div id="camasMap"></div>
</div>


<style>
    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        gap: 2rem;
    }
    #camasMap {
        width: 100%;
        max-width: 450px;
        height: 400px;
        border-radius: 12px;
    }
    h3 {
        max-width: 18ch;
    }
    h4 {
        max-width: 28ch;
    }
    p {
        max-width: 40ch;
    }
    @media (min-width: 780px) {
        .grid {
            grid-template-columns: 45% 55%;
        }
        #camasMap {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
        }
        .grid > div {
            grid-column: 2 / span 1;
        }
    }
</style>



