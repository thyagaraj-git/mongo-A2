db.zipcodes.aggregate([{$group:{_id:{state:'$state',city:'$city'},totalpop:{$sum:'$pop'}}}])
{ _id: { state: 'NY', city: 'RODMAN' }, totalpop: 1097 }
{ _id: { state: 'MS', city: 'CALEDONIA' }, totalpop: 2008 }
{ _id: { state: 'MI', city: 'THOMPSONVILLE' }, totalpop: 1231 }
{ _id: { state: 'MO', city: 'SIKESTON' }, totalpop: 22618 }
{ _id: { state: 'WI', city: 'SOUTH MILWAUKEE' },
  totalpop: 20958 }
{ _id: { state: 'TN', city: 'SIGNAL MOUNTAIN' },
  totalpop: 14032 }
{ _id: { state: 'KS', city: 'ANTONINO' }, totalpop: 20703 }
{ _id: { state: 'AR', city: 'AUBREY' }, totalpop: 901 }
{ _id: { state: 'AR', city: 'MOUNT HOLLY' }, totalpop: 514 }
{ _id: { state: 'SD', city: 'CENTERVILLE' }, totalpop: 1048 }
{ _id: { state: 'NM', city: 'KIRTLAND' }, totalpop: 5087 }
{ _id: { state: 'TN', city: 'PARROTTSVILLE' }, totalpop: 3301 }
{ _id: { state: 'KY', city: 'HODGENVILLE' }, totalpop: 6666 }
{ _id: { state: 'MO', city: 'IRON MOUNTAIN' }, totalpop: 5610 }
{ _id: { state: 'VA', city: 'NEWPORT NEWS' }, totalpop: 170048 }
{ _id: { state: 'SC', city: 'CHERAW' }, totalpop: 13063 }
{ _id: { state: 'VT', city: 'ORWELL' }, totalpop: 1315 }
{ _id: { state: 'LA', city: 'HOLDEN' }, totalpop: 2424 }
{ _id: { state: 'MI', city: 'CARP LAKE' }, totalpop: 1049 }
{ _id: { state: 'AL', city: 'HAZEL GREEN' }, totalpop: 7751 }
Type "it" for more
it
{ _id: { state: 'SD', city: 'CEDARBUTTE' }, totalpop: 208 }
{ _id: { state: 'IA', city: 'MAYNARD' }, totalpop: 899 }
{ _id: { state: 'MD', city: 'ANNAPOLIS JUNCTI' }, totalpop: 32 }
{ _id: { state: 'NC', city: 'BAILEY' }, totalpop: 4399 }
{ _id: { state: 'AL', city: 'WILSONVILLE' }, totalpop: 5224 }
{ _id: { state: 'MN', city: 'LENGBY' }, totalpop: 514 }
{ _id: { state: 'TX', city: 'BERTRAM' }, totalpop: 1622 }
{ _id: { state: 'TN', city: 'LANCASTER' }, totalpop: 261 }
{ _id: { state: 'KS', city: 'HAVILAND' }, totalpop: 1277 }
{ _id: { state: 'AR', city: 'COLLEGE CITY' }, totalpop: 5794 }
{ _id: { state: 'VT', city: 'JAY PEAK' }, totalpop: 370 }
{ _id: { state: 'CA', city: 'WHEATLAND' }, totalpop: 2532 }
{ _id: { state: 'WV', city: 'BOMONT' }, totalpop: 129 }
{ _id: { state: 'MI', city: 'ELK RAPIDS' }, totalpop: 1493 }
{ _id: { state: 'NY', city: 'OLIVEREA' }, totalpop: 69 }
{ _id: { state: 'AL', city: 'SALEM' }, totalpop: 2773 }
{ _id: { state: 'NY', city: 'NORFOLK' }, totalpop: 4313 }
{ _id: { state: 'MI', city: 'EVART' }, totalpop: 4253 }
{ _id: { state: 'ND', city: 'FINLEY' }, totalpop: 1403 }
{ _id: { state: 'KY', city: 'SALT GUM' }, totalpop: 1706 }
Type "it" for more
db.zipcodes.aggregate([{$group:{_id:{city:'$city',pop:'$pop'}}},{$sort:{'_id.pop':-1}}])
{ _id: { city: 'CHICAGO', pop: 112047 } }
{ _id: { city: 'BROOKLYN', pop: 111396 } }
{ _id: { city: 'NEW YORK', pop: 106564 } }
{ _id: { city: 'NEW YORK', pop: 100027 } }
{ _id: { city: 'BELL GARDENS', pop: 99568 } }
{ _id: { city: 'CHICAGO', pop: 98612 } }
{ _id: { city: 'LOS ANGELES', pop: 96074 } }
{ _id: { city: 'CHICAGO', pop: 95971 } }
{ _id: { city: 'CHICAGO', pop: 94317 } }
{ _id: { city: 'NORWALK', pop: 94188 } }
{ _id: { city: 'CHICAGO', pop: 92005 } }
{ _id: { city: 'CHICAGO', pop: 91814 } }
{ _id: { city: 'CHICAGO', pop: 89762 } }
{ _id: { city: 'CHICAGO', pop: 88377 } }
{ _id: { city: 'JACKSON HEIGHTS', pop: 88241 } }
{ _id: { city: 'ARLETA', pop: 88114 } }
{ _id: { city: 'BROOKLYN', pop: 87079 } }
{ _id: { city: 'SOUTH GATE', pop: 87026 } }
{ _id: { city: 'RIDGEWOOD', pop: 85732 } }
{ _id: { city: 'BRONX', pop: 85710 } }
Type "it" for more
db.zipcodes.aggregate([{$group:{_id:{city:'$city'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
{ _id: { city: 'CHICAGO' }, totalpop: 2452177 }
{ _id: { city: 'BROOKLYN' }, totalpop: 2341387 }
{ _id: { city: 'HOUSTON' }, totalpop: 2123053 }