//sw.js

self.addEventListener('install', function(event) {
	//activate immediately
	self.skipWaiting();
	console.log('SW installed', event);

	caches.open('frontinvale-v1').then(function(cache) {
		return cache.addAll([
 			'/frontinvale.github.io/',
 			'index.html',
			'css/main.css',
			'fonts/cpmono_v07_black.eot',
			'fonts/cpmono_v07_black.svg',
			'fonts/cpmono_v07_black.ttf',
			'fonts/cpmono_v07_black.woff',
			'fonts/cpmono_v07_black.woff2',
			'fonts/cpmono_v07_bold-webfont.woff',
			'fonts/cpmono_v07_bold-webfont.woff2',
			'fonts/cpmono_v07_extralight.eot',
			'fonts/cpmono_v07_extralight.svg',
			'fonts/cpmono_v07_extralight.ttf',
			'fonts/cpmono_v07_extralight.woff',
			'fonts/cpmono_v07_extralight.woff2',
			'fonts/cpmono_v07_light.eot',
			'fonts/cpmono_v07_light.svg',
			'fonts/cpmono_v07_light.ttf',
			'fonts/cpmono_v07_light.woff',
			'fonts/cpmono_v07_light.woff2',
			'fonts/cpmono_v07_plain.eot',
			'fonts/cpmono_v07_plain.svg',
			'fonts/cpmono_v07_plain.ttf',
			'fonts/cpmono_v07_plain.woff',
			'fonts/cpmono_v07_plain.woff2',
			'images/speakers/afonso-pacifer.jpg',
			'images/speakers/alda-rocha.jpg',
			'images/speakers/andrea-zambrana.jpg',
			'images/speakers/aryel-tupinamba.jpg',
			'images/speakers/cristina-luz.jpg',
			'images/speakers/cynthia-zanoni.jpg',
			'images/speakers/danielle-soldera.jpg',
			'images/speakers/eduardo-matos.jpg',
			'images/speakers/fernanda-bernardo.jpg',
			'images/speakers/marco-bruno.jpg',
			'images/speakers/ney-simoes.jpg',
			'images/speakers/talita-pagani.jpg',
			'images/speakers/william-grasel.jpg',
			'images/speakers/zeh-fernandes.jpg',
			'javascripts/frontinvale.js',
			'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
			'images/bg-about.png',
			'images/bg-header.jpg',
			'images/bg-place.png',
			'images/bg-schedule.png',
			'images/bg-sponsors.png',
			'images/bg-spot.png',
			'images/bg-talkers.jpg',
			'images/bg-welcome.png',
			'images/favicon.png',
			'images/font-logo-frontinvale.svg',
			'images/frontinvale-social.png',
			'images/frontinvale.png',
			'images/ic_facebook.svg',
			'images/icon-maps.svg',
			'images/icon-twitter.svg',
			'images/icon-youtube.svg',
			'images/img-pc.png',
			'images/img-pc2.png',
			'images/loading.gif',
			'images/logo-adesivos-para-mac.svg',
			'images/logo-beerjs-sjc.svg',
			'images/logo-casadocodigo.svg',
			'images/logo-css4html.svg',
			'images/logo-designa.svg',
			'images/logo-devnaestrada.svg',
			'images/logo-focusnetworks.svg',
			'images/logo-frontinsampa.png',
			'images/logo-frontinvale.svg',
			'images/logo-frontux.svg',
			'images/logo-gbgsjc.svg',
			'images/logo-gdgvp.svg',
			'images/logo-imasters.svg',
			'images/logo-locaweb.svg',
			'images/logo-novatec.svg',
			'images/logo-queroeducacao.png',
			'images/logo-queroeducacao.svg',
			'images/logo-studio-play.svg',
			'images/logo-toptal.svg',
			'images/logo-udacity.svg',
			'images/logo-unisal.svg '
		]);
	});
});

self.addEventListener("activate", function(event) {
	console.log('activated', event);
});

self.addEventListener("fetch", function(event) {
	console.log('Fech received request URL =>', event.request.url);

	event.respondWith(
    caches.match(event.request).then(function(response) {
			if (!response) return null;

			var URL = response.url;

			if (!URL) return response;

			if ( !URL.match(/sw.js/g) && URL.match(location.host) ) {
				caches.open('frontinvale-v1').then(function(cache) {
					return cache.put(event.request, response.clone());
				});
			}

			return response || fetch(event.request);
		}).catch(function(err) {
			console.error(err);
		})
  );
});
