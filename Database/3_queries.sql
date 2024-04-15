-- Insert multiple rows in table
INSERT INTO student(name, major) VALUES('John', 'CS');
INSERT INTO student(name, major) VALUES('Smith', 'IT');
INSERT INTO student(name, major) VALUES('Ritik', 'CS');
INSERT INTO student(name, major) VALUES('Rahul', 'IT');
INSERT INTO student(name, major) VALUES('Rohit', 'Chemistry');
INSERT INTO student(name, major) VALUES('Raj', 'Bio');
INSERT INTO student(name, major) VALUES('Ravi', 'CS');


-- Update in table
UPDATE student SET major='Computer' WHERE major='CS';
UPDATE student SET major='Computer' WHERE  student_id=2;

UPDATE student SET major='BioChemistry' WHERE major='Chemistry' OR major='Bio';

UPDATE student SET major='undecided',name='Tom' WHERE student_id=1;


-- Delete in table
DELETE FROM student WHERE student_id=1;

DELETE FROM student WHERE major='undecided';