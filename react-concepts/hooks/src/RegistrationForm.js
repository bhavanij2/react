import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "abc@gmail.com",
  });

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          value={form.firstName}
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
        />
      </label>
      <label>
        LastName:
        <input
          type="text"
          value={form.lastName}
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </label>
      <p>
        {form.firstName} {form.lastName} {form.email}
      </p>
    </>
  );
}
