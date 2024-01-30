export default function UserInput({ userInput }) {
  const label = "block mb-1 font-light";
  const input = "rounded-md text-slate-800 text-lg p-1 text-center ";

  return (
    <section className="flex flex-col gap-4 bg-slate-600 mx-auto p-4 mt-8 max-w-lg rounded-lg">
      <div className="flex justify-evenly">
        <p className="mr-4">
          <label className={label}>Initial Investment</label>
          <input
            className={input}
            value={userInput.initAmount}
            type="number"
            placeholder="0"
            required
          />
        </p>
        <p>
          <label className={label}>Annual Investment</label>
          <input
            className={input}
            value={userInput.annualInvestment}
            type="number"
            placeholder="0"
            required
          />
        </p>
      </div>
      <div className="flex justify-evenly">
        <p className="mr-4">
          <label className={label}>Expected Return</label>
          <input
            className={input}
            value={userInput.returns}
            type="number"
            placeholder="0"
            required
          />
        </p>
        <p>
          <label className={label}>Duration</label>
          <input
            className={input}
            value={userInput.duration}
            type="number"
            placeholder="0"
            required
          />
        </p>
      </div>
    </section>
  );
}
