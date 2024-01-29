export default function UserInput() {
  return (
    <section className="flex flex-col gap-4 bg-slate-600 mx-auto p-4 max-w-lg rounded-lg">
      <div className="flex flex-row gap-8">
        <p className="">
          <label>Initial Investment</label>
          <input type="number" required />
        </p>
        <p className="">
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <p className="">
          <label>Expected Return</label>
          <input type="number" required />
        </p>
        <p className="">
          <label className="block">Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
