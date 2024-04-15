-- Select in table
SELECT * 
FROM student;

SELECT name, major 
FROM student;

SELECT student.name, student.major 
FROM student;

SELECT name, major 
FROM student
ORDER BY name;

SELECT name, major
FROM student
ORDER BY name DESC;

SELECT *
FROM student
ORDER BY major,student_id;

SELECT * FROM student WHERE major='CS';
SELECT * FROM student WHERE major='CS' OR major='IT';

SELECT * 
FROM student
LIMIT=2;

SELECT * 
FROM student
ORDER BY student_id DESC
LIMIT=2;

-- Operators that can be used in WHERE clause
-- =, <>, !=, >, <, >=, <=, BETWEEN, LIKE, IN, AND, OR, NOT
SELECT * 
FROM student
WHERE name IN ('John', 'Smith', 'Ritik');