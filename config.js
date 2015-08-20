var connectionString = process.env.DATABASE_URL || 'postgres://aaron:newone@localhost:5432/todo';

module.exports = connectionString;
