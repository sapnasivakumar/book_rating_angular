/* exported  sample_new_author sample_author_list sample_new_book sample_new_book_nested */
var sample_new_author = {
  "name": "nmjk",
  "bio":"fsxzc"
};

var sample_author_list = {
  data: [
    {
      "id": 2,
      "name": "Test author 2",
      "bio": "Test bio",
      "created_at": "2017-03-06T20:28:12.000Z",
      "updated_at": "2017-03-06T20:28:12.000Z"
    },
    {
      "id": 3,
      "name": "Test author 3",
      "bio": "Test bio3",
      "created_at": "2017-03-06T20:28:14.000Z",
      "updated_at": "2017-03-06T20:28:14.000Z"
    }
    ,
    {
      "id": 4,
      "name": "Test author 4",
      "bio": "Test bio4",
      "created_at": "2017-03-06T20:28:23.000Z",
      "updated_at": "2017-03-06T20:28:56.000Z"
    }
  ]
};

var sample_new_book = {
    "name": "book1",
    "isbn": 123,
    "description": "adadada",
    "author_id": 2,
    "rating": 3
};
var sample_new_book_nested = {
  data: {
    "name": "book1",
    "isbn": 123,
    "description": "adadada",
    "author_id": 2,
    "rating": 3
  }
};

