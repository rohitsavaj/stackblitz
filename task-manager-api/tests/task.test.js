const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Task = require('../src/models/task.model');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/taskdb_test');
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Task.deleteMany();
});

describe('Task API', () => {
  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'A task', status: 'To Do' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });
});
