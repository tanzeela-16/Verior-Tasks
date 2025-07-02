import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import StatsCard from '../components/StatsCard';

const lineData = [
  { name: 'Mon', sales: 1200 },
  { name: 'Tue', sales: 1800 },
  { name: 'Wed', sales: 1000 },
  { name: 'Thu', sales: 2200 },
  { name: 'Fri', sales: 1700 },
  { name: 'Sat', sales: 2100 },
  { name: 'Sun', sales: 2500 },
];

const barData = [
  { name: 'Mon', orders: 50 },
  { name: 'Tue', orders: 75 },
  { name: 'Wed', orders: 60 },
  { name: 'Thu', orders: 90 },
  { name: 'Fri', orders: 85 },
  { name: 'Sat', orders: 95 },
  { name: 'Sun', orders: 110 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-white/30 dark:bg-black/30 backdrop-blur-md min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Revenue" value="$15,000" />
        <StatsCard title="Total Orders" value="1,250" />
        <StatsCard title="Customers" value="865" />
        <StatsCard title="Conversion Rate" value="3.2%" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 backdrop-blur-md bg-gradient-to-br from-white/60 to-white/30 dark:from-[#1e1e1e]/60 dark:to-[#0f0f0f]/30">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="url(#lineGradient)"
                strokeWidth={3}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform border border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 backdrop-blur-md bg-gradient-to-br from-white/60 to-white/30 dark:from-[#1e1e1e]/60 dark:to-[#0f0f0f]/30">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="orders"
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
