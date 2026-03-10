// App.jsx
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import UserA from "./components/UserA";
import UserB from "./components/UserB";
import UserC from "./components/UserC";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        State Management
      </h1>
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-8">
          <A /> {/* selector of component A, by using components we can create an element */}
          <B />
          <C />
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center gap-8">
          <UserA />
          <UserB />
          <UserC />
        </div>
      </section>
    </div>
  );
}

export default App;