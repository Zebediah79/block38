import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
import { faker } from "@faker-js/faker";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 20; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate({ mode: "age", min: 23, max: 65 }),
      salary: faker.finance.amount({ min: 50000, max: 250000, dec: 0 }),
    };
    await createEmployee(employee);
  }
}
