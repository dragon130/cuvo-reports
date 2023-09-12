// 1. GET "/api/watchcount-stats/"
// Response: {
//       "totalMoviePersonalization": 437,
//       "totalUsedPersonalization":315,
//       "totalUsers": 547
//     }

// 2. GET "/api/toppickedcategories/"
// Response: {
//     "06 September": {
//         "duration": 70
//     },
//     "07 September": {
//         "introduction": 41
//     },
//     "08 September": {
//         "presenter": 57
//     },
//     "09 September": {
//         "animals": 63
//     },
//     "10 September": {
//         "introduction": 45
//     },
//     "11 September": {
//         "presenter": 67
//     },
//     "12 September": {
//         "sensitivity": 42
//     }
// }

// 3. GET "/api/personalizedStats/"
// Response: {
//     "06 September": {
//         "personalized": 112,
//         "nonPersonalized": 89
//     },
//     "07 September": {
//         "personalized": 212,
//         "nonPersonalized": 70
//     },
//     "08 September": {
//         "personalized": 176,
//         "nonPersonalized": 97
//     },
//     "09 September": {
//         "personalized": 128,
//         "nonPersonalized": 65
//     },
//     "10 September": {
//         "personalized": 145,
//         "nonPersonalized": 98
//     },
//     "11 September": {
//         "personalized": 160,
//         "nonPersonalized": 66
//     },
//     "12 September": {
//         "personalized": 117,
//         "nonPersonalized": 80
//     }
// }

// 4. GET "/api/mostPopularCategories/"
// Response: {
//     "duration": 59,
//     "sensitivity": 50,
//     "introduction": 45,
//     "animals": 34,
//     "presenter": 45,
//     "repetitive": 28,
//     "irrelevant": 24
// }

// 5. GET "/api/topPersonalizedMovies/"
// Response: {
//     "Big Buck Bunny": {
//         "presonalized": 217,
//         "playlistId": "Dg8tzxxhhNVP"
//     },
//     "Springwatch": {
//         "personalized": 245,
//         "playlistId": "xuNHWOqLj2SI"
//     }
// }

// 6. GET "/api/areawise-stats/"
// Response: {
//     "Oregon": 127,
//     "California": 253,
//     "Orlando": 345,
//     "San Fransisco": 556,
//     "Washington DC": 322,
//     "Ohio": 312,
//     "Chicago": 256
// }

// PREFERENCES

// GET  "/api/movie-stats/<playlistId>"
// Response: {
//     "playlistId": "Dg8tzxxhhNVP",
//     "name": "Big buck bunny",
//     "personalized": 10,
//     "nonPersonalized": 10,
//     "tags": {
//         "Show introduction": {
//             "personalized": 10,
//             "nonPersonalized": 10
//         },
//         "Animals": {
//             "personalized": 10,
//             "nonPersonalized": 10,
//             "values": {
//                 "Bunny": {
//                     "personalized": 10,
//                     "nonPersonalized": 10
//                 },
//                 "Bird": {
//                     "personalized": 10,
//                     "nonPersonalized": 10
//                 }
//             }
//         },
//         "Flowers": {
//             "personalized": 10,
//             "nonPersonalized": 10
//         }
//     }
// }
