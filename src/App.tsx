import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "2018", js: 69, ts: 19 },
  { date: "2019", js: 67, ts: 21 },
  { date: "2020", js: 67, ts: 25 },
  { date: "2021", js: 68, ts: 36 },
  { date: "2022", js: 67, ts: 40 },
  { date: "2023", js: 65, ts: 43 },
];

function App() {
  return (
    <div className="flex items-center text-white bg-slate-900 h-screen flex-col justify-center gap-4">
      <div className="w-full max-w-lg h-60 border border-slate-700 p-2 py-8 m-2 rounded-md">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#1e293b"
            />

            <Area
              dataKey="ts"
              type="monotone"
              fill={`url(#cyan-gradient)`}
              stroke="#06b6d4"
            />

            <Area
              dataKey="js"
              type="monotone"
              fill={`url(#red-gradient)`}
              stroke="#ef4444"
            />

            <XAxis
              dataKey="date"
              fontSize={10}
              stroke="#334155"
              tickLine={false}
              axisLine={false}
              interval={1}
            />

            <YAxis
              dataKey="js"
              stroke="#334155"
              tickLine={false}
              tickFormatter={(value) => {
                return `${value}%`;
              }}
              axisLine={false}
              interval={1}
              fontSize={10}
            />

            <Tooltip
              cursor={{
                radius: 4,
                stroke: "#334155",
              }}
              content={({ active, payload }) => {
                if (!active || !payload || payload.length === 0) {
                  return null;
                }

                return (
                  <div className="rounded-lg border bg-slate-800 border-slate-700 p-2 shadow-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          Date
                        </span>
                        <span className="font-bold text-sm text-slate-300">
                          {payload[0].payload.date}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          JS
                        </span>
                        <span className="font-bold text-sm text-slate-300">
                          {payload[0].payload.js}%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          TS
                        </span>
                        <span className="font-bold text-sm text-slate-300">
                          {payload[0].payload.ts}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <defs>
              <linearGradient id="cyan-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#8b5cf6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#fbbf24" stopOpacity={0.05} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
