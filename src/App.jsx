import React, { useState, useEffect } from "react";
import "./index.css";
import TaskManager from "./components/TaskManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { fetchSampleData } from "./api/fetchData";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API data on component mount
  useEffect(() => {
    async function loadData() {
      const data = await fetchSampleData();
      setApiData(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

   <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Task Manager Section */}
        <TaskManager />

        {/* API Data Section */}
     <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
       <div className="flex justify-between items-center mb-4">
         <h2 className="text-2xl font-bold mb-4">API Data</h2>
         
         <button
           onClick={async () => {
             setLoading(true);
             const data = await fetchSampleData();
             setApiData(data);
             setLoading(false);
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
         >
            Refresh
         </button>
       </div>

       {loading ? (
         <p className="text-gray-500 dark:text-gray-400">Loading...</p>
       ) : apiData.length === 0 ? (
         <p className="text-red-500">No data available.</p>
       ) : (
         <ul className="space-y-3">
           {apiData.map((item) => (
            <li
              key={item.id}
              className="p-3 border-b border-gray-300 dark:border-gray-700"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.body}
              </p>
            </li>
            ))}
          </ul>
         )}
      </div>
    </main>
      <Footer />
  </div>
  );
}

export default App;
