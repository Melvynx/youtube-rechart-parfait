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
  { date: "2023-04-01", cashIn: 1926, cashOut: 1450 },
  { date: "2023-04-02", cashIn: 2994, cashOut: 2235 },
  { date: "2023-04-03", cashIn: 5000, cashOut: 3668 },
  { date: "2023-04-04", cashIn: 8000, cashOut: 4959 },
  { date: "2023-04-05", cashIn: 12000, cashOut: 6277 },
  { date: "2023-04-06", cashIn: 11000, cashOut: 6876 },
  { date: "2023-04-07", cashIn: 4000, cashOut: 7410 },
  { date: "2023-04-08", cashIn: 7000, cashOut: 8624 },
  { date: "2023-04-09", cashIn: 12000, cashOut: 9890 },
  { date: "2023-04-10", cashIn: 16000, cashOut: 10955 },
  { date: "2023-04-11", cashIn: 17000, cashOut: 11712 },
  { date: "2023-04-12", cashIn: 18000, cashOut: 12811 },
];

function App() {
  return (
    <div className="flex items-center bg-slate-950 h-screen flex-col justify-center gap-4">
      <div className="w-full max-w-lg h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            <Area
              type="monotone"
              dataKey="cashIn"
              stroke="#0ea5e9"
              fill={`url(#color-primary)`}
            />

            <XAxis
              dataKey="date"
              stroke="#475569"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              interval={3}
            />

            <YAxis
              dataKey="cashIn"
              tickFormatter={(value) =>
                "$" + Intl.NumberFormat("en-US").format(value)
              }
              stroke="#475569"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              interval={1}
            />

            <Tooltip
              cursor={{
                fill: "#0ea5e9",
                radius: 4,
              }}
              content={({ active, payload }) => {
                if (active && payload && payload.length > 0) {
                  return (
                    <div className="rounded-lg border bg-slate-800 border-slate-700 p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-slate-400">
                            Date
                          </span>
                          <span className="font-bold text-slate-300">
                            {payload[0].payload.date}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-slate-400">
                            Cash In
                          </span>
                          <span className="font-bold text-slate-300">
                            $
                            {Intl.NumberFormat("en-US").format(
                              payload[0].payload.cashIn
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              }}
            />

            <defs>
              <linearGradient id={`color-primary`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.4}></stop>
                <stop
                  offset="75%"
                  stopColor="#3b82f6"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
