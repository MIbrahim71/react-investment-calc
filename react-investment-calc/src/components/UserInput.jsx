export default function UserInput({ userInput, onChange }) {
  const label = "block mb-1 font-light";
  const input = "rounded-md text-slate-800 text-lg p-1 text-center ";

  return (
    <section className="flex flex-col gap-4 bg-slate-600 mx-auto p-4 mt-8 max-w-lg rounded-lg">
      <div className="flex justify-evenly">
        <p className="mr-4">
          <label className={label}>Initial Investment</label>
          <input
            className={input}
            value={Number(userInput.initAmount).toString()}
            onChange={(event) => onChange("initAmount", event.target.value)}
            type="number"
            placeholder="0"
            required
          />
        </p>
        <p>
          <label className={label}>Annual Investment</label>
          <input
            className={input}
            value={Number(userInput.annualInvestment).toString()}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
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
            value={Number(userInput.returns).toString()}
            onChange={(event) => onChange("returns", event.target.value)}
            type="number"
            placeholder="0"
            required
          />
        </p>
        <p>
          <label className={label}>Duration</label>
          <input
            className={input}
            value={Number(userInput.duration).toString()}
            onChange={(event) => onChange("duration", event.target.value)}
            type="number"
            placeholder="0"
            required
          />
        </p>
      </div>
    </section>
  );
}
