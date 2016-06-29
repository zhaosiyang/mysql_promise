# mysql_promise
an extremely easy way to send query to mysql server based on promise

## step 1: config
```
var query = mysql.config({
	host: "mydatabase.example.com",
    user: "myusername",
    password: "mypass",
    database: "DB1"
});
```

## step 2: query
```
var min_age = 10;
var gender = 'Male';
query('SELECT * FROM USER WHERE age > ? AND sex = ?', [min_age, gender])
	.then(function(rows){
		console.log(rows);
	})
	.catch(function(err){
		console.log(err);
	});
```


