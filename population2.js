db.zipcodes.aggregate([{$group:{_id:"$city",totalpop:{$sum:"$pop"}}}])
{ _id: 'ENON VALLEY', totalpop: 2421 }
{ _id: 'NULATO', totalpop: 492 }
{ _id: 'WEST WAREHAM', totalpop: 3919 }
{ _id: 'SILVER CITY', totalpop: 38712 }
{ _id: 'NOGALES', totalpop: 25506 }
{ _id: 'BENT MOUNTAIN', totalpop: 2388 }
{ _id: 'WEST BARNSTABLE', totalpop: 2311 }
{ _id: 'BIG COVE TANNERY', totalpop: 2178 }
{ _id: 'INDIAHOMA', totalpop: 1385 }
{ _id: 'FORT WAYNE', totalpop: 261863 }
{ _id: 'WEST YELLOWSTONE', totalpop: 1987 }
{ _id: 'HOUSE', totalpop: 235 }
{ _id: 'PERTH', totalpop: 125 }
{ _id: 'PISGAH FOREST', totalpop: 5623 }
{ _id: 'BIRCHLEAF', totalpop: 997 }
{ _id: 'HANFORD', totalpop: 44686 }
{ _id: 'ALTO PASS', totalpop: 912 }
{ _id: 'DEVEREUX', totalpop: 8908 }
{ _id: 'OLGA', totalpop: 1029 }
{ _id: 'CEDAR VALE', totalpop: 1267 }
Type "it" for more
it
{ _id: 'BLUE GRASS', totalpop: 7737 }
{ _id: 'MEADOW', totalpop: 1764 }
{ _id: 'PINELAND', totalpop: 2204 }
{ _id: 'CATAULA', totalpop: 1108 }
{ _id: 'SEARSBORO', totalpop: 464 }
{ _id: 'BROOKFIELD', totalpop: 83096 }
{ _id: 'SHENANDOAH', totalpop: 22559 }
{ _id: 'SMICKSBURG', totalpop: 2236 }
{ _id: 'BECKER', totalpop: 3589 }
{ _id: 'WHITESVILLE', totalpop: 1818 }
{ _id: 'TARAWA TERRACE', totalpop: 11054 }
{ _id: 'MALOY', totalpop: 81 }
{ _id: 'CIRCLE', totalpop: 1344 }
{ _id: 'SAINT JACOB', totalpop: 5477 }
{ _id: 'PORT ORFORD', totalpop: 1799 }
{ _id: 'ANNAPOLIS', totalpop: 28585 }
{ _id: 'LEETONIA', totalpop: 4281 }
{ _id: 'WESTBY', totalpop: 4805 }
{ _id: 'HAWI', totalpop: 1741 }
{ _id: 'COLERAIN', totalpop: 3709 }
Type "it" for more
db.zipcodes.aggregate([{$sort:{pop:-1}}])
{ _id: '60623',
  city: 'CHICAGO',
  loc: [ -87.7157, 41.849015 ],
  pop: 112047,
  state: 'IL' }
{ _id: '11226',
  city: 'BROOKLYN',
  loc: [ -73.956985, 40.646694 ],
  pop: 111396,
  state: 'NY' }
{ _id: '10021',
  city: 'NEW YORK',
  loc: [ -73.958805, 40.768476 ],
  pop: 106564,
  state: 'NY' }
{ _id: '10025',
  city: 'NEW YORK',
  loc: [ -73.968312, 40.797466 ],
  pop: 100027,
  state: 'NY' }
{ _id: '90201',
  city: 'BELL GARDENS',
  loc: [ -118.17205, 33.969177 ],
  pop: 99568,
  state: 'CA' }
{ _id: '60617',
  city: 'CHICAGO',
  loc: [ -87.556012, 41.725743 ],
  pop: 98612,
  state: 'IL' }
{ _id: '90011',
  city: 'LOS ANGELES',
  loc: [ -118.258189, 34.007856 ],
  pop: 96074,
  state: 'CA' }
{ _id: '60647',
  city: 'CHICAGO',
  loc: [ -87.704322, 41.920903 ],
  pop: 95971,
  state: 'IL' }
{ _id: '60628',
  city: 'CHICAGO',
  loc: [ -87.624277, 41.693443 ],
  pop: 94317,
  state: 'IL' }
{ _id: '90650',
  city: 'NORWALK',
  loc: [ -118.081767, 33.90564 ],
  pop: 94188,
  state: 'CA' }
{ _id: '60620',
  city: 'CHICAGO',
  loc: [ -87.654251, 41.741119 ],
  pop: 92005,
  state: 'IL' }
{ _id: '60629',
  city: 'CHICAGO',
  loc: [ -87.706936, 41.778149 ],
  pop: 91814,
  state: 'IL' }
{ _id: '60609',
  city: 'CHICAGO',
  loc: [ -87.653279, 41.809721 ],
  pop: 89762,
  state: 'IL' }
{ _id: '60618',
  city: 'CHICAGO',
  loc: [ -87.704214, 41.946401 ],
  pop: 88377,
  state: 'IL' }
{ _id: '11373',
  city: 'JACKSON HEIGHTS',
  loc: [ -73.878551, 40.740388 ],
  pop: 88241,
  state: 'NY' }
{ _id: '91331',
  city: 'ARLETA',
  loc: [ -118.420692, 34.258081 ],
  pop: 88114,
  state: 'CA' }
{ _id: '11212',
  city: 'BROOKLYN',
  loc: [ -73.914483, 40.662474 ],
  pop: 87079,
  state: 'NY' }
{ _id: '90280',
  city: 'SOUTH GATE',
  loc: [ -118.201349, 33.94617 ],
  pop: 87026,
  state: 'CA' }
{ _id: '11385',
  city: 'RIDGEWOOD',
  loc: [ -73.896122, 40.703613 ],
  pop: 85732,
  state: 'NY' }
{ _id: '10467',
  city: 'BRONX',
  loc: [ -73.871242, 40.873671 ],
  pop: 85710,
  state: 'NY' }
