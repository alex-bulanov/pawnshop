const DESTOP__WIDTH = 1140;
const mapData = document.querySelector('.map__data');
const charoitMaps = document.querySelectorAll('.map');
const mapDataItem = mapData.querySelectorAll('.map__item');
const charoitData = [];
const sliderCards = document.querySelectorAll('.js-map');
const markerCoortds = [];

mapDataItem.forEach((item) => {
  const currentPinData = {};
  currentPinData.сoordinates = [];
  currentPinData.name = item.querySelector('.map__marker-title').textContent;
  currentPinData.сoordinates.push(Number(item.querySelector('.map__marker').dataset.x));
  currentPinData.сoordinates.push(Number(item.querySelector('.map__marker').dataset.y));
  currentPinData.opening = item.querySelector('.map__marker-opening').textContent;
  currentPinData.phone = item.querySelector('.map__marker-phone').textContent.replace('тел: ', '');
  charoitData.push(currentPinData);
  markerCoortds.push(currentPinData.сoordinates);
});

function loadMaps() {
  try {
    ymaps.load().then((maps) => {
      charoitMaps.forEach((charoitMap) => {
        const currentMap = new maps.Map(charoitMap, {
          center: [53.196842, 45.020711],
          zoom: 16,
        });

        currentMap.behaviors.enable(['multiTouch']);
        if (/Android|webOS|iPhone|iPad|iPod|Samsung|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < DESTOP__WIDTH) {
          currentMap.behaviors.disable(['drag']);
          const zoomControlObj = currentMap.controls.get('zoomControl');
          zoomControlObj.options.set('size', 'small');
          zoomControlObj.options.set('position', {
            left: '10px',
            top: '48px',
          });
        }

        const markersCollection = new ymaps.GeoObjectCollection(null);

        charoitData.forEach((data) => {
          const pin = [data.сoordinates, {
            balloonContentHeader: data.name,
            balloonContentBody: data.opening,
            balloonContentFooter: `<a class="pin" href="tel:${data.phone}">тел: ${data.phone}</a>`,
            hintContent: data.name,
          }];

          markersCollection.add(new ymaps.Placemark(...pin));
          currentMap.geoObjects.add(markersCollection);
        });

        if (charoitMap.id === 'map-slider') {
          sliderCards.forEach((item) => {
            item.addEventListener('click', (event) => {
              if (event.target.parentNode.classList.contains('js-map')) {
                const currentItem = event.target.parentNode;
                const index = currentItem.dataset.value.replace('address-', '');
                const coords = markerCoortds[index];

                currentMap.panTo(coords, {
                  flying: 1,
                }).then(() => markersCollection.get(index).balloon.open(coords));
              }
            });
          });
        }
      });
    });
  } catch (error) {
    console.error('Something went wrong', error);
  }
}


document.addEventListener('DOMContentLoaded', loadMaps);

