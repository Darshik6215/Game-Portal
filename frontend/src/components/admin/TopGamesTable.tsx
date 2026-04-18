import { TrendingUp, TrendingDown } from 'lucide-react';

interface Game {
  id: number;
  name: string;
  category: string;
  views: number;
  change: number;
  rating: number;
}

const topGames: Game[] = [
  { id: 1, name: 'Cyber Racer', category: 'Racing', views: 12500, change: 12.5, rating: 4.8 },
  { id: 2, name: 'Shadow Ninja', category: 'Action', views: 10200, change: 8.3, rating: 4.9 },
  { id: 3, name: 'Logic Master', category: 'Puzzle', views: 9800, change: -2.1, rating: 4.7 },
  { id: 4, name: 'Space Explorer', category: 'Adventure', views: 8900, change: 15.7, rating: 4.6 },
  { id: 5, name: 'Drift Hunters', category: 'Racing', views: 8500, change: 5.2, rating: 4.9 },
];

export default function TopGamesTable() {
  return (
    <div className="rounded-xl border bg-card shadow-sm">
      <div className="border-b p-6">
        <h3 className="text-lg font-semibold">Top Performing Games</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Most viewed games this month
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50 dark:bg-slate-900/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Game
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {topGames.map((game) => (
              <tr key={game.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">
                      {game.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{game.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                    {game.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {game.views.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {game.change > 0 ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">
                          +{game.change}%
                        </span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">
                          {game.change}%
                        </span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{game.rating}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
