create table employees (
	id serial primary key,
	first_name varchar (30) not null,
	last_name varchar (40) not null,
	job_title varchar (40) not null,
	annual_salary integer not null
);

INSERT INTO employees (first_name, last_name, job_title, annual_salary) 
VALUES ('Jane', 'Smith', 'Senior VP, Information Technology', 150000); 

	