Type "it" for more
it
{ _id: '48185',
  city: 'WESTLAND',
  loc: [ -83.374908, 42.318882 ],
  pop: 84712,
  state: 'MI' }
{ _id: '60608',
  city: 'CHICAGO',
  loc: [ -87.669444, 41.851482 ],
  pop: 84518,
  state: 'IL' }
{ _id: '10002',
  city: 'NEW YORK',
  loc: [ -73.987681, 40.715231 ],
  pop: 84143,
  state: 'NY' }
{ _id: '90044',
  city: 'LOS ANGELES',
  loc: [ -118.290119, 33.955089 ],
  pop: 83958,
  state: 'CA' }
{ _id: '60625',
  city: 'CHICAGO',
  loc: [ -87.704157, 41.970325 ],
  pop: 83401,
  state: 'IL' }
{ _id: '11207',
  city: 'BROOKLYN',
  loc: [ -73.893957, 40.670486 ],
  pop: 83158,
  state: 'NY' }
{ _id: '92335',
  city: 'FONTANA',
  loc: [ -117.455114, 34.079351 ],
  pop: 81255,
  state: 'CA' }
{ _id: '11203',
  city: 'BROOKLYN',
  loc: [ -73.934888, 40.650496 ],
  pop: 80566,
  state: 'NY' }
{ _id: '19143',
  city: 'PHILADELPHIA',
  loc: [ -75.228819, 39.944815 ],
  pop: 80454,
  state: 'PA' }
{ _id: '78521',
  city: 'BROWNSVILLE',
  loc: [ -97.461236, 25.922103 ],
  pop: 79463,
  state: 'TX' }
{ _id: '90250',
  city: 'HOLLY PARK',
  loc: [ -118.346978, 33.913214 ],
  pop: 78511,
  state: 'CA' }
{ _id: '11211',
  city: 'BROOKLYN',
  loc: [ -73.956283, 40.709476 ],
  pop: 78338,
  state: 'NY' }
{ _id: '11208',
  city: 'BROOKLYN',
  loc: [ -73.873649, 40.676191 ],
  pop: 78322,
  state: 'NY' }
{ _id: '10314',
  city: 'STATEN ISLAND',
  loc: [ -74.147218, 40.603915 ],
  pop: 78118,
  state: 'NY' }
{ _id: '60651',
  city: 'CHICAGO',
  loc: [ -87.739307, 41.902509 ],
  pop: 78082,
  state: 'IL' }
{ _id: '92683',
  city: 'WESTMINSTER',
  loc: [ -117.991312, 33.752756 ],
  pop: 77965,
  state: 'CA' }
{ _id: '11236',
  city: 'BROOKLYN',
  loc: [ -73.902764, 40.640685 ],
  pop: 77253,
  state: 'NY' }
{ _id: '92704',
  city: 'SANTA ANA',
  loc: [ -117.904683, 33.726513 ],
  pop: 77151,
  state: 'CA' }
{ _id: '91744',
  city: 'INDUSTRY',
  loc: [ -117.934098, 34.029428 ],
  pop: 77114,
  state: 'CA' }
{ _id: '11220',
  city: 'BROOKLYN',
  loc: [ -74.013287, 40.641165 ],
  pop: 76923,
  state: 'NY' }
