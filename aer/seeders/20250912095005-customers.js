'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "gender": "Male",
        "createdAt": "2024-05-10T10:00:00Z",
        "birthday": "1990-01-15"
      },
      {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "gender": "Female",
        "createdAt": "2024-05-11T11:00:00Z",
        "birthday": "1992-02-20"
      },
      {
        "id": 3,
        "firstName": "Peter",
        "lastName": "Jones",
        "email": "peter.jones@example.com",
        "gender": "Male",
        "createdAt": "2024-05-12T12:00:00Z",
        "birthday": "1988-03-25"
      },
      {
        "id": 4,
        "firstName": "Susan",
        "lastName": "Williams",
        "email": "susan.williams@example.com",
        "gender": "Female",
        "createdAt": "2024-05-13T13:00:00Z",
        "birthday": "1995-04-30"
      },
      {
        "id": 5,
        "firstName": "Michael",
        "lastName": "Brown",
        "email": "michael.brown@example.com",
        "gender": "Male",
        "createdAt": "2024-05-14T14:00:00Z",
        "birthday": "1985-05-10"
      },
      {
        "id": 6,
        "firstName": "Linda",
        "lastName": "Davis",
        "email": "linda.davis@example.com",
        "gender": "Female",
        "createdAt": "2024-05-15T15:00:00Z",
        "birthday": "1998-06-18"
      },
      {
        "id": 7,
        "firstName": "Robert",
        "lastName": "Miller",
        "email": "robert.miller@example.com",
        "gender": "Male",
        "createdAt": "2024-05-16T16:00:00Z",
        "birthday": "1982-07-07"
      },
      {
        "id": 8,
        "firstName": "Jessica",
        "lastName": "Wilson",
        "email": "jessica.wilson@example.com",
        "gender": "Female",
        "createdAt": "2024-05-17T17:00:00Z",
        "birthday": "1993-08-12"
      },
      {
        "id": 9,
        "firstName": "David",
        "lastName": "Moore",
        "email": "david.moore@example.com",
        "gender": "Male",
        "createdAt": "2024-05-18T18:00:00Z",
        "birthday": "1989-09-21"
      },
      {
        "id": 10,
        "firstName": "Sarah",
        "lastName": "Taylor",
        "email": "sarah.taylor@example.com",
        "gender": "Female",
        "createdAt": "2024-05-19T19:00:00Z",
        "birthday": "1997-10-05"
      },
      {
        "id": 11,
        "firstName": "Christopher",
        "lastName": "Anderson",
        "email": "christopher.anderson@example.com",
        "gender": "Male",
        "createdAt": "2024-05-20T20:00:00Z",
        "birthday": "1984-11-14"
      },
      {
        "id": 12,
        "firstName": "Karen",
        "lastName": "Thomas",
        "email": "karen.thomas@example.com",
        "gender": "Female",
        "createdAt": "2024-05-21T21:00:00Z",
        "birthday": "1991-12-19"
      },
      {
        "id": 13,
        "firstName": "Daniel",
        "lastName": "Jackson",
        "email": "daniel.jackson@example.com",
        "gender": "Male",
        "createdAt": "2024-05-22T22:00:00Z",
        "birthday": "1987-01-28"
      },
      {
        "id": 14,
        "firstName": "Nancy",
        "lastName": "White",
        "email": "nancy.white@example.com",
        "gender": "Female",
        "createdAt": "2024-05-23T23:00:00Z",
        "birthday": "1994-02-03"
      },
      {
        "id": 15,
        "firstName": "Paul",
        "lastName": "Harris",
        "email": "paul.harris@example.com",
        "gender": "Male",
        "createdAt": "2024-05-24T00:00:00Z",
        "birthday": "1983-03-08"
      },
      {
        "id": 16,
        "firstName": "Lisa",
        "lastName": "Martin",
        "email": "lisa.martin@example.com",
        "gender": "Female",
        "createdAt": "2024-05-25T01:00:00Z",
        "birthday": "1996-04-16"
      },
      {
        "id": 17,
        "firstName": "Kevin",
        "lastName": "Thompson",
        "email": "kevin.thompson@example.com",
        "gender": "Male",
        "createdAt": "2024-05-26T02:00:00Z",
        "birthday": "1986-05-22"
      },
      {
        "id": 18,
        "firstName": "Elizabeth",
        "lastName": "Garcia",
        "email": "elizabeth.garcia@example.com",
        "gender": "Female",
        "createdAt": "2024-05-27T03:00:00Z",
        "birthday": "1999-06-27"
      },
      {
        "id": 19,
        "firstName": "Steven",
        "lastName": "Martinez",
        "email": "steven.martinez@example.com",
        "gender": "Male",
        "createdAt": "2024-05-28T04:00:00Z",
        "birthday": "1981-07-02"
      },
      {
        "id": 20,
        "firstName": "Maria",
        "lastName": "Robinson",
        "email": "maria.robinson@example.com",
        "gender": "Female",
        "createdAt": "2024-05-29T05:00:00Z",
        "birthday": "1994-08-08"
      },
      {
        "id": 21,
        "firstName": "Jeffrey",
        "lastName": "Clark",
        "email": "jeffrey.clark@example.com",
        "gender": "Male",
        "createdAt": "2024-05-30T06:00:00Z",
        "birthday": "1988-09-17"
      },
      {
        "id": 22,
        "firstName": "Susan",
        "lastName": "Rodriguez",
        "email": "susan.rodriguez@example.com",
        "gender": "Female",
        "createdAt": "2024-05-31T07:00:00Z",
        "birthday": "1997-10-23"
      },
      {
        "id": 23,
        "firstName": "Charles",
        "lastName": "Lewis",
        "email": "charles.lewis@example.com",
        "gender": "Male",
        "createdAt": "2024-06-01T08:00:00Z",
        "birthday": "1986-11-04"
      },
      {
        "id": 24,
        "firstName": "Dorothy",
        "lastName": "Lee",
        "email": "dorothy.lee@example.com",
        "gender": "Female",
        "createdAt": "2024-06-02T09:00:00Z",
        "birthday": "1990-12-09"
      },
      {
        "id": 25,
        "firstName": "George",
        "lastName": "Walker",
        "email": "george.walker@example.com",
        "gender": "Male",
        "createdAt": "2024-06-03T10:00:00Z",
        "birthday": "1985-01-13"
      },
      {
        "id": 26,
        "firstName": "Betty",
        "lastName": "Hall",
        "email": "betty.hall@example.com",
        "gender": "Female",
        "createdAt": "2024-06-04T11:00:00Z",
        "birthday": "1995-02-18"
      },
      {
        "id": 27,
        "firstName": "Edward",
        "lastName": "Allen",
        "email": "edward.allen@example.com",
        "gender": "Male",
        "createdAt": "2024-06-05T12:00:00Z",
        "birthday": "1989-03-22"
      },
      {
        "id": 28,
        "firstName": "Helen",
        "lastName": "Young",
        "email": "helen.young@example.com",
        "gender": "Female",
        "createdAt": "2024-06-06T13:00:00Z",
        "birthday": "1992-04-26"
      },
      {
        "id": 29,
        "firstName": "Kenneth",
        "lastName": "Hernandez",
        "email": "kenneth.hernandez@example.com",
        "gender": "Male",
        "createdAt": "2024-06-07T14:00:00Z",
        "birthday": "1984-05-01"
      },
      {
        "id": 30,
        "firstName": "Donna",
        "lastName": "King",
        "email": "donna.king@example.com",
        "gender": "Female",
        "createdAt": "2024-06-08T15:00:00Z",
        "birthday": "1991-06-06"
      },
      {
        "id": 31,
        "firstName": "Donald",
        "lastName": "Wright",
        "email": "donald.wright@example.com",
        "gender": "Male",
        "createdAt": "2024-06-09T16:00:00Z",
        "birthday": "1987-07-11"
      },
      {
        "id": 32,
        "firstName": "Carol",
        "lastName": "Lopez",
        "email": "carol.lopez@example.com",
        "gender": "Female",
        "createdAt": "2024-06-10T17:00:00Z",
        "birthday": "1994-08-16"
      },
      {
        "id": 33,
        "firstName": "Kevin",
        "lastName": "Hill",
        "email": "kevin.hill@example.com",
        "gender": "Male",
        "createdAt": "2024-06-11T18:00:00Z",
        "birthday": "1983-09-20"
      },
      {
        "id": 34,
        "firstName": "Sharon",
        "lastName": "Scott",
        "email": "sharon.scott@example.com",
        "gender": "Female",
        "createdAt": "2024-06-12T19:00:00Z",
        "birthday": "1996-10-25"
      },
      {
        "id": 35,
        "firstName": "Gary",
        "lastName": "Green",
        "email": "gary.green@example.com",
        "gender": "Male",
        "createdAt": "2024-06-13T20:00:00Z",
        "birthday": "1986-11-29"
      },
      {
        "id": 36,
        "firstName": "Michelle",
        "lastName": "Adams",
        "email": "michelle.adams@example.com",
        "gender": "Female",
        "createdAt": "2024-06-14T21:00:00Z",
        "birthday": "1999-12-04"
      },
      {
        "id": 37,
        "firstName": "Ronald",
        "lastName": "Baker",
        "email": "ronald.baker@example.com",
        "gender": "Male",
        "createdAt": "2024-06-15T22:00:00Z",
        "birthday": "1981-01-08"
      },
      {
        "id": 38,
        "firstName": "Laura",
        "lastName": "Gonzalez",
        "email": "laura.gonzalez@example.com",
        "gender": "Female",
        "createdAt": "2024-06-16T23:00:00Z",
        "birthday": "1994-02-13"
      },
      {
        "id": 39,
        "firstName": "Timothy",
        "lastName": "Nelson",
        "email": "timothy.nelson@example.com",
        "gender": "Male",
        "createdAt": "2024-06-17T00:00:00Z",
        "birthday": "1988-03-18"
      },
      {
        "id": 40,
        "firstName": "Cynthia",
        "lastName": "Carter",
        "email": "cynthia.carter@example.com",
        "gender": "Female",
        "createdAt": "2024-06-18T01:00:00Z",
        "birthday": "1997-04-22"
      },
      {
        "id": 41,
        "firstName": "Brian",
        "lastName": "Perez",
        "email": "brian.perez@example.com",
        "gender": "Male",
        "createdAt": "2024-06-19T02:00:00Z",
        "birthday": "1986-05-27"
      },
      {
        "id": 42,
        "firstName": "Debra",
        "lastName": "Evans",
        "email": "debra.evans@example.com",
        "gender": "Female",
        "createdAt": "2024-06-20T03:00:00Z",
        "birthday": "1990-06-01"
      },
      {
        "id": 43,
        "firstName": "Mark",
        "lastName": "Ramirez",
        "email": "mark.ramirez@example.com",
        "gender": "Male",
        "createdAt": "2024-06-21T04:00:00Z",
        "birthday": "1985-07-06"
      },
      {
        "id": 44,
        "firstName": "Lisa",
        "lastName": "Roberts",
        "email": "lisa.roberts@example.com",
        "gender": "Female",
        "createdAt": "2024-06-22T05:00:00Z",
        "birthday": "1995-08-11"
      },
      {
        "id": 45,
        "firstName": "Anthony",
        "lastName": "Turner",
        "email": "anthony.turner@example.com",
        "gender": "Male",
        "createdAt": "2024-06-23T06:00:00Z",
        "birthday": "1989-09-15"
      },
      {
        "id": 46,
        "firstName": "Brenda",
        "lastName": "Phillips",
        "email": "brenda.phillips@example.com",
        "gender": "Female",
        "createdAt": "2024-06-24T07:00:00Z",
        "birthday": "1992-10-20"
      },
      {
        "id": 47,
        "firstName": "Jeffrey",
        "lastName": "Campbell",
        "email": "jeffrey.campbell@example.com",
        "gender": "Male",
        "createdAt": "2024-06-25T08:00:00Z",
        "birthday": "1984-11-25"
      },
      {
        "id": 48,
        "firstName": "Kimberly",
        "lastName": "Parker",
        "email": "kimberly.parker@example.com",
        "gender": "Female",
        "createdAt": "2024-06-26T09:00:00Z",
        "birthday": "1991-12-30"
      },
      {
        "id": 49,
        "firstName": "Scott",
        "lastName": "Mitchell",
        "email": "scott.mitchell@example.com",
        "gender": "Male",
        "createdAt": "2024-06-27T10:00:00Z",
        "birthday": "1987-01-04"
      },
      {
        "id": 50,
        "firstName": "Janet",
        "lastName": "Roberts",
        "email": "janet.roberts@example.com",
        "gender": "Female",
        "createdAt": "2024-06-28T11:00:00Z",
        "birthday": "1994-02-09"
      },
      {
        "id": 51,
        "firstName": "Benjamin",
        "lastName": "Green",
        "email": "benjamin.green@example.com",
        "gender": "Male",
        "createdAt": "2024-06-29T12:00:00Z",
        "birthday": "1983-03-14"
      },
      {
        "id": 52,
        "firstName": "Stephanie",
        "lastName": "Wright",
        "email": "stephanie.wright@example.com",
        "gender": "Female",
        "createdAt": "2024-06-30T13:00:00Z",
        "birthday": "1996-04-19"
      },
      {
        "id": 53,
        "firstName": "Patrick",
        "lastName": "Diaz",
        "email": "patrick.diaz@example.com",
        "gender": "Male",
        "createdAt": "2024-07-01T14:00:00Z",
        "birthday": "1986-05-24"
      },
      {
        "id": 54,
        "firstName": "Christine",
        "lastName": "Hughes",
        "email": "christine.hughes@example.com",
        "gender": "Female",
        "createdAt": "2024-07-02T15:00:00Z",
        "birthday": "1999-06-29"
      },
      {
        "id": 55,
        "firstName": "Dennis",
        "lastName": "Collins",
        "email": "dennis.collins@example.com",
        "gender": "Male",
        "createdAt": "2024-07-03T16:00:00Z",
        "birthday": "1981-07-04"
      },
      {
        "id": 56,
        "firstName": "Pamela",
        "lastName": "Stewart",
        "email": "pamela.stewart@example.com",
        "gender": "Female",
        "createdAt": "2024-07-04T17:00:00Z",
        "birthday": "1994-08-09"
      },
      {
        "id": 57,
        "firstName": "Larry",
        "lastName": "Sanchez",
        "email": "larry.sanchez@example.com",
        "gender": "Male",
        "createdAt": "2024-07-05T18:00:00Z",
        "birthday": "1988-09-13"
      },
      {
        "id": 58,
        "firstName": "Nicole",
        "lastName": "Morris",
        "email": "nicole.morris@example.com",
        "gender": "Female",
        "createdAt": "2024-07-06T19:00:00Z",
        "birthday": "1997-10-18"
      },
      {
        "id": 59,
        "firstName": "Walter",
        "lastName": "Rogers",
        "email": "walter.rogers@example.com",
        "gender": "Male",
        "createdAt": "2024-07-07T20:00:00Z",
        "birthday": "1986-11-23"
      },
      {
        "id": 60,
        "firstName": "Shirley",
        "lastName": "Reed",
        "email": "shirley.reed@example.com",
        "gender": "Female",
        "createdAt": "2024-07-08T21:00:00Z",
        "birthday": "1990-12-28"
      },
      {
        "id": 61,
        "firstName": "Henry",
        "lastName": "Cook",
        "email": "henry.cook@example.com",
        "gender": "Male",
        "createdAt": "2024-07-09T22:00:00Z",
        "birthday": "1985-01-02"
      },
      {
        "id": 62,
        "firstName": "Catherine",
        "lastName": "Morgan",
        "email": "catherine.morgan@example.com",
        "gender": "Female",
        "createdAt": "2024-07-10T23:00:00Z",
        "birthday": "1995-02-07"
      },
      {
        "id": 63,
        "firstName": "Arthur",
        "lastName": "Bell",
        "email": "arthur.bell@example.com",
        "gender": "Male",
        "createdAt": "2024-07-11T00:00:00Z",
        "birthday": "1989-03-12"
      },
      {
        "id": 64,
        "firstName": "Gloria",
        "lastName": "Bailey",
        "email": "gloria.bailey@example.com",
        "gender": "Female",
        "createdAt": "2024-07-12T01:00:00Z",
        "birthday": "1992-04-17"
      },
      {
        "id": 65,
        "firstName": "Raymond",
        "lastName": "Cooper",
        "email": "raymond.cooper@example.com",
        "gender": "Male",
        "createdAt": "2024-07-13T02:00:00Z",
        "birthday": "1984-05-22"
      },
      {
        "id": 66,
        "firstName": "Judith",
        "lastName": "Evans",
        "email": "judith.evans@example.com",
        "gender": "Female",
        "createdAt": "2024-07-14T03:00:00Z",
        "birthday": "1991-06-27"
      },
      {
        "id": 67,
        "firstName": "Jerry",
        "lastName": "Richardson",
        "email": "jerry.richardson@example.com",
        "gender": "Male",
        "createdAt": "2024-07-15T04:00:00Z",
        "birthday": "1987-07-02"
      },
      {
        "id": 68,
        "firstName": "Julia",
        "lastName": "Cox",
        "email": "julia.cox@example.com",
        "gender": "Female",
        "createdAt": "2024-07-16T05:00:00Z",
        "birthday": "1994-08-07"
      },
      {
        "id": 69,
        "firstName": "Terry",
        "lastName": "Howard",
        "email": "terry.howard@example.com",
        "gender": "Male",
        "createdAt": "2024-07-17T06:00:00Z",
        "birthday": "1983-09-12"
      },
      {
        "id": 70,
        "firstName": "Theresa",
        "lastName": "Ward",
        "email": "theresa.ward@example.com",
        "gender": "Female",
        "createdAt": "2024-07-18T07:00:00Z",
        "birthday": "1996-10-17"
      },
      {
        "id": 71,
        "firstName": "Joe",
        "lastName": "Peterson",
        "email": "joe.peterson@example.com",
        "gender": "Male",
        "createdAt": "2024-07-19T08:00:00Z",
        "birthday": "1986-11-22"
      },
      {
        "id": 72,
        "firstName": "Beverly",
        "lastName": "Gray",
        "email": "beverly.gray@example.com",
        "gender": "Female",
        "createdAt": "2024-07-20T09:00:00Z",
        "birthday": "1999-12-27"
      },
      {
        "id": 73,
        "firstName": "Wayne",
        "lastName": "James",
        "email": "wayne.james@example.com",
        "gender": "Male",
        "createdAt": "2024-07-21T10:00:00Z",
        "birthday": "1981-01-01"
      },
      {
        "id": 74,
        "firstName": "Denise",
        "lastName": "Cole",
        "email": "denise.cole@example.com",
        "gender": "Female",
        "createdAt": "2024-07-22T11:00:00Z",
        "birthday": "1994-02-06"
      },
      {
        "id": 75,
        "firstName": "Louis",
        "lastName": "Richardson",
        "email": "louis.richardson@example.com",
        "gender": "Male",
        "createdAt": "2024-07-23T12:00:00Z",
        "birthday": "1988-03-11"
      },
      {
        "id": 76,
        "firstName": "Marilyn",
        "lastName": "Ross",
        "email": "marilyn.ross@example.com",
        "gender": "Female",
        "createdAt": "2024-07-24T13:00:00Z",
        "birthday": "1997-04-16"
      },
      {
        "id": 77,
        "firstName": "Eugene",
        "lastName": "Foster",
        "email": "eugene.foster@example.com",
        "gender": "Male",
        "createdAt": "2024-07-25T14:00:00Z",
        "birthday": "1986-05-21"
      },
      {
        "id": 78,
        "firstName": "Marie",
        "lastName": "Perry",
        "email": "marie.perry@example.com",
        "gender": "Female",
        "createdAt": "2024-07-26T15:00:00Z",
        "birthday": "1990-06-26"
      },
      {
        "id": 79,
        "firstName": "Philip",
        "lastName": "Powell",
        "email": "philip.powell@example.com",
        "gender": "Male",
        "createdAt": "2024-07-27T16:00:00Z",
        "birthday": "1985-07-31"
      },
      {
        "id": 80,
        "firstName": "Evelyn",
        "lastName": "Long",
        "email": "evelyn.long@example.com",
        "gender": "Female",
        "createdAt": "2024-07-28T17:00:00Z",
        "birthday": "1995-08-05"
      },
      {
        "id": 81,
        "firstName": "Frank",
        "lastName": "Patterson",
        "email": "frank.patterson@example.com",
        "gender": "Male",
        "createdAt": "2024-07-29T18:00:00Z",
        "birthday": "1989-09-09"
      },
      {
        "id": 82,
        "firstName": "Anna",
        "lastName": "Hughes",
        "email": "anna.hughes@example.com",
        "gender": "Female",
        "createdAt": "2024-07-30T19:00:00Z",
        "birthday": "1992-10-14"
      },
      {
        "id": 83,
        "firstName": "Russell",
        "lastName": "Washington",
        "email": "russell.washington@example.com",
        "gender": "Male",
        "createdAt": "2024-07-31T20:00:00Z",
        "birthday": "1984-11-19"
      },
      {
        "id": 84,
        "firstName": "Alice",
        "lastName": "Butler",
        "email": "alice.butler@example.com",
        "gender": "Female",
        "createdAt": "2024-08-01T21:00:00Z",
        "birthday": "1991-12-24"
      },
      {
        "id": 85,
        "firstName": "Craig",
        "lastName": "Henderson",
        "email": "craig.henderson@example.com",
        "gender": "Male",
        "createdAt": "2024-08-02T22:00:00Z",
        "birthday": "1987-01-29"
      },
      {
        "id": 86,
        "firstName": "Judith",
        "lastName": "Coleman",
        "email": "judith.coleman@example.com",
        "gender": "Female",
        "createdAt": "2024-08-03T23:00:00Z",
        "birthday": "1994-02-03"
      },
      {
        "id": 87,
        "firstName": "Bruce",
        "lastName": "Simmons",
        "email": "bruce.simmons@example.com",
        "gender": "Male",
        "createdAt": "2024-08-04T00:00:00Z",
        "birthday": "1983-03-08"
      },
      {
        "id": 88,
        "firstName": "Rachel",
        "lastName": "Barnes",
        "email": "rachel.barnes@example.com",
        "gender": "Female",
        "createdAt": "2024-08-05T01:00:00Z",
        "birthday": "1996-04-13"
      },
      {
        "id": 89,
        "firstName": "Roger",
        "lastName": "Fisher",
        "email": "roger.fisher@example.com",
        "gender": "Male",
        "createdAt": "2024-08-06T02:00:00Z",
        "birthday": "1986-05-18"
      },
      {
        "id": 90,
        "firstName": "Judith",
        "lastName": "Sanders",
        "email": "judith.sanders@example.com",
        "gender": "Female",
        "createdAt": "2024-08-07T03:00:00Z",
        "birthday": "1999-06-23"
      },
      {
        "id": 91,
        "firstName": "Jose",
        "lastName": "Long",
        "email": "jose.long@example.com",
        "gender": "Male",
        "createdAt": "2024-08-08T04:00:00Z",
        "birthday": "1981-07-28"
      },
      {
        "id": 92,
        "firstName": "Catherine",
        "lastName": "Jordan",
        "email": "catherine.jordan@example.com",
        "gender": "Female",
        "createdAt": "2024-08-09T05:00:00Z",
        "birthday": "1994-08-02"
      },
      {
        "id": 93,
        "firstName": "Roy",
        "lastName": "Alexander",
        "email": "roy.alexander@example.com",
        "gender": "Male",
        "createdAt": "2024-08-10T06:00:00Z",
        "birthday": "1988-09-07"
      },
      {
        "id": 94,
        "firstName": "Theresa",
        "lastName": "Russell",
        "email": "theresa.russell@example.com",
        "gender": "Female",
        "createdAt": "2024-08-11T07:00:00Z",
        "birthday": "1997-10-12"
      },
      {
        "id": 95,
        "firstName": "Adam",
        "lastName": "Harrison",
        "email": "adam.harrison@example.com",
        "gender": "Male",
        "createdAt": "2024-08-12T08:00:00Z",
        "birthday": "1986-11-17"
      },
      {
        "id": 96,
        "firstName": "Rose",
        "lastName": "Hayes",
        "email": "rose.hayes@example.com",
        "gender": "Female",
        "createdAt": "2024-08-13T09:00:00Z",
        "birthday": "1990-12-22"
      },
      {
        "id": 97,
        "firstName": "Aaron",
        "lastName": "Myers",
        "email": "aaron.myers@example.com",
        "gender": "Male",
        "createdAt": "2024-08-14T10:00:00Z",
        "birthday": "1985-01-27"
      },
      {
        "id": 98,
        "firstName": "Christine",
        "lastName": "Kennedy",
        "email": "christine.kennedy@example.com",
        "gender": "Female",
        "createdAt": "2024-08-15T11:00:00Z",
        "birthday": "1995-02-01"
      },
      {
        "id": 99,
        "firstName": "Nathan",
        "lastName": "Foster",
        "email": "nathan.foster@example.com",
        "gender": "Male",
        "createdAt": "2024-08-16T12:00:00Z",
        "birthday": "1989-03-06"
      },
      {
        "id": 100,
        "firstName": "Jennifer",
        "lastName": "Ross",
        "email": "jennifer.ross@example.com",
        "gender": "Female",
        "createdAt": "2024-08-17T13:00:00Z",
        "birthday": "1992-04-11"
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
