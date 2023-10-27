### SQL interview question

<details>
<summary><b>How to get 3th higest salary</b></summary>

```SQL
SELECT MIN(Salary) FROM (SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 3) AS TopThreeSalary;

SELECT Salary
FROM (
  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS rank
  FROM Salaries
) AS ranked_salaries
WHERE rank = n;

```
</details>

<details>
<summary><b>How to perform joins</b></summary>

```SQL
-- Inner joins
SELECT * FROM person
JOIN car ON person.car_id = car.id;

\x -- Turn on/off expanded display

-- Left joins
SELECT * FROM person
LEFT JOIN car ON person.car_id = car.id;

-- Select all person which don't have car
SELECT * FROM person
LEFT JOIN car ON car.id = person.car_id
WHERE car.* IS NULL;
```
</details>

#### Full scan ?