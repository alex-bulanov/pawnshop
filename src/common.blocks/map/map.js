const DESTOP__WIDTH = 1140;

const CHAROIT_DATA = [
  {
    name: 'ул. Кирова, 70',
    сoordinates: [53.198262, 45.020301],
    opening: 'пн-сб: 9:15–19:15 <br> вс: 9:15–14:45',
    phone: '<a href="tel:+78412251345">тел: +7 (8412) 251-345</a>',
  },
  {
    name: 'ул. Кирова, 73',
    сoordinates: [53.198154, 45.021379],
    opening: 'пн-сб: 9:15–18:45 <br> вс: 9:15–17:45',
    phone: '<a href="tel:+78412250542">тел: +7 (8412) 250-542</a>',
  },
  {
    name: 'ул. Кирова, 69',
    сoordinates: [53.196471, 45.020463],
    opening: 'пн-сб: 9:00–18:45 <br> вс: 9:00–14:45',
    phone: '<a href="tel:+78412258861">тел: +7 (8412) 258-861</a>',
  },
  {
    name: 'ул. пр-кт Строителей, 21а',
    сoordinates: [53.223711, 44.925062],
    opening: 'пн-сб: 9:00–18:30 <br> вс: 9:00–14:30',
    phone: '<a href="tel:+78412774867">тел: +7 (8412) 774-867</a>',
  },
  {
    name: 'ул. Луначарского, 4',
    сoordinates: [53.205835, 45.009423],
    opening: 'пн-сб: 9:00–18:45 <br> вс: 9:00–15:45',
    phone: '<a href="tel:+78412492070">тел: +7 (8412) 492-070</a>',
  },
  {
    name: 'ул. пр-кт Победы, 31',
    сoordinates: [53.217187, 44.981000],
    opening: 'пн-сб: 9:00–19:45 <br> вс: 9:00–14:45',
    phone: '<a href="tel:+78412517222">тел: +7 (8412) 517-222</a>',
  },
];

const charoitMaps = document.querySelectorAll('.map');

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

        CHAROIT_DATA.forEach((data) => {
          const pin = [data.сoordinates, {
            balloonContentHeader: data.name,
            balloonContentBody: data.opening,
            balloonContentFooter: data.phone,
            hintContent: data.name,
          }];

          const charoitPlacemark = new ymaps.Placemark(...pin);
          currentMap.geoObjects.add(charoitPlacemark);
        });
      });
    });
  } catch (error) {
    console.error('Something went wrong', error);
  }
}

document.addEventListener('DOMContentLoaded', loadMaps);
