db.zipcode.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})
{ _id: ObjectId("618ab89d88f900b32a5747ae"),
  borough: 'Bronx',
  cuisine: 'Bakery',
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445' }
{ _id: ObjectId("618ab89d88f900b32a5747af"),
  borough: 'Brooklyn',
  cuisine: 'Hamburgers',
  name: 'Wendy\'S',
  restaurant_id: '30112340' }
{ _id: ObjectId("618ab89d88f900b32a5747b0"),
  borough: 'Manhattan',
  cuisine: 'Irish',
  name: 'Dj Reynolds Pub And Restaurant',
  restaurant_id: '30191841' }
{ _id: ObjectId("618ab89d88f900b32a5747b1"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Riviera Caterer',
  restaurant_id: '40356018' }
{ _id: ObjectId("618ab89d88f900b32a5747b2"),
  borough: 'Queens',
  cuisine: 'Jewish/Kosher',
  name: 'Tov Kosher Kitchen',
  restaurant_id: '40356068' }
{ _id: ObjectId("618ab89d88f900b32a5747b3"),
  borough: 'Queens',
  cuisine: 'American ',
  name: 'Brunos On The Boulevard',
  restaurant_id: '40356151' }
{ _id: ObjectId("618ab89d88f900b32a5747b4"),
  borough: 'Staten Island',
  cuisine: 'Jewish/Kosher',
  name: 'Kosher Island',
  restaurant_id: '40356442' }
{ _id: ObjectId("618ab89d88f900b32a5747b5"),
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Wilken\'S Fine Food',
  restaurant_id: '40356483' }
{ _id: ObjectId("618ab89d88f900b32a5747b6"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'Regina Caterers',
  restaurant_id: '40356649' }
{ _id: ObjectId("618ab89d88f900b32a5747b7"),
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Taste The Tropics Ice Cream',
  restaurant_id: '40356731' }
{ _id: ObjectId("618ab89d88f900b32a5747b8"),
  borough: 'Bronx',
  cuisine: 'American ',
  name: 'Wild Asia',
  restaurant_id: '40357217' }
{ _id: ObjectId("618ab89d88f900b32a5747b9"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'C & C Catering Service',
  restaurant_id: '40357437' }
{ _id: ObjectId("618ab89d88f900b32a5747ba"),
  borough: 'Brooklyn',
  cuisine: 'Chinese',
  name: 'May May Kitchen',
  restaurant_id: '40358429' }
{ _id: ObjectId("618ab89d88f900b32a5747bb"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: '1 East 66Th Street Kitchen',
  restaurant_id: '40359480' }
{ _id: ObjectId("618ab89d88f900b32a5747bc"),
  borough: 'Brooklyn',
  cuisine: 'Jewish/Kosher',
  name: 'Seuda Foods',
  restaurant_id: '40360045' }
{ _id: ObjectId("618ab89d88f900b32a5747bd"),
  borough: 'Brooklyn',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40360076' }
{ _id: ObjectId("618ab89d88f900b32a5747be"),
  borough: 'Queens',
  cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
  name: 'Carvel Ice Cream',
  restaurant_id: '40361322' }
{ _id: ObjectId("618ab89d88f900b32a5747bf"),
  borough: 'Brooklyn',
  cuisine: 'Delicatessen',
  name: 'Nordic Delicacies',
  restaurant_id: '40361390' }
{ _id: ObjectId("618ab89d88f900b32a5747c0"),
  borough: 'Manhattan',
  cuisine: 'American ',
  name: 'Glorious Food',
  restaurant_id: '40361521' }
{ _id: ObjectId("618ab89d88f900b32a5747c1"),
  borough: 'Brooklyn',
  cuisine: 'American ',
  name: 'The Movable Feast',
  restaurant_id: '40361606' }
Type "it" for more

5.db.restaurants.find({"borough": "Bronx"});
6.db.restaurants.find({"borough": "Bronx"}).limit(5);
7.db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
8.db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});
9.db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
10.db.restaurants.find({"address.coord" : {$lt : -95.754168}});
11.db.restaurants.find(
               {$and:
                    [
                       {"cuisine" : {$ne :"American "}},
                       {"grades.score" : {$gt : 70}},
                       {"address.coord" : {$lt : -65.754168}}
                    ]
                }
                    );
12.db.restaurants.find(
                           {
                             "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord" : {$lt : -65.754168}
                            }
                     );
13.db.restaurants.find( {
                             "cuisine" : {$ne : "American "},
                             "grades.grade" :"A",
                             "borough": {$ne : "Brooklyn"}
                       } 
                    ).sort({"cuisine":-1});
14.db.restaurants.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
15.db.restaurants.find(
{name: /ces$/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
16.db.restaurants.find(
{"name": /.*Reg.*/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
17.db.restaurants.find(
{ 
"borough": "Bronx" , 
$or : [
{ "cuisine" : "American " },
{ "cuisine" : "Chinese" }
] 
} 
);
18.db.restaurants.find(
{"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
19.db.restaurants.find(
{"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
20.db.restaurants.find(
{"grades.score" : 
{ $not: 
{$gt : 10}
}
},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
21.db.restaurants.find(
{$or: [
  {name: /^Wil/}, 
  {"$and": [
       {"cuisine" : {$ne :"American "}}, 
       {"cuisine" : {$ne :"Chinees"}}
   ]}
]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
);