Type "it" for more
it
{ _id: '60640',
  city: 'CHICAGO',
  loc: [ -87.662405, 41.971928 ],
  pop: 76829,
  state: 'IL' }
{ _id: '94501',
  city: 'COAST GUARD ISLA',
  loc: [ -122.260516, 37.764783 ],
  pop: 76110,
  state: 'CA' }
{ _id: '21207',
  city: 'GWYNN OAK',
  loc: [ -76.734064, 39.329628 ],
  pop: 76002,
  state: 'MD' }
{ _id: '11377',
  city: 'WOODSIDE',
  loc: [ -73.906911, 40.744972 ],
  pop: 75894,
  state: 'NY' }
{ _id: '11368',
  city: 'CORONA',
  loc: [ -73.861069, 40.745288 ],
  pop: 75746,
  state: 'NY' }
{ _id: '21061',
  city: 'GLEN BURNIE',
  loc: [ -76.618862, 39.158968 ],
  pop: 75692,
  state: 'MD' }
{ _id: '92376',
  city: 'RIALTO',
  loc: [ -117.377133, 34.113155 ],
  pop: 75341,
  state: 'CA' }
{ _id: '11234',
  city: 'BROOKLYN',
  loc: [ -73.923915, 40.620475 ],
  pop: 74953,
  state: 'NY' }
{ _id: '11206',
  city: 'BROOKLYN',
  loc: [ -73.943617, 40.701195 ],
  pop: 74825,
  state: 'NY' }
{ _id: '90026',
  city: 'LOS ANGELES',
  loc: [ -118.264641, 34.076629 ],
  pop: 74751,
  state: 'CA' }
{ _id: '10029',
  city: 'NEW YORK',
  loc: [ -73.94475, 40.791817 ],
  pop: 74643,
  state: 'NY' }
{ _id: '60619',
  city: 'CHICAGO',
  loc: [ -87.60539, 41.745765 ],
  pop: 74469,
  state: 'IL' }
{ _id: '60622',
  city: 'CHICAGO',
  loc: [ -87.67785, 41.901923 ],
  pop: 74468,
  state: 'IL' }
{ _id: '21215',
  city: 'BALTIMORE',
  loc: [ -76.679397, 39.344572 ],
  pop: 74402,
  state: 'MD' }
{ _id: '60639',
  city: 'CHICAGO',
  loc: [ -87.753502, 41.920162 ],
  pop: 74209,
  state: 'IL' }
{ _id: '90805',
  city: 'LONG BEACH',
  loc: [ -118.180102, 33.863457 ],
  pop: 74011,
  state: 'CA' }
{ _id: '11219',
  city: 'BROOKLYN',
  loc: [ -73.996011, 40.633568 ],
  pop: 73527,
  state: 'NY' }
{ _id: '33012',
  city: 'HIALEAH',
  loc: [ -80.3059, 25.865395 ],
  pop: 73194,
  state: 'FL' }
{ _id: '11214',
  city: 'BROOKLYN',
  loc: [ -73.99681, 40.601563 ],
  pop: 73076,
  state: 'NY' }
{ _id: '11230',
  city: 'BROOKLYN',
  loc: [ -73.965007, 40.622493 ],
  pop: 72733,
  state: 'NY' }
Type "it" for more
db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
{ _id: 'CA', totalpop: 29754890 }
{ _id: 'NY', totalpop: 17990402 }
{ _id: 'TX', totalpop: 16984601 }