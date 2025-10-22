import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 20; i++) {
    const employee = {
      name: "Employee" + i,
      birthday: "2025-10-21",
      salary: Math.floor(Math.random() * 200000),
    };
    await createEmployee(employee);
  }
}
