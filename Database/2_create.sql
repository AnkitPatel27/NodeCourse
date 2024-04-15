-- INT   --- Whole Number ---
-- DECIMAL(M,N) --- Decimal Number ---
-- VARCHAR(10)   --- String ---
-- DATE  --- Date ---
-- TIMESTAMP --- Time ---
-- BLOB  --- Binary Large Object Stores big data e.g:- images,video etc ---

create table student(
    student_id INT PRIMARY KEY,
    name VARCHAR(20),
    age INT,
    dob DATE
    -- PRIMARY KEY(student_id)
);

-- To see the table structure
DESCRIBE student;

-- To delete the table
DROP TABLE student;

-- To add a column to the table
ALTER TABLE student ADD COLUMN email VARCHAR(50);

-- To delete a column from the table
ALTER TABLE student DROP COLUMN email;

-- To insert data into the table
INSERT INTO student VALUES(1, 'John', 20, '2000-01-01');

--error
INSERT INTO student(student_id, name, age, dob) VALUES(1, 'John', 20, '2000-01-01');

INSERT INTO student(student_id, name, age) VALUES(2, 'Smith', 21);

-- To see the content of table
SELECT * FROM student


-----------------------------------------------------------------------------------------------------
create table student(
    student_id INT PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT,
    dob DATE UNIQUE,
    -- PRIMARY KEY(student_id)
);

-- Insert in table
INSERT INTO student(name, age, dob) VALUES('John', 20, '2000-01-01');

-- error
INSERT INTO student(name, age, dob) VALUES('Smith', 21, '2000-01-01');


create table student(
    student_id INT PRIMARY KEY,
    name VARCHAR(20),
    age INT,
    dob DATE DEFAULT '2024-01-01'
    -- PRIMARY KEY(student_id)
);


create table student(
    student_id INT PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(20),
    major VARCHAR(20),
);





