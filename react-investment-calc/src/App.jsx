import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />
      <UserInput />
    </main>
  );
}

export default App;
