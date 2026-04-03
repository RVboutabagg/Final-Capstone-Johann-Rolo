import { useState } from "react";
import DonateList from "../Components/DonateList";

const donatePlaces = [
  {
    name: "Place Holder",
    description: "Place Holder",
    url: "#",
  },
];

function Donate() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  function handleDonate(e) {
    e.preventDefault();
    if (!email || !amount) return;

    setEmail("");
    setAmount("");
  }

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6">
      
      <div>
        <h1 className="font-bold mb-1">Donate</h1>
        <p>Support the project.</p>
      </div>

      <div className="border p-4">
        <h2 className="font-bold mb-2">Make a Donation</h2>

        <form onSubmit={handleDonate} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-1"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-1"
          />

          <button type="submit" className="border p-1">
            Donate
          </button>
        </form>
      </div>

      <DonateList places={donatePlaces} />
    </div>
  );
}

export default Donate;