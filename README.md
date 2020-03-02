# ApiMds

## requiered

install `nodejs` `MySQL`

## Installation

`git clone https://github.com/darlok77/ApiMds.git`  
in this project import the dependance `npm i`   

## run
run the project `npm run start`  
run test with `npm run test`

### [GET] get all users

show all users.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → users

Response :
```
  {
    id: INT,
    firstname: String,
    lastname: String
    phone: String,
    mail: String,
    sub: BOOL,
    points: INT
  }
```

### [GET] get single users

show single users.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → users/:userId

Response :
```
  {
    id: INT,
    firstname: String,
    lastname: String
    phone: String,
    mail: String,
    sub: BOOL,
    points: INT
  }
```

### [GET] get all game

show all games.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → games

Response :
```
  {
    id: INT,
    name: String,
  }
```

### [GET] get single game

show single game.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → users/:gameId

Response :
```
 {
    id: INT,
    name: String,
  }
```

### [GET] get all promotions

show all promotions.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → promotions

Response :
```
 {
    id: INT,
    name: String,
    description: String,
    price: INT
  }
```

### [GET] get single promotion

show single promotion.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → promotions/:promotionId

Response :
```
 {
    id: INT,
    name: String,
    description: String,
    price: INT
  }
```

### [GET] get all events

show all events.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → events

Response :
```
 {
    id: INT,
    name: String,
    description: String,
    price: INT
  }
```

### [GET] get single event

show single event.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → events/:eventId

Response :
```
 {
    id: INT,
    name: String,
    description: String,
    price: INT
  }
```

### [GET] get all score

show all score.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → score

Response :
```
 {
    firstname: String,
    lastname: String,
    score: INT
  }
```

### [GET] get single event

show single score.

|                          |                   |
| ------------------------:|------------------:|
| Requires authentication  | No                |
| Who can use it ?         | Owner and users   |
| Response formats         | application/json  |

* HTTP request : GET → score/:userId

Response :
```
 {
    firstname: String,
    lastname: String,
    score: INT
  }
```
