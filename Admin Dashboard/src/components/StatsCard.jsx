// src/components/StatsCard.jsx
export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 group">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {value}
      </p>

      {/* style visual in cards */}
      <div className="mt-4 flex items-end space-x-1 h-8 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded-sm bg-gradient-to-t from-indigo-400 to-purple-500 ${
              i % 2 === 0 ? 'h-3' : 'h-5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
