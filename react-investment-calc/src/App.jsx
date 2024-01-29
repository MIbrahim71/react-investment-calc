import Header from "./components/Header";
import Output from "./components/Output";
import UserInput from "./components/UserInput";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />
      <UserInput />
      <Output />
    </main>
  );
}

export default App;
